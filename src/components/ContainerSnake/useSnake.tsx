import { useState, KeyboardEventHandler, KeyboardEvent } from "react";
export default function useSnake() {
  const [snakeX, setSnakeX] = useState<number>(5);
  const [snakeY, setSnakeY] = useState<number>(10);
  const [direction, setDirection] = useState<string | null>(null);

  const snakeMobility: KeyboardEventHandler<HTMLElement> = (event) => {
    setDirection(event.key);
  };

  const moveSnake = () => {
    if (direction) {
      switch (direction) {
        case "ArrowUp":
          setSnakeY((prevY) => prevY - 1);
          break;
        case "ArrowDown":
          setSnakeY((prevY) => prevY + 1);
          break;
        case "ArrowLeft":
          setSnakeX((prevX) => prevX - 1);
          break;
        case "ArrowRight":
          setSnakeX((prevX) => prevX + 1);
          break;
        default:
          break;
      }
    }
  };

  const snake = () => {
    return (
      <div
        style={{
          gridArea: `${snakeY} / ${snakeX}`,
          backgroundColor: "green",
        }}
      ></div>
    );
  };

  return { snake, snakeMobility, moveSnake, snakeX, snakeY };
}
