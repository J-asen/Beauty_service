import BookingForm from "./BookingForm";
import Icon from "./Icon";

export default function BookingSection() {
  return (
    <section className="section booking-band" id="booking">
      <div className="wrap booking-layout">
        <div className="booking-copy">
          <div className="section-kicker">
            <Icon name="calendarDots" />
            预约表单
          </div>
          <h2>先留下需求，我们来帮你排时间</h2>
          <p>
            填写服务方式、时间、人数和想做的项目，我们会按上门或到店场景帮你确认更合适的安排。
          </p>
          <div className="policy-list">
            <div className="policy-item">
              <Icon name="location" />
              <div>
                <strong>门店周边 10km 上门</strong>
                <span>填写地址后可用于确认是否在服务范围内。</span>
              </div>
            </div>
            <div className="policy-item">
              <Icon name="money" />
              <div>
                <strong>满 299 元免上门费</strong>
                <span>未满 299 元收取 39 元固定上门服务费。</span>
              </div>
            </div>
          </div>
        </div>

        <BookingForm />
      </div>
    </section>
  );
}
