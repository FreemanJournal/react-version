import "./index.css";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import RouterCuda from "./router/RouterCuda";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <>
      {/* <BrowserRouter>      
        <RouterCuda/>        
      </BrowserRouter> */}
      {/* Using HashRouter for Handle 404 page not found problem. */}
      {/* <HashRouter>      
        <RouterCuda/>        
      </HashRouter> */}
      <Contact/>
    </>
  );
}

export default App;
