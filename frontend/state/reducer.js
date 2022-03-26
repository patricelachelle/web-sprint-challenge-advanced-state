// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  SET_QUIZ_INTO_STATE,
  INPUT_CHANGE,
  RESET_FORM
} from './action-creators'

const initialWheelState = 0
function wheel(state = initialWheelState, action) { 
  switch(action.type) {
    case(MOVE_CLOCKWISE):
      return state + 1
    case(MOVE_COUNTERCLOCKWISE):
      return state - 1
  }
  return state
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case(SET_QUIZ_INTO_STATE):
      return({
        ...state,
        quiz: action.payload
      })
  }
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case(SET_SELECTED_ANSWER):
      return({
        ...state,
        answer: action.payload
      })
  }
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case(SET_INFO_MESSAGE):
      return({
        ...state,
        message: action.payload
      })
  }
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type) {
    case(RESET_FORM):
      return state
    case(INPUT_CHANGE):
      return({
        ...state,
        input: action.payload
      })
  }
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
