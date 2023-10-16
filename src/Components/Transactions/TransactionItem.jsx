import { useGlobalState } from "../../Context/GloblaState";

function TransactionItem({ transaction} ) {
    const {deleteTransaction} = useGlobalState();
  return (
    <li className="bg-stone-600 ext-white px-3 py-1 rounded-lg
    mb-2 w-full flex justify-between intems-center">
              
              <p>{transaction.description}</p>
                <div>
                    <span>${transaction.monto}</span>
                    <button onClick={()=>{
                    deleteTransaction(transaction.id);
                    }}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
                    Borrar
                    </button>
                </div>
    </li>      
  )
}

export default TransactionItem