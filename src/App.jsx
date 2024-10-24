import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './utils/store';
import Navbar from './components/Navbar';
import Update from './components/Update'
import Signup from './components/Signup'
import Login from './components/Login'


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navbar />
      {/* <Navbar /> */}
      <Toaster />
      <section>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path="/update/:userId" element={<Update />} />
        </Routes>
      </section>
    </BrowserRouter>
    </Provider>
  )
}

export default App
