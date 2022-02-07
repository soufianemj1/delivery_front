import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Landinpage from "./pages/Landinpage";
import Delivery from "./pages/Delivery";
function App() {
 
  return (
    <Router>
      
   <Route exact path="/" >
    <div className="App">
      <Landinpage />
      
    </div>
    </Route>

      <Route  exact path="/delivery">
      < Delivery />

      </Route>
      
    

    </Router>
    
  );
}



export default App;
