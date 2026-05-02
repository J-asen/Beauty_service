import { projectOptionsByAudience } from "../../../data/content";

function validateBooking(values) {
  const errors = {};
  const adults = Number(values.adultCount || 0);
  const children = Number(values.childCount || 0);

  if (!values.name || values.name.trim().length < 2) {
    errors.name = "请填写至少 2 个字的联系人姓名。";
  }

  if (!/^1[3-9]\d{9}$/.test((values.phone || "").trim())) {
    errors.phone = "请填写 11 位中国大陆手机号。";
  }

  if (!["home", "store"].includes(values.serviceMode)) {
    errors.serviceMode = "请选择服务方式。";
  }

  if (values.serviceMode === "home" && (!values.address || values.address.trim().length < 6)) {
    errors.address = "上门服务请填写较完整的服务地址。";
  }

  if (!values.date) {
    errors.date = "请选择预约日期。";
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const picked = new Date(`${values.date}T00:00:00`);
    if (Number.isNaN(picked.getTime()) || picked < today) {
      errors.date = "预约日期不能早于今天。";
    }
  }

  if (!values.time) {
    errors.time = "请选择时间段。";
  }

  if (!values.audience || !projectOptionsByAudience[values.audience]) {
    errors.audience = "请选择服务对象。";
  }

  if (
    !values.project ||
    !projectOptionsByAudience[values.audience]?.includes(values.project)
  ) {
    errors.project = "请选择与服务对象匹配的服务项目。";
  }

  if (values.audience === "成人" && (!Number.isInteger(adults) || adults < 1 || adults > 20)) {
    errors.adultCount = "成人数量请填写 1-20 的整数。";
  }

  if (values.audience === "儿童" && (!Number.isInteger(children) || children < 1 || children > 20)) {
    errors.childCount = "儿童数量请填写 1-20 的整数。";
  }

  if (
    values.audience === "亲子一起" &&
    (!Number.isInteger(adults) || !Number.isInteger(children) || adults < 1 || children < 1)
  ) {
    errors.adultCount = "亲子一起预约至少需要 1 位成人。";
    errors.childCount = "亲子一起预约至少需要 1 位儿童。";
  }

  if (
    values.audience === "多人派对" &&
    (!Number.isInteger(adults) ||
      !Number.isInteger(children) ||
      adults + children <= 0 ||
      adults > 20 ||
      children > 20)
  ) {
    errors.adultCount = "成人和儿童数量至少填写 1 位，且单项不超过 20 位。";
  }

  return errors;
}

export async function POST(request) {
  let values;

  try {
    values = await request.json();
  } catch (error) {
    return Response.json({ message: "请求内容不是有效 JSON。" }, { status: 400 });
  }

  const errors = validateBooking(values);
  if (Object.keys(errors).length > 0) {
    return Response.json({ message: "预约信息需要修正。", errors }, { status: 400 });
  }

  return Response.json(
    {
      ok: true,
      message: "预约信息已通过接口校验。后续可在这里接入 Supabase 写入逻辑。",
      booking: {
        serviceMode: values.serviceMode,
        date: values.date,
        time: values.time,
        audience: values.audience,
        project: values.project,
        adultCount: Number(values.adultCount || 0),
        childCount: Number(values.childCount || 0),
      },
    },
    { status: 201 },
  );
}
