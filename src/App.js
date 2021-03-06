import Costs from "./components/Costs";

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2021, 11, 25),
      description: "Macbook",
      amount: 1245.72,
    },
    {
      date: new Date(2021, 4, 1),
      description: "Джинсы",
      amount: 49.99,
    },
  ];

  return (
    <>
      <h1>Начнем изучение React</h1>
      <Costs costs={costs} />
    </>
  );
}

export default App;
