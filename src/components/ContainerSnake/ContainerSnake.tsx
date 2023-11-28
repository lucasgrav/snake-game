"use client";
import styles from "./ContainerSnake.module.css";
import { useEffect } from "react";
import useFood from "./useFood";
export default function ContainerSnake() {
  const { food, foodPositionRandom } = useFood();

  useEffect(() => {
    foodPositionRandom();
  }, []);

  return <section className={styles.containerSnake}>{food()}</section>;
}
