import SectionHeading from "./SectionHeading";
import { packages } from "../data/content";

export default function PackagesSection() {
  return (
    <section className="section package-band" id="packages">
      <div className="wrap">
        <SectionHeading
          icon="gift"
          kicker="场景化组合"
          title="亲子一起变漂亮，流程更省心"
          note="可以按成人、儿童或家庭小聚会来组合服务，预约时写上人数和场景即可。"
        />

        <div className="grid packages-grid">
          {packages.map((item) => (
            <article className="package-card" key={item.title}>
              <span className="tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
