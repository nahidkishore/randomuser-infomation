import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HomeScreen from './components/Screen/HomeScreen';
import CounterScreen from './components/Screen/CounterScreen';
import FormScreen from './components/Screen/FormScreen';
import ListScreen from './components/Screen/ListScreen';
import PageNotFound from './components/Screen/PageNotFound';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import Footer from './components/Screen/Footer';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=20`).then((res) => {
      dispatch({
        type: 'ADD_DATA',
        AddData: res.data.results,
      });
    });
  }, [dispatch]);
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/counter' />
          </Route>
          <Route exact path='/' component={HomeScreen}></Route>
          <Route path='/counter' component={CounterScreen} />
          <Route path='/form' component={FormScreen} />
          <Route path='/list' component={ListScreen} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
