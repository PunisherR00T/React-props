import './App.css';
import Profile from './Profile/Profile'
import image from './men.jpg'

function App() {

  const fullname = "Jhon berthral"

  const bio = "I work for facebook and i was born in america in 1985"

  const profession = "Developper"

  const handleAlertName = (a) => alert (`Hello ${a}`)
  
  return (

    <div>
      <footer className='header'>ReactProject</footer>
    <div className='div1'>
    <footer >User</footer>
    <Profile fullname={fullname} bio={bio} profession={profession} handleAlertName={handleAlertName}> 
    <img style={{width:'50%',borderRadius:'5%',border : 'black',borderStyle:'solid'}} src={image} alt="not found"></img>
    </Profile>
    </div>    
    <footer>ReactProject</footer>
    </div>
  );
}

export default App;
  