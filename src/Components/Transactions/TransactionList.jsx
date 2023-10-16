import { useGlobalState } from '../../Context/GloblaState'
import TransactionItem from './TransactionItem';

function TransactionList() {
    const {transaction} = useGlobalState();
  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold my-2 text-center">Historial</h3>
      <ul className="max-h-[200px] overflow-y-auto">
      {
        transaction.map(transaction => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))
      }
      </ul>
     
    </>
  )
}

export default TransactionList