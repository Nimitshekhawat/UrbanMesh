import './App.css';
// import {Button} from "@chakra-ui/react"

import {Route} from 'react-router-dom';  
import HomePage from './Pages/HomePage';
import Chatpage from './Pages/ChatPage';


function App() {
  return (
    <div className="App">
      
        {/* <Button colorScheme="blue">Button</Button> */}
        <Route exact path="/" component={HomePage} />
        <Route path="/chats" component={Chatpage} />
      
    </div>
  );
}

export default App;
