import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { services } from "../data/content";

export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <SectionHeading
          icon="sparkle"
          kicker="成人与儿童项目"
          title="从日常变美到亲子出片，一次预约就能搭好"
          note="项目价格按实际服务组合确认；上门费规则固定，预约前会再次核对。"
        />

        <div className="grid services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="icon-box" aria-hidden="true">
                <Icon name={service.icon} className="icon-lg icon" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="tags">
                {service.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
