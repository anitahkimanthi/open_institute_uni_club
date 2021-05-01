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
  GOOGLEAUTH_LOGIN_FAILED
} from './types'

// set redux store signup data with the one in the local storage if avalilable
export const updateRedux = () => dispatch => {
  const data = JSON.parse(localStorage.getItem('registerInfo'))
  if (data) {
    dispatch({
      type: REGISTER,
      payload: data
    })
  } else {
    const userInputs = {
      email: '',
      password: '',
      age: '',
      loggedIn: null
    }
    dispatch({
      type: REGISTER,
      payload: userInputs
    })
  }
}

// register user if they reguest  to register
export const register = userInputs => dispatch => {
  localStorage.setItem('registerInfo', JSON.stringify(userInputs))

  const data = JSON.parse(localStorage.getItem('registerInfo'))

  dispatch({
    type: REGISTER,
    payload: data
  })

  dispatch({
    type: SUCCESS_REGISTER,
    payload: 'You have successifully created an account!'
  })
}

// signin user if they already have an account
export const signin = userInputs => dispatch => {
  const signupData = JSON.parse(localStorage.getItem('registerInfo'))

  if (signupData) {
    // check if the email and the password match the ones in the userInfo object
    if (
      signupData.email === userInputs.email &&
      userInputs.password === signupData.password
    ) {
      signupData.loggedIn = true

      // set the update data to local storage
      localStorage.setItem('registerInfo', JSON.stringify(signupData))

      // update redux store
      updateRedux()

      dispatch({
        type: SUCCESS_LOGIN,
        payload: 'You have successifully logged in'
      })

      dispatch({
        type: FAILED_LOGIN,
        payload: ''
      })
    } else {
      // display error if the password and email dont match
      dispatch({
        type: FAILED_LOGIN,
        payload: 'Incorrect email or password'
      })
    }
  }
}

// if user request to register with google
export const googleAuthRegister = userGoogleaccountInfo => dispatch => {
  dispatch({
    type: GOOGLEAUTH_REGISTER,
    payload: userGoogleaccountInfo
  })
}

// if user request to login using google account
export const googleAuthLogin = () => dispatch => {
  const googleAuthData = JSON.parse(localStorage.getItem('googleAuthData'))

  // check if the user already have an account to be able to log them in
  if (googleAuthData) {
    dispatch({
      type: GOOGLEAUTH_LOGIN_SUCCESS,
      payload: 'You have successifully logged in'
    })
  }

  // let user know that the google account they are trying to register does not exist
  dispatch({
    type: GOOGLEAUTH_LOGIN_FAILED,
    payload: 'Account does not exist'
  })
}

// allow user to reset their password
export const resetPassword = userInputs => dispatch => {
  const signupData = JSON.parse(localStorage.getItem('registerInfo'))
  // check if the account already exist
  if (signupData !== undefined) {
    signupData.password = userInputs.password

    localStorage.setItem('registerInfo', JSON.stringify(signupData))

    dispatch({
      type: SUCCESS_PASSWORD_RESET,
      payload: 'You have successifully reset your password'
    })
  } else {
    // display error if the account does not exist
    dispatch({
      type: FAILED_PASSWORD_RESET,
      payload: 'Account does not exist'
    })
  }
}

// when user request to logout check if they are still logged in
export const logoutUser = () => dispatch => {
  const signupData = JSON.parse(localStorage.getItem('registerInfo'))

  // set the loggedin status to false on logout
  if (signupData && signupData.loggedIn === true) {
    signupData.loggedIn = false

    // set the update data to local storage
    localStorage.setItem('registerInfo', JSON.stringify(signupData))

    // update redux store
    updateRedux()

    dispatch({
      type: SUCCESS_LOGOUT,
      payload: 'You have successifully logged out'
    })
  } else if (signupData && signupData.loggedIn === false) {
    dispatch({
      type: FAILED_LOGOUT,
      payload: 'Failed to logout'
    })
  } else {
    // reset the app to default - with registser and signin buttons on header
    dispatch({
      type: FAILED_LOGOUT,
      payload: 'Account does not exist'
    })
  }
}
