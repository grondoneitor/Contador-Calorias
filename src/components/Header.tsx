import React from 'react'
import { ActivityState,ActivityActions, } from "../reducers/activityReducer"
import { Dispatch,useMemo } from 'react'
type HeaderProps= {
    dispatch: Dispatch<ActivityActions>,
    state: ActivityState

}

export default function Header({state,dispatch}: HeaderProps) {
    const CanReload = ()=> useMemo(()=> state.activities.length ,[state.activities])

  const ReiniciarApp = ()=>{
    dispatch({type: 'set-reload' })  
  }


  return (
    <header className="bg-lime-600 py-3 ">
    <div className=" max-w-4xl  mx-auto flex justify-between items-center ">
       <h1 className="text-center text-lg font-bold text-white uppercase">Contador de calorias</h1>
       
       <button 
       className="bg-orange-500 text-white font-bold px-8 py-4  rounded-xl disabled:opacity-10" 
       disabled={!CanReload()}
       onClick={ReiniciarApp}
       
       > 
       
       Reiniciar actividades
       </button>
    </div>
</header>
  )
}
