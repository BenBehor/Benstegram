import React from 'react';
import { View } from 'react-native';
import LoginRegisterScreen from '../components/LoginRegisterForm'


const RegisterScreen = ({ navigation }) => {
    return (
        <View>
            <LoginRegisterScreen caller="register" navigation={navigation} />
        </View>
    )
}

export default RegisterScreen