import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const FormButton = ({label, onClick}) => {
    const theme = useTheme()
    const styles = styling(theme)

    return (
        <TouchableOpacity style={styles.button} onPress={onClick}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    )
}

const styling = (theme) => StyleSheet.create({
button: {
    alignItems: "center",
    backgroundColor: theme.color.secondary,
    borderRadius: theme.radius.l,
    padding: theme.spacing.m,
    margin: theme.spacing.m,
    alignSelf: 'stretch'
 

},
buttonText: {
    color: theme.color.tertiary,
    fontFamily: "Montserrat-Regular"
}
})

export default FormButton