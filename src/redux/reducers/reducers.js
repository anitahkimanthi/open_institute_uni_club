import {
  REGISTER,
  SUCCESS_REGISTER,
  SUCCESS_LOGIN,
  FAILED_LOGIN,
  SUCCESS_PASSWORD_RESET,
  FAILED_PASSWORD_RESET,
  SUCCESS_LOGOUT,
  FAILED_LOGOUT,
  GOOGLEAUTH_LOGIN_SUCCESS,
  GOOGLEAUTH_REGISTER,
  GOOGLEAUTH_LOGIN_FAILED,
  REGISTRATION_FAIL
} from '../actions/types'

const initialState = {
  registerInfo: '',
  googleAuthData: '',
  error: '',
  message: ''
}

const allReducers = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        registerInfo: action.payload
      }
    case REGISTRATION_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case SUCCESS_REGISTER:
      return {
        ...state,
        message: action.payload
      }
    case SUCCESS_LOGIN:
      return {
        ...state,
        message: action.payload
      }
    case FAILED_LOGIN:
      return {
        ...state,
        error: action.payload
      }
    case SUCCESS_PASSWORD_RESET:
      return {
        ...state,
        message: action.payload
      }
    case FAILED_PASSWORD_RESET:
      return {
        ...state,
        error: action.payload
      }
    case SUCCESS_LOGOUT:
      return {
        ...state,
        message: action.payload
      }
    case FAILED_LOGOUT:
      return {
        ...state,
        error: action.payload
      }
    case GOOGLEAUTH_LOGIN_SUCCESS:
      return {
        ...state,
        message: action.payload
      }
    case GOOGLEAUTH_REGISTER:
      return {
        ...state,
        googleAuthData: action.payload
      }
    case GOOGLEAUTH_LOGIN_FAILED:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default allReducers
