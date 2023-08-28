import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "Vishal",
    age: 26
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-4'>Tailwind test</h1>
      <Card  username="Vishal" btnText="Click Me" />
      <Card username="Rohan" />
    </>
  )
}

export default App
