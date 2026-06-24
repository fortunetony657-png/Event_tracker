import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Components/Home";
import EventTracker from "./Components/EventTracker";
function App(){
 
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EventTracker" element={ <EventTracker />} />
      </Routes>
    </BrowserRouter>  
  )
  
};
export default App;