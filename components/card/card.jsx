import Image from "next/image";
import { useState } from "react";
import styles from "./card.module.css";
import { motion } from "framer-motion";
import cls from "classnames";

export default function Card(props) {
  const {
    imgUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1718&q=80",
    size = "medium",
  } = props;

  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError = () => {
    console.log("The Img src was incorrect, displaying default picture");
    setImgSrc(
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1718&q=80"
    );
  };

  return (
    <div className={styles.container}>
      <motion.div whileHover={{ scale: 1.2 }} className={cls(styles.imgMotionWrapper, classMap[size])}>
        <Image
          src={imgSrc}
          alt="card image"
          layout="fill"
          className={styles.cardImg}
          onError={handleOnError}
        />
      </motion.div>
    </div>
  );
}
