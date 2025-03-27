
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Signin from './Signin'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Signin />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
