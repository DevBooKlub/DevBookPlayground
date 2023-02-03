import react from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import SignInPage from "./components/SignInPage/SignInPage"
import Profile from './components/Profile';

function App() {


//   return (
//     <div className="App">
//       <SignInPage />
      
//     </div>
//   )
// }

return (
  <BrowserRouter>
  

    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/profile" element={<Profile />} />
     
    </Routes>
  </BrowserRouter>
);
}

export default App
