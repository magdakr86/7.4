import {
    ADD_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
    ADD_LIKE_TO_COMMENT,
    ADD_UNLIKE_TO_COMMENT
} from './action.js';
  
  let initialState = [];
  
  function comments(state = initialState, action) {
    switch (action.type) {
      case ADD_COMMENT:
        return [{
          id: action.id,
          text: action.text,
          votes: 0
        },
        ...state
        ];
      case DELETE_COMMENT:
        return
        state.filter(comment => comment.id !== action.id);
      case EDIT_COMMENT:
        return state.map(comment => {
          if (comment.id === action.id) {
            return { ...comment,
              text: action.text
            }
          }
          return comment;
        });
      case ADD_LIKE_TO_COMMENT:
        return state.map(comment => {
          if (comment.id === action.id) {
            return { ...comment,
              votes: comment.votes + 1
            }
          }
          return comment;
        });
      case ADD_UNLIKE_TO_COMMENT:
        return state.map(comment => {
          if (comment.id === action.id) {
            return { ...comment,
              votes: comment.votes - 1
            }
          }
          return comment;
        });
      default:
        return state;
    }
  };
  
export default comments;