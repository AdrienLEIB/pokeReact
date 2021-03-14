/* eslint-disable import/no-anonymous-default-export */
import {
    DISPLAY_MODAL,
  } from '../actions/modal';
  
  const initialState = {
    modal: {
      title:'',
      content: ''
    }
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case DISPLAY_MODAL:
        return {
          ...state,
          modal: action.payload
        }
      default:
        return state
    }
  }