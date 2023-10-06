import ReactDOM from "react-dom/client";
import './styles.css'
import App from "./App";
import "semantic-ui-css/semantic.min.css";


const root = ReactDOM.createRoot(document.querySelector('#root'));



root.render(
    <App/>
  
)
// Canvas created by r3f will take the size of its parent (here the #root div)
// We can make the #root fill the viewport and do the same with the <html> and the body