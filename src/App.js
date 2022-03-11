import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { action1,action2 } from "./index";

const App = () => {
    const messages =useSelector( state=> state);
    const dispatch =useDispatch();
 return (
     <div>
     <p>{messages}</p>
     <button onClick={ ()=> dispatch(action1 ())}>Button1</button> &nbsp;
     <button onClick={ ()=> dispatch(action2 ())}>Button2</button>
     </div>
 )
}
export default App;