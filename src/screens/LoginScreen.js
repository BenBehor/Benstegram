import React from 'react';
import { View } from 'react-native';
import LoginRegisterScreen from '../components/LoginRegisterForm'


const LoginScreen = ({ navigation }) => {
    return (
        <View>
            <LoginRegisterScreen caller="login" navigation={navigation} />
        </View>
    )
}

export default LoginScreen