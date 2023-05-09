import React from "react";
import { StyleSheet, View } from "react-native";

import MainContainer from "../../shared/components/MainContainer";
import TextLabel from "../../shared/components/TextLabel";
import FormInput from "../../shared/components/FormInput";
import FormButton from "../../shared/components/FormButton";
import FormPassword from "../../shared/components/FormPassword";

const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] =React.useState('')
    const style = styling()
    return(
        <MainContainer>
            <View style={style.text}>
                <TextLabel text={"Welcome !"} label={"h2"} />
            </View>
            <View>
                <FormInput value={email} onChangeValue={setEmail} placeholder={"Input your email"}
                keyboard={"email-address"} />
                 <FormPassword value={password} onChangeValue={setPassword} placeholder={"Input your password"}
                 />
                 <FormButton label={"Login"} onClick={() => {}} />
            </View>
        </MainContainer>
    )
}

const styling = (theme) => StyleSheet.create({
    text: {
        alignItems: 'center'
    }
})

export default Login