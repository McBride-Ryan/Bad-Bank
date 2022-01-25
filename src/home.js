import { Card } from "./context";

function Home() {
  return (
    <Card
      className="mx-auto"
      txtcolor="black"
      header="Hamm Banking using ReactJS"
      title="Hamm is a wise-cracking plastic piggy bank with a cork in his belly. His alter ego, Evil Doctor Porkchop, spends all his money. However, Hamm is definitely a saver."
      body={
        <img src="bank.png" className="img-fluid" alt="Welcome to BadBank" />
      }
    />
  );
}

export { Home };
