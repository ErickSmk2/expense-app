import { VictoryPie, VictoryLabel } from 'victory';
import { useGlobalState } from "../Context/GloblaState";

export function ExpenseChart() {
  const { transaction } = useGlobalState();

  const totalIncomes = transaction
    .filter((transaction) => transaction.monto > 0)
    .reduce((acc, transaction) => (acc += transaction.monto), 0);

  const totalExpenses = transaction
    .filter((transaction) => transaction.monto < 0)
    .reduce((acc, transaction) => (acc += transaction.monto), 0) * -1;

  

  const expensesPercentage = Math.round((totalExpenses / totalIncomes) * 100);
  const incomesPercentage = 100 - (expensesPercentage);

  if (totalIncomes === 0 && totalExpenses === 0) {
    return (
      <div className="bg-zinc-900 p-4 my-2">
        <div className="h-full flex items-center justify-center w-full flex-col">
          <h1 className="text-3xl font-bold my-2">No hay datos</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-950" style={{ overflow: 'hidden' }}>
      <VictoryPie
      width={300} // Ajusta el ancho según tus necesidades
      height={300}
        colorScale={["#8B0000", "#00008B"]}
        data={[
          { x: "Gastos", y: expensesPercentage },
          { x: "Ingresos", y: incomesPercentage },
        ]}
        animate={{
          duration: 2000,
        }}
        labels={({ datum }) => datum.x} 
        labelComponent={
          <VictoryLabel
            angle={5}
            style={{
              fill: "white",
              parent: {
                background: "rgba(0, 0, 0, 0)", // Totalmente transparente
              },
            }}
          />
        }
      />
    </div>
  );
  
  
}