import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { prepNotices } from "../data/content";

export default function TipsSection() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading
          icon="warning"
          kicker="温馨提示"
          title="让上门体验更顺畅的小准备"
        />

        <div className="grid notice-grid">
          {prepNotices.map((item) => (
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
