import First from './components/First.jsx'
import Card from './components/Card.jsx'

export default function App() {
  const a = 10;
  const user = prompt("Enter")
  return (
    <div>
      <Card name={user} color="red"/>
      <Card name="Lucky" color='green'/>
      <Card name="Akshay" color='blue'/>
      <Card name="Mohit" x={10}/>
      <h1 className='heading'>{a}</h1>
      <First name="Akshay"/>
      <First name="Lucky" age={20}/>
      <First name="Ramsha"/>
      <First name="Shobhit"/>
      <First name="Mohit"/>
    </div>
  )
}
