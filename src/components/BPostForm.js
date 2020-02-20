import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

const BPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)
    const [image, setImage] = useState(initialValues.image)


    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)} />

            <Text style={styles.label}>Enter Content:</Text>

            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)} />


            <Text style={styles.label}>Enter Image URI:</Text>
            <TextInput
                style={styles.input}
                value={image}
                onChangeText={(text) => setImage(text)} />
            <Button
                title="save post"
                onPress={() => onSubmit(title, content, image)}
            />
        </View>
    )
}



//prevent CRASh in case we call the component without having an initial value (such as CreateScreen which creates a new post)
BPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
        image: '',
    }
}

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        margin: 5,
        marginTop: 15
    },
    input: {
        fontSize: 18,
        padding: 10,
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: 'gray'

    }
})

export default BPostForm