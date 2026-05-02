import Icon from "./Icon";
import { storeNotices } from "../data/content";

export default function StoreSection() {
  return (
    <section className="section" id="store">
      <div className="wrap store-grid">
        <div className="store-panel">
          <div className="section-kicker" style={{ color: "var(--lemon)" }}>
            <Icon name="store" />
            到店服务
          </div>
          <h2>想现场挑色、试发饰，也可以到店</h2>
          <p>
            门店具体地址暂未写死，预约到店后可由客服发送定位。到店更适合现场选款、试搭汉服和确认造型细节。
          </p>
          <a className="btn btn-primary" href="#booking">
            预约到店
          </a>
        </div>

        <div className="grid notice-grid">
          {storeNotices.map((item) => (
            <article className="notice-item" key={item.title}>
              <Icon name={item.icon} className="icon-lg icon" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
