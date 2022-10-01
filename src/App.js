import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName={"Brian"}
        lastName={"Denmark"}
        age={31}
        hairColor={"Brown"}
      />
      <PersonCard
        firstName={"Jerry"}
        lastName={"Seinfeld"}
        age={68}
        hairColor={"Salt and Pepper"}
      />
      <PersonCard
        firstName={"Robert"}
        lastName={"Smith"}
        age={63}
        hairColor={"Brown"}
      />
      <PersonCard
        firstName={"Kirsten"}
        lastName={"Dunst"}
        age={40}
        hairColor={"Blonde"}
      />
    </div>
  )
}

export default App;
