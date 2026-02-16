import './App.css'
import { MainPage } from './components/MainPage';
import { SideBar } from './components/SideBar';

export function App() {
  console.log('f-safe');
  
  
  return (
    <div className='app'>
      <MainPage/>
      <SideBar/>
    </div>
  )
}
