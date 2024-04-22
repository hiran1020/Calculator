import { StyleSheet } from 'react-native';
import { calcColor } from './Colors';

// Define the CommonBtn styles separately
const CommonBtn = StyleSheet.create({
    commonButtonsStyle: {
        width: 72,
        height: 72,
        borderRadius: 24,
        alignItems: 'center',
        margin: 8,
        justifyContent: 'center',
    }
});

// Define the style object containing all the styles
const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: calcColor.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    btnBlue: {
        ...CommonBtn.commonButtonsStyle, // Spread the styles from CommonBtn
        backgroundColor: calcColor.blue,
    },
    btnDark: {
        ...CommonBtn.commonButtonsStyle,
        backgroundColor: calcColor.btnDark,
    },
    btnLight: {
        ...CommonBtn.commonButtonsStyle,
        backgroundColor: calcColor.light,
    },
    btnGray: {
        ...CommonBtn.commonButtonsStyle,
        backgroundColor: calcColor.btnGray,
    },
    smallTextLight: {
        fontSize: 32,
        color: calcColor.light,
    },
    smallTextDark: {
        fontSize: 32,
        color: calcColor.dark,
    },
    row: {
        maxWidth: '100%',
        flexDirection: 'row',
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: calcColor.gray,
        fontWeight: '200',
        alignSelf: 'flex-end',
    },
    screenSecondNumber: {
        fontSize: 40,
        color: calcColor.gray,
        fontWeight: '200',
        alignSelf: 'flex-end',
    },
});

// Export both style object and CommonBtn object
export { Style, CommonBtn };
