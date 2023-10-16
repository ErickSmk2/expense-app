import { useState } from "react"
import { useGlobalState } from "../../Context/GloblaState";


function TransactionForm() {

  const {addTransaction} = useGlobalState();
  const [description, setDescription] = useState('');
  const [monto, setMonto] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    if(description !== '' && monto !== ''){
      addTransaction({
        id: window.crypto.randomUUID(),
        description,
        monto: +monto
      });
      // Limpiar los campos del formulario
      setDescription('');
      setMonto(0);
    } else {
      alert('Inserte los valores');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder="Ingresa una descripción"
        value={description}
        className="bg-stone-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        onChange={(e) => setDescription(e.target.value)}/>

        <input type="number"
        step="0.00"
        placeholder="00.00"
        value={monto}
        className="bg-stone-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        onChange={(e) => setMonto(e.target.value)}/>

        <button
        className="bg-indigo-900 text-white px-3 py-2 rounded-lg block mb-2 w-full disabled:opacity-50">
          Transacción</button>
      </form>
    </div>
  )
}

export default TransactionForm