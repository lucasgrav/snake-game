import styles from "./page.module.css";
import ContainerSnake from "@/components/ContainerSnake/ContainerSnake";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Snake Game</h1>
      <ContainerSnake />
    </main>
  );
}
