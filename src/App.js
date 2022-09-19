import logo from './logo.svg';
import './App.css';
import student from './data/students.json'
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';

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
      
    </div>
  );
}

export default App;
