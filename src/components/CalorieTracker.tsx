import React from 'react'
import { Activity } from '../types'
import { useMemo } from 'react'
import CaloriesDislay from './CaloriesDislay'


type CalorieTrackerProp= {
    activities: Activity[]
}

export default function CalorieTracker({activities}:CalorieTrackerProp) {
  

    const CalorieConsumo = useMemo(()=> activities.reduce((total, cat)=> cat.category === 1 ? total + cat.calories :total ,0  ) ,[activities])
    const CalorieGastadas = useMemo(()=> activities.reduce((total, cat)=> cat.category === 2 ? total + cat.calories :total ,0  ) ,[activities])
    
    const Total = useMemo(()=> CalorieConsumo -CalorieGastadas ,[activities])

  return (
    < >
            <h2 className='text-4xl font-black text-white text-center '> Resumen de calorias</h2>

             <div className='flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10'>
                
                <CaloriesDislay
                  calories={CalorieConsumo}
                  text={'Consumidas'}

                />
                <CaloriesDislay
                  calories={CalorieGastadas}
                  text={'Gastadas'}         

                />
                 <CaloriesDislay
                  calories={Total}
                  text={'Balance'}
                />
            </div>      
    </>
)
}
