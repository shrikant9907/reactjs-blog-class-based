
// Combining the reducers
import { combineReducers } from 'redux';

import BlogReducer from './blogReducer';
import CounterReducer from './counterReducer';

const combinedReducer = combineReducers({
    blogposts: BlogReducer,
    counter: CounterReducer
}); 

export default combinedReducer;
// export default BlogReducer;