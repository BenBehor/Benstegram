import { AsyncStorage } from 'react-native';

const SaveUID = async (username) => {
    try {
        await AsyncStorage.setItem('uniqueID', username);
    } catch (error) {
        // Error saving data
        return false
    }
    return true
};


export { SaveUID }
