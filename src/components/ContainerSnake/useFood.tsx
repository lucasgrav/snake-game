import { useState } from "react";
export default function useFood() {
  const [foodX, setFoodX] = useState<number>();
  const [foodY, setFoodY] = useState<number>();

  const foodPositionRandom = () => {
    const newFoodX = Math.floor(Math.random() * 30) + 1;
    const newFoodY = Math.floor(Math.random() * 30) + 1;

    setFoodX(newFoodX);
    setFoodY(newFoodY);
  };

  const food = () => {
    if (foodX !== null && foodY !== null) {
      return (
        <div
          style={{ gridArea: `${foodY} / ${foodX}`, backgroundColor: "red" }}
        ></div>
      );
    }
    return null;
  };

  return { food, foodPositionRandom, foodX, foodY };
}
