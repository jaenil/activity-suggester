import React,{useState,useEffect} from 'react' ;
import './App.css' ;
import RenderDoc from './RenderDoc'

const Filter = () => {
    const types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"] ;

    //activity selected by user
    const [activity, setActivity] = useState('') ;

    //value returned from fetch
    const [results, setResults] = useState([]) ;

    useEffect(() => {
        getResults() ;
        console.log('useeffect used')
        // eslint-disable-next-line 
    },[activity])

    function Clicked_function(user_selection){
        setActivity(user_selection) ;
        console.log(user_selection) ;
        console.log(results) ;
    }

    const getResults = async() => {
        if (activity == null) {
        fetch(`https://www.boredapi.com/api/activity`)
          .then(data => data.json())
          .then(result => setResults(result)) 
          .catch(err => console.error(err)) 
        } else {
            fetch(`http://www.boredapi.com/api/activity?type=${activity}`)
            .then(data => data.json())
            .then(result => setResults(result)) 
            .catch(err => console.error(err))  
        }     
      }

    return(
        <div>
            <h1>Filter Component</h1>
            <div className='dropdown_parent'>
                <button className='dropbtn'>Filter by Type</button>
                <div className='dropdown_content'>
                    {types.map (type => {
                        return(
                            <button onClick={() => Clicked_function(type)}>{type}</button>
                        )
                    }) }
                </div>
            </div>
            <div className='results_div'>
                <RenderDoc 
                activity = {results.activity}
                participants ={results.participants}
                /> 
            </div>
        </div>
    )
}
export default Filter ;