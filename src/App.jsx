import Balance from "./Components/Balance"
import { ExpenseChart } from "./Components/ExpenseChart"


import Header from "./Components/Header"
import IncomeExpenses from "./Components/IncomeExpenses"
import TransactionForm from "./Components/Transactions/TransactionForm"
import TransactionList from "./Components/Transactions/TransactionList"
import { GlobalProvider } from "./Context/GloblaState"



function App() {
  return (
    <GlobalProvider>
      <div className="bg-stone-900 text-white min-h-screen flex justify-center items-center">
        <div className="bg-neutral-950 text-white h-full w-4/1 flex justify-center items-center ">
          <div className="bg-cyan-950 p-10 rounded-md w-full sm:mt-0">
            <Header />
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                <IncomeExpenses />
                <Balance />
                <TransactionForm />
              </div>
              <div className="flex-1 flex flex-col ">
                <ExpenseChart/>
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App