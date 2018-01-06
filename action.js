import uuid from 'uuid';

export const ADD_COMMENT ='ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const ADD_LIKE_TO_COMMENT = 'ADD_LIKE_TO_COMMENT';
export const ADD_UNLIKE_TO_COMMENT = 'ADD_UNLIKE_TO_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
};

function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    id,
    text,
  }
};

function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    id
  }
};

function addLikeToComment(id) {
  return {
    type: ADD_LIKE_TO_COMMENT,
    id
  }
};

function addUnlikeToComment(id) {
  return {
    type: ADD_UNLIKE_TO_COMMENT,
    id
  }
};