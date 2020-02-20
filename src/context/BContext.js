import createDataContext from './createDataContext';


// reminder: state = the entire blog posts data
const bReducer = (state, action) => {
    switch (action.type) {
        case 'edit_b_post':
            return state.map((bPost) => { // checking post by post for the one we like to edit.
                return bPost.id === action.payload.id ? action.payload : bPost //short if. found?>replace.
            })
        case 'delete_b_post':
            return state.filter((bPost) => bPost.id !== action.payload)
        case 'add_b_post':
            return [...state, {
                id: Date.now(),
                title: action.payload.title,
                content: action.payload.content,
                image: action.payload.image
            }]
        default:
            return state
    }
}

const addBPost = (dispatch) => {
    return (title, content, image, callback) => {
        dispatch({ type: 'add_b_post', payload: { title, content, image } })
        if (callback) { callback() } //check if we has a callback (such as popping the page) 
    }
}

const editBPost = (dispatch) => {
    return (id, title, content, image, callback) => {
        dispatch({
            type: 'edit_b_post',
            payload: { id, title, content, image }
        })
        if (callback) { callback() } //check if we has a callback (such as popping the page) 
    }
}

const deleteBPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_b_post', payload: id })
    }
}

export const { Context, Provider } = createDataContext(bReducer, { addBPost, deleteBPost, editBPost },
    [{ title: "test post", content: "test content", image: 'https://facebook.github.io/react/logo-og.png', id: 1 }]
)
