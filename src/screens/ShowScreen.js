import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Context } from '../context/BContext'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
 
const ShowScreen = ({ navigation }) =>{
    const { state } = useContext(Context)

    //finding the correct bPost that we want to see, just comparing id 1by1
    const bPost = state.find(
        bPost => bPost.id === navigation.getParam('id')
        )


    return(
        <View>
            <Text style={styles.title}>{bPost.title}</Text>
            <Text style={styles.content} >{bPost.content}</Text>
            <Image source={{ uri: bPost.image }} style={styles.image} />


        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => 
        navigation.navigate('Edit',{ id: navigation.getParam('id') })}>
        <Feather name="edit" size={30} />
    </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'gray',
    },
    content:{
        margin: 15,
        fontSize: 18
    },
    image: {
        width: 400,
        height: 400
    }
})

export default ShowScreen