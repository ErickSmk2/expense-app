import { useGlobalState } from "../Context/GloblaState";


function Balance() {
    //Se extrae de el custom hook los  
    const { transaction } = useGlobalState();

    //Se extrae el monto del objeto transaction
    const monto = transaction.map(transaction => transaction.monto);
    const totalmonto = monto.reduce ((acc, item) => (acc += item),0).toFixed(2);

  return (
    <div className="flex justify-between items-center my-2">
    <h4 className="text-slate-400">Balance</h4>
    <h1 className="text-2xl font-bold">${totalmonto}</h1>
  </div>
  )
}

export default Balance