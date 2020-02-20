import { StyleSheet, AsyncStorage } from 'react-native';
import { SaveUID } from '../components/StorageManager'


//some fake users
const user1 = {
    username: 'test',
    password: 'Test',
}
const user2 = {
    username: 'ben2',
    password: 'pas2',
}
const user3 = {
    username: 'ben3',
    password: 'pas3',
}
const usersArray = [user1, user2, user3];


const loginUser = (username, password) => {
    var pass = ''

    const usernameLowerCase = username.toLowerCase() // even though we write it only once in the function, this is to make sure "toLowerCase() method happens only once and not every time we search for user"
    //mapping through all users 1by1, looking for user with same username. assigning his password to 'pass'
    usersArray.map((usersArray) => {
        usersArray.username === usernameLowerCase ? pass = usersArray.password : null
    })

    if (pass === password) {
        console.log('logged in!')
        return 'success'
    } else {
        return 'the details you entered does not match our records. please check and try again'
    }
}

const createUser = (username, password) => {

    const usernameLowerCase = username.toLowerCase()

    //creating a user object
    const newUser = { username: usernameLowerCase, password: password }
    //mapping through our users, if no user has this username, creating new user.
    var userExist = true;
    usersArray.map((usersArray) => { usersArray.username !== usernameLowerCase ? userExist = false : userExist = true })

    if (!userExist) {
        if (password.length < 6 || password.length > 13) {
            return 'the password must contain ateast 6 digits and not longer than 13'
        } else if (username.length < 4 || username.length > 13) {
            return 'the username must contain ateast 4 digits and not longer than 13'
        }
        else {
            usersArray.push(newUser)

            // the method returns a boolean, if data saved / not.
            if (SaveUID(username)) {
                console.log('uid saved!')
                return 'success' // the user has been registered successfully and will be navigated to IndexScreen
            } else{
                return 'fail to save data, please try again'
            }

        }
    } else {
        return 'this username is already taken!'
    }
}


const styles = StyleSheet.create({})

export { createUser, loginUser }

