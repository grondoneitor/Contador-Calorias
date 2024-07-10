import { categories } from "../data/categories"
import {v4 as uuidV4} from 'uuid'
import { useState, ChangeEvent,FormEvent, Dispatch, useEffect } from "react"
import { Activity } from "../types"
import { ActivityActions,ActivityState } from "../reducers/activityReducer"

type FormProps = {
  dispatch: Dispatch<ActivityActions>,
  state: ActivityState
}

const initialState : Activity = {
  id: uuidV4(),
  category: 1,
  name: "",
  calories:0
}

export default function Form({dispatch,state} :FormProps) {
    const[activity, setActivity] = useState<Activity>(initialState)
    
    useEffect (()=>{
       if(state.idActivities){
        const selectActivity = state.activities.filter( stateActivity => stateActivity.id === state.idActivities)[0]
        setActivity(selectActivity)
       }


    },[state.idActivities])

const handleChange = (e:ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>)=>{
   const isNumber = ['category', 'calories'].includes(e.target.id)

    setActivity({
        ...activity,
        [e.target.id]: isNumber ? +e.target.value : e.target.value
    })

}
const ejercicioCalorias = ()=> {
  const{category} = activity
   
  if(category === 2){
    return "Guardar ejercicio"
  }else{
    return "Guardar comida"
  }
}
const IsAvility = ()=> {

  const {name,calories} = activity

  return name.trim() !== '' && calories > 0


}
const handleSubmit = (e :FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  console.log("submit..")

  dispatch({type: 'save-activity', payload: {newActivity: activity}})
  setActivity({
    ...initialState,
    id: uuidV4()
  })
}


  return (
    <form
     className="space-y-5 p-10 bg-white shadow rounded-lg"
     onSubmit={handleSubmit}
     >
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
       className="bg-gray-800 hover:bg-gray-900 w-full rounded-lg text-xl text-white font-bold p-3 uppercase cursor-pointer disabled:opacity-10"
       value={ejercicioCalorias()}
       disabled={!IsAvility()}
       
       />
    </form>
  )
}
