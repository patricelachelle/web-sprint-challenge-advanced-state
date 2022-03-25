// ❗ You don't need to add extra action creators to achieve MVP

export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE';
export const MOVE_COUNTERCLOCKWISE = 'MOVE_COUNTERCLOCKWISE';
export const SELECT_ANSWER = 'SELECT_ANSWER';
export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_QUIZ = 'SET_QUIZ';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const RESET_FORM = 'RESET_FORM'

export function moveClockwise() { 
  return({type:MOVE_CLOCKWISE})
}

export function moveCounterClockwise() {
  return({type:MOVE_COUNTERCLOCKWISE})
}

export function selectAnswer() {
  return({type:SELECT_ANSWER, payload:answer_id})
}

export function setMessage() { 
  return({type:SET_MESSAGE})
}

export function setQuiz() { 
  return({type:SET_QUIZ, payload:quiz_id})
}

export function inputChange() { 
  return({type:INPUT_CHANGE, payload:question_text, true_answer_text, false_answer_text})
}

export function resetForm() { 
  return({type:RESET_FORM})
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch(setMessage())
    dispatch(setQuiz(quiz_id))
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
