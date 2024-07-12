//  import React, { useMemo } from 'react'
// import { Activity } from '../types'

type CaloriesDislayProps ={
   calories: number
   text: string
}

export default function CaloriesDislay({ calories,text}:CaloriesDislayProps) {

    //  const cualEs = useMemo(()=> activities.map(act=>act.category===1 ? CalorieConsumo:CalorieGastadas ), [activities])
     
    const mayor = ()=> {
    
if(text === 'Balance'){
   
    if(calories >0){
       return  'text-orange-500'
    }else if (calories === 0) {
        return 'text-white'
    } else {
       return 'text-green-500'       
    }
          
}else{
    return text === 'Consumidas' ? 'text-orange-500' : 'text-green-500'    

}
}   

    
    
  return (
        <>
            <p
              className={` ${mayor()} rounded-full font-bold gap-3 text-center text-2xl  grid grid-cols-1 ` }>
            <span className={`font-black text-6xl ${mayor()} `}>
                {calories}
            </span>
                { text}   
            </p> 
        </>
    )

  
}
