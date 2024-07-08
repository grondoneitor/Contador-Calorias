import { categories } from "../data/categories"



export default function Form() {
  return (
    <form className="space-y-5 p-10 bg-white shadow rounded-lg">
    <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoria:</label>
        <select className="border border-slate-300 p-2 rounded-lg bg-white" id="category">
        
        {categories.map((cat)=> (

           <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
        
        </select>
    </div>

    <div className="grid grid-cols-1 gap-3">
        <label htmlFor="activity" className="font-bold">Actividad:</label>
        <input 
        type="text" 
        id="activity" 
        className="border-slate-300 border p-2 rounded-lg" 
        placeholder="Ej: Jugo de naranja, ejercicio, manzana, etc..."
        />
    </div>

    <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorias:</label>
        <input 
        type="number" 
        id="calories" 
        className="border-slate-300 border p-2 rounded-lg" 
        placeholder="Ej: 200, 500, etc..."
        />
    </div>


      <input
       type="submit"
       className="bg-gray-800 hover:bg-gray-900 w-full rounded-lg text-xl text-white font-bold p-3 uppercase cursor-pointer"
       value="Guardar comida o ejercicio"
       />
    </form>
  )
}
