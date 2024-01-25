import logo from './logo.svg';
import './App.css';
import MainComponents from './Components/MainComponents';
import { useEffect } from 'react';
import {getUserInfo} from './Redux/Actions/userActions'
import {useDispatch} from 'react-redux'

function App() {

  let diapatch = useDispatch()

  useEffect(()=>{
    diapatch(getUserInfo(1))
  },[])

  return (
    <div>
      <MainComponents/>
    </div>
  );
}

export default App;
