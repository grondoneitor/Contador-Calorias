import React, { useMemo } from 'react'
import { Activity } from '../types'
import { categories } from '../data/categories'
type ActivityProps ={
     
    activities: Activity[]

}

export default function ActivityList({activities}:ActivityProps) {
  
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
       <h2 className='text-center text-4xl font-bold text-white uppercase'> Comida y Actividades  </h2>
        
        {activities.map(e=>(
            <div
            className='px-5 py-10 bg-white mt-5 flex justify-between shadow-lg' 
            key={e.id}>

             <div className='space-y-2 relative' >
                 <p className={`absolute -top-8 -left-8 px-10 py-2 uppercase font-bold text-white ${e.category === 1 ? 'bg-orange-500' : 'bg-lime-500' } `} >
                    {encontrarCategoria(e.category)}
                    </p>

                 <p className='text-2xl font-bold pt-5'>{e.name}</p>

                 <p className='font-black text-4xl text-lime-500'>
                   {e.calories} {''}
                   <span>Calorias</span>
                 </p>
             </div>
             
             <div className=''>

             </div>
               
             </div>
        ))}
    
    </>
  )
}
