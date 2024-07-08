import { categories } from "../data/categories"
import { useState } from "react"
import { ChangeEvent } from "react"
import { Activity } from "../types"


export default function Form() {
    const[activity, setActivity] = useState<Activity>({
      category: 1,
      name: "",
      calories:0
    })


const handleChange = (e:ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>)=>{
   const isNumber = ['category', 'calories'].includes(e.target.id)

   console.log(isNumber)
    setActivity({
        ...activity,
        [e.target.id]: isNumber ? +e.target.value : e.target.value
    })

}

  return (
    <form className="space-y-5 p-10 bg-white shadow rounded-lg">
    <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoria:</label>
        <select
         className="border border-slate-300 p-2 rounded-lg bg-white" 
         id="category" 
         value={activity.category}
         onChange={handleChange}
         >
        
        {categories.map((cat)=> (

           <option key={cat.id} value={cat.id} >
             {cat.name}
           </option>
        ))}
        </select>
    </div>

    <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">Actividad:</label>
        <input 
        type="text" 
        id="name" 
        className="border-slate-300 border p-2 rounded-lg" 
        placeholder="Ej: Jugo de naranja, ejercicio, manzana, etc..."
        value={activity.name}
        onChange={handleChange}

        />
    </div>

    <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorias:</label>
        <input 
        type="number" 
        id="calories" 
        className="border-slate-300 border p-2 rounded-lg" 
        placeholder="Ej: 200, 500, etc..."
        value={activity.calories}
        onChange={handleChange}

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
