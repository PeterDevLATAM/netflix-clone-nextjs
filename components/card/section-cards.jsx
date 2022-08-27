import styles from "./section-cards.module.css";
import Card from "./card";

export default function SectionCards(props) {
  const { title, videos, size } = props;
  console.log({ videos });

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          const { id, imgUrl, title } = video;
          return <Card key={idx} imgUrl={imgUrl} size={size} id={idx} />;
        })}
      </div>
    </section>
  );
}
