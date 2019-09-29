import React, {useState} from 'react'
import Form from "./components/form"
import People from "./components/people"
import NewestPerson from "./components/newestPerson"

const App = () => {
  const [people, setPeople] = useState([
    {
      firstName: "Jon",
      lastName: "Doe"
    },
    {
      firstName: "Anita",
      lastName: "Momma"
    }
  ]);
  const addPerson = (person) => {
    setPeople([...people, person])
  }
  return (
    <div className="Container">
        <div className="row">
          <Form addPerson = {addPerson} />
          <People people = {people} />
          <NewestPerson newestPerson = {people[people.length -1]} />        
        </div>
    </div>
  );
}

export default App;
