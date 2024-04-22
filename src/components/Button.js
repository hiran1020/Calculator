import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import {Style,CommonBtn} from "../styles/Styles";





 function calcButton(props) {
    return {
      onPress: props.onPress,
      title: props.title,
      isBlue: props.isBlue || false, // Default to false if not provided
      isGray: props.isGray || false, // Default to false if not provided
    };
  };

export default function Button({ title, onPress, isBlue, isGray }) {
    const theme = useContext(ThemeContext);
        return (
          <TouchableOpacity
            style={
                isBlue ? Style.btnBlue :isGray ? Style.btnGray : theme === 'light' ? Style.btnLight : Style.btnDark
            }
            onPress={onPress}
          >
            <Text style={isBlue || isGray ? Style.smallTextLight : theme === 'dark' ? Style.smallTextLight : Style.smallTextDark }>{title}</Text>
          </TouchableOpacity>
        );
      };