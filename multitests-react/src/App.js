import './App.css';
import MyContacts from "./components/props/MyContacts"
import MyJungle from "./components/statesAndProps/MyJungle"
import ChuckNorris from './components/consommationAPI/ChuckNorris'
import Simpsons from './components/consommationAPI/Simpsons'
function App() {
  return (
    <div className="App">
      <MyContacts/>
      <MyJungle/>
      <ChuckNorris/>
      <Simpsons/>
    </div>
  );
}

export default App;
