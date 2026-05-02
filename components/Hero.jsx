import Icon from "./Icon";
import { heroFacts } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" aria-label="上门美妆预约">
      <div className="hero-inner">
        <div className="eyebrow">
          <Icon name="home" />
          主打上门服务，也欢迎到店体验
        </div>
        <h1>把亲子美妆小派对带到家里</h1>
        <p className="hero-copy">
          成人美甲、发型、妆造、汉服造型，搭配儿童彩绘、美甲、发型和儿童汉服。适合周末亲子日、生日派对、节日出片和家庭聚会。
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#booking">
            <Icon name="plusArrow" />
            立即预约上门
          </a>
          <a className="btn btn-ghost" href="#store">
            <Icon name="location" />
            查看到店服务
          </a>
        </div>
        <div className="hero-facts" aria-label="预约政策">
          {heroFacts.map((fact) => (
            <div className="fact" key={fact.title}>
              <strong>{fact.title}</strong>
              <span>{fact.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
