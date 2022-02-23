import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../src/sass/App.css';
import Loginpage from "./pages/LoginPage";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      
      <Routes>
        
        <Route exact path="/" element={<Loginpage />} />
    
      </Routes>
   
    
    </div>
  </Router>
  );
}

export default App;
