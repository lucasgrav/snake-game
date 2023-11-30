"use client";
import styles from "./ContainerSnake.module.css";
import { useEffect } from "react";
import useFood from "./useFood";
import useSnake from "./useSnake";
export default function ContainerSnake() {
  const { food, foodPositionRandom, foodX, foodY } = useFood();
  const { snake, snakeMobility, moveSnake, snakeX, snakeY } = useSnake();

  if (foodX === snakeX && foodY === snakeY) {
    foodPositionRandom();
  }

  useEffect(() => {
    foodPositionRandom();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(moveSnake, 125);
    return () => clearInterval(intervalId);
  }, [moveSnake]);

  return (
    <section
      className={styles.containerSnake}
      onKeyDown={snakeMobility}
      tabIndex={0}
    >
      {food()}
      {snake()}
    </section>
  );
}
