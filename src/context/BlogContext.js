import createDataContext from "./createDataContext";


const reducer = (state, action) => {
    console.log(action);
    if (action.type == "add") {
        return [...state, action.blogPost];
    } else if (action.type == "delete") {
        return state.filter(
            (post) => 
                post.title !== action.blogPost.title || 
                post.content !== action.blogPost.content
        )
    } else {
        return state;
    }
}

const addBlogPost = (dispatch) => {
    return (blogPost) => {
        dispatch({type: "add", blogPost})
    }
}

const deleteBlogPost = (dispatch) => {
    return (blogPost) => {
        dispatch({type: "delete", blogPost})
    }    
}

export const { Context, Provider } = createDataContext(reducer, {addBlogPost, deleteBlogPost}, []);