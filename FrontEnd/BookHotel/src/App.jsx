import './App.css'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Hotels from './components/Hotels'
import BookList from './components/BookList'
import HotelsList from './components/HotelsList'


function App() {

  return (
    <>
      <BrowserRouter>
      <>
      <Navbar currentRoute={window.location.pathname}/>
      <div className="bg-[url('https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex justify-center items-center bg-cover h-screen w-screen" >
        <Routes>
          <Route path='/' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}/>
          <Route path='/listOfHotels' element={<HotelsList/>}></Route>
          <Route path='/bookList' element={<BookList/>}></Route>
        </Routes>
      </div>
      </>
      </BrowserRouter>
    </>
  )
}

export default App
