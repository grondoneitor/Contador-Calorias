import React, { useMemo,Dispatch } from 'react'
import { Activity } from '../types'
import { categories } from '../data/categories'
import { FaPencilAlt } from 'react-icons/fa';
import { ActivityActions } from "../reducers/activityReducer"

type ActivityProps ={
     
    activities: Activity[],
    dispatch: Dispatch<ActivityActions>

}

export default function ActivityList({activities,dispatch}:ActivityProps) {
  
//   const  encontrarCategoria = (category : Activity['category'])=>{
//     categories.map(e=>(
//      e.id === category ? e.name : ' '

//     )
//    )
     
//   }

  const encontrarCategoria = useMemo(()=> 
    (category : Activity['category'])=>
     categories.map(cat =>(
        cat.id === category ? cat.name : ' '
     )) 
    , [activities])
  
    return (
    <>
       <h2 className='text-center text-4xl font-bold text-slate-600 uppercase'> Comida y Actividades  </h2>
        
        {activities.map(category=>(
            <div
                className='px-5 py-10 bg-white mt-5 flex justify-between shadow-lg' 
                key={category.id}>

                <div className='space-y-2 relative' >
                    <p className={`absolute -top-8 -left-8 px-10 py-2 uppercase font-bold text-white ${category.category === 1 ? 'bg-orange-500' : 'bg-lime-500' } `} >
                    {encontrarCategoria(+category.category)}
                    </p>

                    <p className='text-2xl font-bold pt-5'>{category.name}</p>

                    <p className={`font-black text-4xl text-lime-500 ${category.category === 1 ?'text-orange-500': 'text-lime-500'} `}>
                      {category.calories} {''}
                    <span>Calorias</span>
                 </p>
                </div>
             
                <div className=' flex gap-5 items-center'>
                       <button 
                         onClick={()=>dispatch({type:'set-activeId',payload:{id: category.id}}) }
                        >
                       <FaPencilAlt  
                         className='h-8 w-8 text-gray-800'
                       />

                       </button>
                </div>
            
            
            </div>
        ))}
    
    </>
  )
}
