import React, { useContext,useState } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BContext'
import BPostForm from '../components/BPostForm'

const CreateScreen = ({ navigation }) => {
    const { addBPost } = useContext(Context)


     


    return <BPostForm onSubmit={(title, content, image) => {
        addBPost(title, content, image, () => navigation.navigate('Index'))
    }} />
}

const styles = StyleSheet.create({})

export default CreateScreen