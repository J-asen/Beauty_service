import { projectOptionsByAudience, timeSlots } from "../../../data/content";
import { getSql } from "../../../lib/db";

export const runtime = "nodejs";

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

  if (!values.time || !timeSlots.includes(values.time)) {
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

  const adultCount = Number(values.adultCount || 0);
  const childCount = Number(values.childCount || 0);

  try {
    const sql = getSql();
    const [booking] = await sql`
      insert into public.bookings (
        contact_name,
        phone,
        service_mode,
        service_address,
        booking_date,
        time_slot,
        audience,
        project,
        adult_count,
        child_count,
        notes,
        raw_payload
      ) values (
        ${values.name.trim()},
        ${(values.phone || "").trim()},
        ${values.serviceMode},
        ${values.serviceMode === "home" ? values.address.trim() : null},
        ${values.date},
        ${values.time},
        ${values.audience},
        ${values.project},
        ${adultCount},
        ${childCount},
        ${values.notes?.trim() || null},
        ${sql.json({
          ...values,
          name: values.name.trim(),
          phone: (values.phone || "").trim(),
          adultCount,
          childCount,
        })}
      )
      returning id, status, created_at
    `;

    return Response.json(
      {
        ok: true,
        message: "预约已提交，我们会尽快联系你确认。",
        booking,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to create booking", error);

    return Response.json(
      {
        message: "预约提交失败，请稍后再试。",
      },
      { status: 500 },
    );
  }
}
