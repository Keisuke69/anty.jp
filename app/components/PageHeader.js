import styles from "./PageHeader.module.css";

export default function PageHeader({ eyebrow, title, lead }) {
  return (
    <div className={styles.header}>
      <div className="container">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1 className={styles.title}>{title}</h1>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
      </div>
    </div>
  );
}
