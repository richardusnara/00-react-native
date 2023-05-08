import {Text, View} from "react-native"
import { useTheme } from "../contexts/ThemeContext"

const TextLabel = ({text, label}) => {
    const theme = useTheme();
    return(
    <Text 
        style={theme.text[`${label}Style`]}
        >
            {text}
        </Text>
)}
export default TextLabel