"use client";

import { useEffect, useState } from "react";
import { projectOptionsByAudience } from "../data/content";
import Icon from "./Icon";

function toLocalDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const initialForm = {
  name: "",
  phone: "",
  serviceMode: "home",
  address: "",
  date: "",
  time: "",
  audience: "",
  project: "",
  adultCount: "1",
  childCount: "1",
  notes: "",
};

function getVisibility(audience) {
  return {
    showAdult: audience === "成人" || audience === "亲子一起" || audience === "多人派对",
    showChild: audience === "儿童" || audience === "亲子一起" || audience === "多人派对",
    minAdult: audience === "多人派对" ? 0 : 1,
    minChild: audience === "多人派对" ? 0 : 1,
  };
}

function validate(values) {
  const errors = {};
  const visibility = getVisibility(values.audience);
  const adults = Number(values.adultCount || 0);
  const children = Number(values.childCount || 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (!values.name || values.name.trim().length < 2) {
    errors.name = "请填写至少 2 个字的联系人姓名。";
  }

  if (!/^1[3-9]\d{9}$/.test((values.phone || "").trim())) {
    errors.phone = "请填写 11 位中国大陆手机号。";
  }

  if (values.serviceMode === "home" && (!values.address || values.address.trim().length < 6)) {
    errors.address = "上门服务请填写较完整的服务地址。";
  }

  if (!values.date) {
    errors.date = "请选择预约日期。";
  } else {
    const picked = new Date(`${values.date}T00:00:00`);
    if (picked < today) {
      errors.date = "预约日期不能早于今天。";
    }
  }

  ["time", "audience", "project"].forEach((name) => {
    if (!values[name]) {
      errors[name] = "请选择一项。";
    }
  });

  if (
    values.audience &&
    values.project &&
    !projectOptionsByAudience[values.audience]?.includes(values.project)
  ) {
    errors.project = "请选择与服务对象匹配的服务项目。";
  }

  if (
    visibility.showAdult &&
    (!Number.isInteger(adults) || adults < visibility.minAdult || adults > 20)
  ) {
    errors.adultCount = `成人数量请填写 ${visibility.minAdult}-20 的整数。`;
  }

  if (
    visibility.showChild &&
    (!Number.isInteger(children) || children < visibility.minChild || children > 20)
  ) {
    errors.childCount = `儿童数量请填写 ${visibility.minChild}-20 的整数。`;
  }

  if (values.audience === "亲子一起" && (adults < 1 || children < 1)) {
    errors.adultCount = "亲子一起预约至少需要 1 位成人。";
    errors.childCount = "亲子一起预约至少需要 1 位儿童。";
  } else if (values.audience === "多人派对" && adults + children <= 0) {
    errors.adultCount = "成人和儿童数量至少填写 1 位。";
    errors.childCount = "成人和儿童数量至少填写 1 位。";
  }

  return { errors, adults, children };
}

export default function BookingForm() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [minDate, setMinDate] = useState("");
  const visibility = getVisibility(values.audience);
  const projectOptions = projectOptionsByAudience[values.audience] || [];

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    setMinDate(toLocalDateValue(currentDate));
  }, []);

  function updateField(name, value) {
    setSuccess("");
    setErrors((current) => ({ ...current, [name]: "" }));

    if (name === "serviceMode") {
      setValues((current) => ({
        ...current,
        serviceMode: value,
        address: value === "store" ? "" : current.address,
      }));
      return;
    }

    if (name === "audience") {
      const nextVisibility = getVisibility(value);
      setValues((current) => ({
        ...current,
        audience: value,
        project: "",
        adultCount: nextVisibility.showAdult ? "1" : "0",
        childCount: nextVisibility.showChild ? "1" : "0",
      }));
      return;
    }

    setValues((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSuccess("");

    const result = validate(values);
    setErrors(result.errors);
    if (Object.keys(result.errors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          adultCount: result.adults,
          childCount: result.children,
        }),
      });
      const payload = await response.json();

      if (!response.ok) {
        setErrors(payload.errors || { form: payload.message || "提交失败，请稍后再试。" });
        return;
      }

      const modeText = values.serviceMode === "home" ? "上门服务" : "到店服务";
      const feeText =
        values.serviceMode === "home"
          ? "上门服务范围为门店周边 10km，满 299 元免上门服务费，未满收取 39 元。"
          : "到店服务预约成功后可由客服发送具体定位。";
      const countText = [
        result.adults > 0 ? `成人 ${result.adults} 位` : "",
        result.children > 0 ? `儿童 ${result.children} 位` : "",
      ]
        .filter(Boolean)
        .join("、");

      setSuccess(
        `预约已收到：${modeText}，${values.date} ${values.time}，${values.project}，${countText}。${feeText}`,
      );
    } catch (error) {
      setErrors({ form: "网络提交失败，请稍后再试。" });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="form-panel" id="bookingForm" noValidate onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">联系人姓名</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="例如：Jasen"
            required
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
          />
          <p className="error">{errors.name}</p>
        </div>

        <div className="field">
          <label htmlFor="phone">手机号</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="用于确认预约"
            required
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
          />
          <p className="error">{errors.phone}</p>
        </div>

        <div className="field full">
          <label>服务方式</label>
          <div className="choice-row" role="radiogroup" aria-label="服务方式">
            <label>
              <input
                type="radio"
                name="serviceMode"
                value="home"
                checked={values.serviceMode === "home"}
                onChange={(event) => updateField("serviceMode", event.target.value)}
              />
              <span className="choice">
                <Icon name="home" />
                <span>
                  <b>上门服务</b>
                  <small>主推，限门店周边 10km</small>
                </span>
              </span>
            </label>
            <label>
              <input
                type="radio"
                name="serviceMode"
                value="store"
                checked={values.serviceMode === "store"}
                onChange={(event) => updateField("serviceMode", event.target.value)}
              />
              <span className="choice">
                <Icon name="store" />
                <span>
                  <b>到店服务</b>
                  <small>适合现场选款和试搭</small>
                </span>
              </span>
            </label>
          </div>
        </div>

        {values.serviceMode === "home" ? (
          <div className="field full" id="addressField">
            <label htmlFor="address">上门服务地址</label>
            <input
              id="address"
              name="address"
              type="text"
              autoComplete="street-address"
              placeholder="请填写小区/街道/门牌号"
              required
              value={values.address}
              onChange={(event) => updateField("address", event.target.value)}
            />
            <p className="hint">限门店周边 10km；满 299 元免上门服务费，未满收取 39 元。</p>
            <p className="error">{errors.address}</p>
          </div>
        ) : null}

        <div className="field">
          <label htmlFor="date">预约日期</label>
          <input
            id="date"
            name="date"
            type="date"
            min={minDate}
            required
            value={values.date}
            onChange={(event) => updateField("date", event.target.value)}
          />
          <p className="error">{errors.date}</p>
        </div>

        <div className="field">
          <label htmlFor="time">预约时间</label>
          <select
            id="time"
            name="time"
            required
            value={values.time}
            onChange={(event) => updateField("time", event.target.value)}
          >
            <option value="">请选择时间段</option>
            <option>10:00 - 12:00</option>
            <option>13:00 - 15:00</option>
            <option>15:30 - 17:30</option>
            <option>18:30 - 20:30</option>
          </select>
          <p className="error">{errors.time}</p>
        </div>

        <div className="field" id="audienceField">
          <label htmlFor="audience">服务对象</label>
          <select
            id="audience"
            name="audience"
            required
            value={values.audience}
            onChange={(event) => updateField("audience", event.target.value)}
          >
            <option value="">请选择服务对象</option>
            <option>成人</option>
            <option>儿童</option>
            <option>亲子一起</option>
            <option>多人派对</option>
          </select>
          <p className="error">{errors.audience}</p>
        </div>

        <div className="field" id="projectField">
          <label htmlFor="project">服务项目</label>
          <select
            id="project"
            name="project"
            required
            disabled={!values.audience}
            value={values.project}
            onChange={(event) => updateField("project", event.target.value)}
          >
            <option value="">{values.audience ? "请选择服务项目" : "请先选择服务对象"}</option>
            {projectOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <p className="error">{errors.project}</p>
        </div>

        <div
          className={`field ${visibility.showAdult ? "" : "is-hidden"} ${
            visibility.showAdult && !visibility.showChild ? "full" : ""
          }`}
          id="adultCountField"
        >
          <label htmlFor="adultCount">成人数量</label>
          <input
            id="adultCount"
            name="adultCount"
            type="number"
            min={visibility.minAdult}
            max="20"
            required={visibility.showAdult}
            value={values.adultCount}
            onChange={(event) => updateField("adultCount", event.target.value)}
          />
          <p className="error">{errors.adultCount}</p>
        </div>

        <div
          className={`field ${visibility.showChild ? "" : "is-hidden"} ${
            visibility.showChild && !visibility.showAdult ? "full" : ""
          }`}
          id="childCountField"
        >
          <label htmlFor="childCount">儿童数量</label>
          <input
            id="childCount"
            name="childCount"
            type="number"
            min={visibility.minChild}
            max="20"
            required={visibility.showChild}
            value={values.childCount}
            onChange={(event) => updateField("childCount", event.target.value)}
          />
          <p className="error">{errors.childCount}</p>
        </div>

        <div className="field full">
          <label htmlFor="notes">备注</label>
          <textarea
            id="notes"
            name="notes"
            placeholder="例如：孩子年龄、是否需要汉服、想要的风格、是否生日派对等"
            value={values.notes}
            onChange={(event) => updateField("notes", event.target.value)}
          />
        </div>
      </div>

      <div className="form-actions" style={{ marginTop: 18 }}>
        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
          <Icon name="send" />
          {isSubmitting ? "提交中" : "提交预约"}
        </button>
      </div>
      {errors.form ? <p className="error">{errors.form}</p> : null}
      <div className={`success ${success ? "is-visible" : ""}`} role="status" aria-live="polite">
        {success}
      </div>
    </form>
  );
}
