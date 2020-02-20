import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { createUser, loginUser } from '../api/Database'
import 'react-native-gesture-handler';




// the title ask for either "register" / "login" this information make changes in the page.
//also, the component handle navigation by itself so pass it a navigation option.
const LoginRegisterForm = ({ caller, navigation }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [info, setInfo] = useState('')

    const myintent = caller === 'register' ? 'Register' : 'Sign in'
    const otherPageText = caller === 'register' ? 'Already have a user? Sign in' : 'Register here!'
    const titleText = caller === 'register' ? 'Please fill the form to register' : 'Hi there, lets login first!'

    // bPost.id === action.payload.id ? action.payload : bPost
    return (
        <View>
            <Text style={styles.title}>{titleText}</Text>
            <Text style={styles.label}>Enter Username:</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={(text) => setUsername(text)} />

            <Text style={styles.label}>Enter Password:</Text>

            <TextInput
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)} />

            <Button
                title={myintent}
                onPress={() => {
                    const information = myintent === 'Register' ? createUser(username, password) : loginUser(username, password)
                    setInfo(information)
                    if (information === 'success') {
                        navigation.navigate('Index')
                    }
                }}
            />
            <Button
                color='darkgray'
                title={otherPageText}
                onPress={() => {
                    myintent === 'Register' ? navigation.navigate('Login') : navigation.navigate('Register')
                }}
            />
            <Text style={styles.err}>{info}</Text>
        </View>

    )
}



const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        margin: 5,
        margin: 15,
        alignSelf: 'center'
    },
    label: {
        fontSize: 20,
        margin: 5,
        marginTop: 15,
    },
    input: {
        fontSize: 18,
        padding: 10,
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: 'gray',
    },
    err: {
        marginTop: 15,
        textAlign: "center",
        color: 'red'
    },
})

export default LoginRegisterForm