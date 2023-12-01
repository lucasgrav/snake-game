interface SnakeProps {
  snakeX: number | undefined;
  snakeY: number | undefined;
}
const Snake: React.FC<SnakeProps> = ({ snakeY, snakeX }) => {
  return (
    <div
      style={{
        gridArea: `${snakeY} / ${snakeX}`,
        backgroundColor: "green",
      }}
    ></div>
  );
};

export default Snake;
