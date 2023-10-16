import { useState } from "react"
import { useGlobalState } from "../../Context/GloblaState";


function TransactionForm() {

  const {addTransaction} = useGlobalState();
  const [description, setDescription] = useState('');
  const [monto, setMonto] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    //valida que ingrese solo numeros en el monto
    const regex = /^-?\d*\.?\d{0,2}$/; 
    if(description !== '' && regex.test(monto) ){
      addTransaction({
        id: window.crypto.randomUUID(),
        description,
        monto: +monto
      });
      // Limpiar los campos del formulario
      setDescription('');
      setMonto('');
    } else {
      alert('Inserte los valores correctamente');
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

        <input type="text"
        placeholder="00.00"
        value={monto}
        className="bg-stone-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        onChange={(e) => setMonto(e.target.value)}
        />

        <button
        className="bg-indigo-900 text-white px-3 py-2 rounded-lg block mb-2 w-full disabled:opacity-50">
          Transacción</button>
      </form>
    </div>
  )
}

export default TransactionForm