import ActivityList from "../components/ActivityList"
import { Activity } from "../types"


export type ActivityActions =
 { type: 'save-activity', payload:{newActivity:Activity}}|
 { type: 'set-activeId', payload:{id:Activity['id']}}|
 { type: 'set-delete', payload:{id:Activity['id']}}|
 { type: 'set-reload'}

export type ActivityState= {
    activities: Activity[],
    idActivities: Activity['id']
}

const localStorageActivities  = (): Activity[] =>{
  const activities = JSON.parse(localStorage.getItem('activities') || '[]')
  return activities
}

export const initialState : ActivityState = {
    activities: localStorageActivities(),
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

   if(action.type === 'set-delete'){
    return{
        ...state,
        activities: state.activities.filter(activity=> activity.id !== action.payload.id)
    }
   }

   if(action.type === 'set-reload'){
     return{
      activities: [],
      idActivities:''
     }
   }
   return state
}