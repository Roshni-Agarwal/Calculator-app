import React from "react";
import Keypad from "./Keypad";
import Screen from "./Screen";
import "./css/calculator.css";

class Calculator extends React.Component{
    render(){
        return(
            <div className="calculator">
                <Screen/>
                <Keypad/>
            </div>
        );
    }
}
export default Calculator;