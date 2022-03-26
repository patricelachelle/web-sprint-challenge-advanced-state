// ❗ You don't need to add extra action creators to achieve MVP

import * as types from './action-types';
import axios from "axios";

export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE';
export const MOVE_COUNTERCLOCKWISE = 'MOVE_COUNTERCLOCKWISE';
export const SET_SELECTED_ANSWER = 'SET_SELECTED_ANSWER';
export const SET_INFO_MESSAGE = 'SET_INFO_MESSAGE';
export const SET_QUIZ_INTO_STATE = 'SET_QUIZ_INTO_STATE';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const RESET_FORM = 'RESET_FORM'

export function moveClockwise() { 
  return({type:MOVE_CLOCKWISE})
}

export function moveCounterClockwise() {
  return({type:MOVE_COUNTERCLOCKWISE})
}

export function selectAnswer() {
  return({type:SET_SELECTED_ANSWER, payload:answer_id})
}

export function setMessage() { 
  return({type:SET_INFO_MESSAGE})
}

export function setQuiz() { 
  return({type:types.SET_QUIZ_INTO_STATE, payload:quiz_id})
}

export function inputChange(value) { 
  return({type:INPUT_CHANGE, payload:value})
}

export function resetForm() { 
  return({type:RESET_FORM})
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => {
        debugger
      })
      .catch(err => {
        debugger
      })
  
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    dispatch(resetForm())
    dispatch(setMessage())
    dispatch(setQuiz(quiz_id))
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    dispatch(setMessage())
    dispatch(resetForm())
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
