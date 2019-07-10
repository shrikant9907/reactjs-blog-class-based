// Blog Reducer
const BlogReducer = (state = [], action) => {

    switch(action.type) {
        
        case 'ADD_POST':
            return [...state, action.payload];
    
        case 'DELETE_POST':
            return state.filter(post => post.id !== action.payload.id);
            
        default:
            return state;
    }

};
 
export default BlogReducer; 