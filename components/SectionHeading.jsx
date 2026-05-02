import Icon from "./Icon";

export default function SectionHeading({ icon, kicker, title, note, style }) {
  return (
    <div className="section-head">
      <div>
        <div className="section-kicker" style={style}>
          <Icon name={icon} />
          {kicker}
        </div>
        <h2 className="section-title">{title}</h2>
      </div>
      {note ? <p className="section-note">{note}</p> : null}
    </div>
  );
}
