import React from "react";
import {useState} from "react";
import Statistics from "./Statistics";
import Button from "./Button";



function App() {
  const [good, setGood] =useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, SetBad] = useState(0);
  

  const handleGoodClick = ()=>setGood(good + 1)
  const handleNeutralClick = ()=>setNeutral(neutral + 1)
  const handleBadClick = ()=> SetBad(bad + 1)
  const all = good + bad +neutral;
  const average = good + bad + neutral;
  const positive = (good/all)*100
  
  return (
    
    <div>
      <h1>give a feedback </h1>
      
     <Button onClick={handleGoodClick} text='good'/>
     <Button OnClick= {handleNeutralClick} text ='neurtral'/>
    <Button onClick = {handleBadClick} text = 'bad'/>

     <Statistics good = {good} bad = {bad} neutral = {neutral} all ={all} average ={average}
                positive = {positive} />
    
   

   
     
    </div>
  );
}

export default App;
