import { Activity } from "../types"


export type ActivityActions =
 { type: 'save-activity', payload:{newActivity:Activity}}|
 { type: 'set-activeId', payload:{id:Activity['id']}}

export type ActivityState= {
    activities: Activity[],
    idActivities: Activity['id']
}

export const initialState : ActivityState = {
    activities: [],
    idActivities: ''
}
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
)=>{
   if(action.type == 'save-activity' ){

    let update : Activity[] =[]
    if(state.idActivities){
      update = state.activities.map(activity=>(

       activity.id === state.idActivities ? action.payload.newActivity :  activity
      

      ))
    }else{
        update = [...state.activities, action.payload.newActivity]  
    }

      return {
        ...state,
        activities:update,
        idActivities:''
        
      }

   }

   if(action.type == 'set-activeId'){
    return {
       ...state,
       idActivities: action.payload.id
       
    }
   }
   return state
}