import { useState } from "react";
import Button from "./Button";
import { View,Text } from "react-native";
import { Style } from "../styles/Styles";
import { calcColor } from "../styles/Colors";

export default function Keyboard(){
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState(null);


    const handelNumberPress = (buttonValue) => {
        if (result !== null && operator !== '') {
            // Start a new calculation
            setFirstNumber(buttonValue);
            setSecondNumber('');
            setResult(null);
        } else {
            
        
        if (buttonValue === '.' && firstNumber.includes('.')) {
            // Do not allow multiple decimal points
            return;
        }
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue);
        }
    }
    };
    



    const handleBackspacePress = () => {
        setFirstNumber(firstNumber.slice(0, -1));
    };
    const handelOperatorPress = (buttonValue) => {
        if (firstNumber !== '' && operator !== '') {
            getResult();
        }
        setOperator(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber('');
    }

    const Clear = () => {
        setFirstNumber('');
        setSecondNumber('');
        setOperator('');
        setResult(null);
    }

    const getResult = () => {
        switch (operator) {
            case '+':
                Clear();
                setResult(parseInt(secondNumber) + parseInt(firstNumber));
                break;
            case '-':
                Clear();
                setResult(parseInt(secondNumber) - parseInt(firstNumber));
                break;
            case '*':
                Clear();
                setResult(parseInt(secondNumber) * parseInt(firstNumber));
                break;
            case '/':
                Clear();
                setResult(parseInt(secondNumber) / parseInt(firstNumber));
                break;
            default:
                Clear();
                setResult(0);
                break;
        }
    }


    const firstNumberDisplay = () => {
        if (result !== null) {
            return <Text style={result < 99999 ? [Style.screenSecondNumber, { color: calcColor.result }] : [Style.screenFirstNumber, { fontSize: 50, color: calcColor.result }]}>
                {result?.toString()} 
            </Text>;
        }
        if (firstNumber && firstNumber.length < 6) { 
            return <Text style={Style.screenFirstNumber}>{firstNumber}</Text>;
        }
        if (firstNumber === "") {
            return <Text style={Style.screenFirstNumber}>{"0"}</Text>;
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
            return <Text style={[Style.screenFirstNumber, { fontSize: 70 }]}>{firstNumber}</Text>;
        }
        if (firstNumber.length > 7) {
            return <Text style={[Style.screenFirstNumber, { fontSize: 50 }]}>{firstNumber}</Text>;
        }
    };

    return(
        < View style={Style.viewBottom}>
            <View  style={{}}>
                <Text style={Style.screenSecondNumber}>{secondNumber}
                <Text style ={{color: 'purple', fontSize:50, fontWeight:500}}>{operator}</Text>
                </Text>
                {firstNumberDisplay()}
            </View>
        <View style={Style.row}>
            <Button title='c' isGray={true} onPress={() => Clear()} />
            <Button title='+/-' isGray={true} onPress={() => handelOperatorPress('+/-')} />
            <Button title='%' isGray={true} onPress={() => handelOperatorPress('%')} />
            <Button title='÷' isBlue={true} onPress={() => handelOperatorPress('/')} />
        </View>



        <View style={Style.row}>
            <Button title='7' isGray={true} onPress={() => handelNumberPress('7')} />
            <Button title='8' isGray={true} onPress={() => handelNumberPress('8')} />
            <Button title='9' isGray={true} onPress={() => handelNumberPress('9')} />
            <Button title='x' isBlue={true} onPress={() => handelOperatorPress('*')} />
        </View>



        <View style={Style.row}>
            <Button title='4' isGray={true} onPress={() => handelNumberPress('4')} />
            <Button title='5' isGray={true} onPress={() => handelNumberPress('5')} />
            <Button title='6' isGray={true} onPress={() => handelNumberPress('6')} />
            <Button title='-' isBlue={true} onPress={() => handelOperatorPress('-')} />
        </View>



        <View style={Style.row}>
            <Button title='1' isGray={true} onPress={() => handelNumberPress('1')} />
            <Button title='2' isGray={true} onPress={() => handelNumberPress('2')} />
            <Button title='3' isGray={true} onPress={() => handelNumberPress('3')} />
            <Button title='+' isBlue={true} onPress={() => handelOperatorPress('+')} />
        </View>
        <View style={Style.row}>
        <Button title="." onPress={() => handelNumberPress(".")} />
        <Button title="0" onPress={() => handelNumberPress("0")} />
        <Button title="⌫" onPress={() => handleBackspacePress()} />
        <Button title="=" isBlue onPress={() => getResult()} />
      </View>
        </View>

    )
}