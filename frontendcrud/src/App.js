import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {

return (
  <div>
    <Router>
       <div className="App">
          <HeaderComponent/>

             <div className="App">
               <Switch> http://localhost:3000/employees
                  <Route path = "/" component={ListEmployeeComponent}></Route>
                  <Route path = "/employees" component={ListEmployeeComponent}></Route>
                  <ListEmployeeComponent/>
              </Switch> 
             </div>

           <FooterComponent/>
       </div>
    </Router>
  </div>
  );
}

export default App;
