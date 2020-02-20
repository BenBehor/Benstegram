import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BContext'
import BPostForm from '../components/BPostForm';

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id') // getting the id of the post we like to edit
    const { state, editBPost } = useContext(Context) // getting data, enabling edit via context

    //finding the post that we want to edit & setting it as our bPost
    const bPost = state.find(bPost => bPost.id === id)

    return <BPostForm
        initialValues={{ title: bPost.title, content: bPost.content, image: bPost.image }}
        onSubmit={(title, content, image) => {
            editBPost(id, title, content, image, () => navigation.pop()) //navigation.pop = a callback to pop the page at the end
        }} />
}

const styles = StyleSheet.create({})

export default EditScreen