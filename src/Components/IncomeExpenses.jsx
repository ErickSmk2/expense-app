import { useGlobalState } from "../Context/GloblaState"


function IncomeExpenses() {
    const { transaction } = useGlobalState();
    
    const monto = transaction.map((transaction) => transaction.monto);

    const income = monto.
        filter((item) => item > 0 )
        .reduce((acc, item ) => (acc += item),0)
        .toFixed(2);
        
    const expense = monto.filter(item => item < 0)
                          .reduce((acc, item) => acc += item,0)
                          .toFixed(2) * -1;
  return (
    <>
        <div className="flex justify-between my-2">
        <h4>Ingresos:</h4>
        <p>{income}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4>Gastos:</h4>
        <p>{expense}</p>
      </div>
    </>

  )
}

export default IncomeExpenses