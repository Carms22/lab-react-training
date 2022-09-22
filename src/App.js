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
import Dice from './components/Dice/Dice';
import DriverCard from './components/DriverCard/DriverCard';

// img
import img from './assets/images/maxence.png';
import imgClicked from './assets/images/maxence-glasses.png';



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

      {/* Iteration 7 */}
      <div>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{ model: "Toyota Corolla Altis", licensePlate: "CO42DE" }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{ model: "Audi A3", licensePlate: "BE33ER" }}
      />
      </div>
      {/* Iteration 8-9-10 */}
      <div className='row'>
      <LikeButton/>
      <ClickablePicture img={img}  imgClicked={imgClicked}/>
      <Dice/>
      </div>
    </div>
  );
}

export default App;
