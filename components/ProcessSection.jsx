import SectionHeading from "./SectionHeading";
import { processSteps } from "../data/content";

export default function ProcessSection() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <SectionHeading
          icon="process"
          kicker="上门流程"
          title="预约、确认、上门、开美"
          note="上门前会核对服务地址、项目组合和预计时长，减少临时沟通成本。"
        />

        <div className="grid steps-grid">
          {processSteps.map((step) => (
            <article className="step" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
