import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {

return (
  <div>
    <Router>
       <div className="App">
          <HeaderComponent/>

             <div className="App">
               <Switch> 
                  <Route path = "/" exact component={ListEmployeeComponent}></Route>
                  <Route path = "/employees" component={ListEmployeeComponent}></Route>
                  <Route path = "/add-employee" component={CreateEmployeeComponent}></Route>
                  <Route path = "/update-employee/:id" component={UpdateEmployeeComponent}></Route>
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
