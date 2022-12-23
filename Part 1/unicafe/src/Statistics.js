import StatisticLine from "./StatisticLine";

const Statistics =  (props)=>{
    const {good,neutral,bad, all, average, positive}=props
    if(props.all === 0){
        return(
            <div>
              No feedback given
            </div> );}
 
        return (
    
            <table>
                <tbody>
            
        <StatisticLine text="good" value = {good} />
        <StatisticLine text="neutral" value = {neutral} />
        <StatisticLine text="bad" value = {bad} />
        <p>all {all}</p>
        <p>average {average} </p>
        <p>positive  {positive} </p>

          </tbody>
        </table>
       

    );
}
      









export default Statistics;