import { StyleSheet,TextInput } from "react-native";
import {useTheme} from "../contexts/ThemeContext"

const FormInput = ({
    value, onChangeValue, placeholder = "", keyboard = "default"
}) => {
    const theme = useTheme()
    const styles = styling(theme)

    return (
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeValue}
        value={value}
        keyboardType={keyboard}
        />
    )
}
const styling = (theme) => StyleSheet.create({
    input: {
        height: 50,
        // width: "80%",
        marginHorizontal: theme.spacing.m,
        marginTop: theme.spacing.s,
        borderRadius: theme.radius.m,
        borderWidth : 1,
        borderColor: theme.color.primary,
        padding: theme.spacing.sm,
        backgroundColor: theme.color.transparent,
        alignItems: 'center',
        fontFamily: 'Montserrat-Regular'
    }
})

export default FormInput