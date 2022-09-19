import logo from './logo.svg';
import './App.css';
import student from './data/students.json'
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
function App() {

  return (
    <div className="App">
      {
        student.map((student, index) => {
          return(
            <IdCard key={index} {...student}>  
              <Greetings lang={student.lang}>{student.firstName}</Greetings>          
            </IdCard>
          )
        })
      }
      <Random min={1} max={6}/>
      
    </div>
  );
}

export default App;
