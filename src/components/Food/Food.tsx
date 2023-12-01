interface FoodProps {
  foodX: number | undefined;
  foodY: number | undefined;
}

const Food: React.FC<FoodProps> = ({ foodX, foodY }) => {
  return (
    <div
      style={{ gridArea: `${foodY} / ${foodX}`, backgroundColor: "red" }}
    ></div>
  );
};

export default Food;
