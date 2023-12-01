"use client";
import styles from "./ContainerSnake.module.css";
import { useEffect } from "react";
import useFood from "../Food/useFood";
import useSnake from "../Snake/useSnake";
import Food from "../Food/Food";
import Snake from "../Snake/Snake";
export default function ContainerSnake() {
  const { foodPositionRandom, foodX, foodY } = useFood();
  const { snakeMobility, moveSnake, snakeX, snakeY } = useSnake();

  if (foodX === snakeX && foodY === snakeY) {
    foodPositionRandom();
  }

  useEffect(() => {
    foodPositionRandom();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(moveSnake, 50);
    return () => clearInterval(intervalId);
  }, [moveSnake]);

  return (
    <section
      className={styles.containerSnake}
      onKeyDown={snakeMobility}
      tabIndex={0}
    >
      <Food foodX={foodX} foodY={foodY} />
      <Snake snakeX={snakeX} snakeY={snakeY} />
    </section>
  );
}
