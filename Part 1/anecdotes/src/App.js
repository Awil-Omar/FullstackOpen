import { useState } from "react"


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Votes = ({votes})=> <p> has {votes} votes </p>;
const Ance =({anecdotes})=> <p> {anecdotes} </p> 
const Winner = ({winner})=> <p> {winner}</p>


const App= () =>{
    //list of an array with 6 elemennts
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState()
  const [votes, setVote]=useState(new Array(anecdotes.length).fill(0))

  const handleAnecdotes =()=>{
      const random = Math.floor(Math.random() * Math.floor(anecdotes.length));  
      setSelected(random)
  }
 const numberOfVotes = ()=>{
      const copy = [...votes] 
      copy[selected]+=1;
      setVote(copy)
 } ;
 const HighestVotes = Math.max( ...votes);

 const WinnerAncedote = anecdotes[votes.indexOf(HighestVotes)];

  return (
    <div>

      <h1>Anecodotes fo the Day</h1>
      < Ance anecdotes= {anecdotes[selected]} />
      < Votes votes = {votes[selected]} />
      <Button onClick={handleAnecdotes} text = 'next anecdote' />
      <Button onClick={numberOfVotes} text ='vote'/>
      <h1>Anecodotes with most votes </h1>
      <Winner winner = {WinnerAncedote}/>
      <p> has {HighestVotes} votes</p>
      
    </div>
  );
}

export default App;
