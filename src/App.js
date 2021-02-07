import './App.css';
import Profile from './profile/Profile'

const data = {fullName : "zarrai saif", bio: "bla bla", profession: "full stack dev",
 pictures: 'http://via.placeholder.com/200x100'}

 const handleName = (fullName) =>{
   alert(fullName)
 }

function App() {
  return (
    <div className="App">
      <Profile data={data} handleName={handleName} children={<img src={data.pictures} className='picture'/>}/>
      
    </div>
  );
}

export default App;
