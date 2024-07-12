import Form from "./components/Form"
import ActivityList from "./components/ActivityList"
import Header from "./components/Header"
import CalorieTracker from "./components/CalorieTracker"
import { activityReducer, initialState } from "./reducers/activityReducer"
import { useReducer, useEffect } from "react"

function App() {

const [state,dispatch] = useReducer(activityReducer, initialState)

useEffect(()=>(

localStorage.setItem ('activities',JSON.stringify(state.activities))

),[state.activities])

  return (
    <>
        <Header
        state={state}
        dispatch={dispatch}
        />

     <section className="bg-lime-500 py-20 px-5  ">
          <div className="max-w-4xl mx-auto">
            <Form
             dispatch={dispatch}
             state={state}
            />
          </div>
     </section>
     <section className="bg-gray-800 py-10 ">
      <div className="max-w-4xl mx-auto">
      <CalorieTracker
        activities={state.activities}
      />

      </div>
     </section>

     <section className="mx-auto max-w-4xl p-20">
             <ActivityList 
              activities={state.activities}
              dispatch={dispatch}
             />
     </section>
    </>
  )
}

export default App
