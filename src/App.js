import logo from './logo.svg';
import './App.css';
import student from './data/students.json'
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor'
import CreditCards from './components/CreditCard/CreditCard'
import cards from './data/creditCard.json'
import Rating from './components/Rating/Rating';
import LikeButton from './components/LikeButton/LikeButton';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import Dice from './components/Dice/Dice'



function App() {
  return (
    <div className="App">
      <div >
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
      <div>
        <Random min={1} max={6}/>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />  
      </div>
      <div className='row'>
      {
        cards.map((card, index)=>{
          return (
            <CreditCards key={card.number} {...card} />
          )
        })
      }
      </div>
      <div>
        <Rating>0</Rating>
        <Rating>1</Rating>
        <Rating>2</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div>
      <LikeButton/>
      <ClickablePicture img='./assets/images/maxence.png'  imgClicked='./assets/images/maxence-glasses.png'/>
      <Dice></Dice>
      </div>
    </div>
  );
}

export default App;
