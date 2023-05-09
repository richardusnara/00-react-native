import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import AnimatedLottieView from "lottie-react-native";

const MaintContainer = ({children}) => {
    const theme = useTheme()
    const styles = styling(theme)
    return (



        <View style={styles.container}>
            <View style={styles.childrenContainer}>
                {children}
            </View>
            <StatusBar style="auto"/>
        </View>
    )
}

const styling = (theme) => StyleSheet.create({
    container: {
        flex :1,
        backgroundColor: theme.color.tertiary,
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    childrenContainer: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    }   

})

export default MaintContainer