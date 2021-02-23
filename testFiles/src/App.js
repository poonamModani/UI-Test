
import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/EmployeeList">Employee List</Link>
                </li>
                <li>
                  <Link to="/AddEmployee">Add Employee</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/EmployeeList">
                <EmployeeList />
              </Route>

              <Route path="/AddEmployee">
                <AddEmployee />
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;