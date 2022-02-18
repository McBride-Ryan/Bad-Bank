import { Card } from "./context";

function Home() {
  return (
    <Card
      className="mx-auto"
      txtcolor="black"
      header="Banking"
      title="Hurry now! New Users collect a bonus $100 when they create an account! Don't miss out!"
      body={
        <img src="bank.png" className="img-fluid" alt="Welcome to BadBank" />
      }
    />
  );
}

export { Home };
