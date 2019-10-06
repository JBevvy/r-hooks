import React, {useReducer} from 'react'
import Form from "./components/form"
import People from "./components/people"
import NewestPerson from "./components/newestPerson"
import PeopleContext from './context/peopleContext'
import peopleReducer from './context/peopleReducer'
import {ADD_PERSON} from './context/types'

const App = () => {
  const initialState = {people: [
    {
      firstName: "Jon",
      lastName: "Doe"
    },
    {
      firstName: "Anita",
      lastName: "Momma"
    }
  ]};

  const [state, dispatch] = useReducer(peopleReducer, initialState)

  const addPerson = (person) => {
    dispatch({
      type: ADD_PERSON,
      payload: person
    })
  }
  return (
    <PeopleContext.Provider
    value={{
      people: state.people,
      addPerson
    }}>
    <div className="Container">
        <div className="row">
          <Form />
          <People />
          <NewestPerson />        
        </div>
    </div>
    </PeopleContext.Provider> 
  );
}

export default App;
