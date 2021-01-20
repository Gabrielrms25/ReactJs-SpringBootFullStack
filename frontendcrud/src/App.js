import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
        <div className="App">
           <ListEmployeeComponent/>
        </div>
        <FooterComponent/>
    </div>
  );
}

export default App;
