// We have install this library for generating ids:
// Command: npm install uuid --save

import uuidv4 from 'uuid/v4';

// Blog Actions
export const addPost = ({ title, content, author }) => ({
    type: 'ADD_POST',
    payload: {
        id: uuidv4(),
        title,
        content,
        author
    }
});

export const deletePost = ({ id }) => ({
    type: 'DELETE_POST',
    payload: {
        id
    }
}); 