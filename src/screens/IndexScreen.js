import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { Context } from '../context/BContext'
import { Feather } from '@expo/vector-icons'

//  * make an logout option. when tapped and logged out remember to remove the uniqueID from AsyncStorage


const IndexScreen = ({ navigation }) => {
    const { state, deleteBPost } = useContext(Context)


    // getting user id from storage:
    const [uid, setUid] = useState('')
    const getUid = async () => {
        try {
            setUid(await AsyncStorage.getItem('uniqueID'))
        } catch (error) {
            //log out, no useer! 
        }
    }
    getUid()


    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={bPosts => bPosts.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Image source={{ uri: item.image }} style={styles.image} />
                                <Text style={styles.title}> {item.title} </Text>
                                <TouchableOpacity onPress={() => { deleteBPost(item.id) }}>
                                    <Feather name="trash" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
            <TouchableOpacity>
                <Text>{uid}</Text>
            </TouchableOpacity>
        </View>
    )
}

// add unique content to the screen
IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" style={styles.icon} />
        </TouchableOpacity>
    }
}



const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        borderColor: 'grey',
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        flex: 8
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 5,
        flex: 1
    },
    icon: {
        fontSize: 30
    }
})

export default IndexScreen