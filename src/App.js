import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Profile from './profile/Profile'

const data = {
  fullName : "zarrai saif", 
  bio: "bla bla", 
  profession: "full stack dev",
 pictures: 'http://via.placeholder.com/200x100', 
 handlename: (fullName) =>{alert('hello '+fullName);}
}

function App() {
  return (
    <div className="App">
      <Profile data={data} children={<img src={data.pictures} className='picture'/>}/>
      
    </div>
  );
}

export default App;
