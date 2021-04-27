import {
    GOOGLEAUTH,
    REGISTER,
    SUCCESS_LOGIN,
    FAILED_LOGIN,
    SUCCESS_PASSWORD_RESET,
    FAILED_PASSWORD_RESET,
    SUCCESS_LOGOUT,
    FAILE_LOGOUT

} from "./types"

// register user if they reguest  to register
export const register = (userInfo) => dispatch =>{

    
    dispatch({
        type : REGISTER,
        payload : {
            registerInfo : userInfo,
            message : "You have successifully registered"
        }
    })
}

// signin user if they already have an account
export const signin = (userInputs) => dispatch =>{

    const signupData = localStorage.getItem(userInfo)

    if(signupData && signupData.loggedin) {
        // check if the email and the password match the ones in the userInfo object
        if(signupData.email === userInputs.email && 
        signupData.password === userInputs.pasword){

            dispatch({
                type: SUCCESS_LOGIN,
                payload : "You have successifully logged in"
            })
        } 
        // display error if the password and email dont match
        dispatch({
            type: FAILED_LOGIN,
            payload : "Incorrect email or password"
        })
    }
}

// if user request to register with google
export const googleAuth = (userGoogleaccountInfo) => dispatch =>{
    dispatch({
        type : GOOGLEAUTH,
        payload : {
            registerInfo : userGoogleaccountInfo,
            message : "You have successifully registered"
        }
    })
   
}

// if user request to login using google account
export const googleAuth = () => dispatch =>{

    const googleAuth = localStorage.getItem(googleAuth)
    
    // check if the user already have an account to be able to log them in
    if(googleAuth){
        dispatch({
            type : GOOGLEAUTH,
            payload : "You have successifully logged in"
        })
    } 
    
    // let user know that the google account they are trying to register does not exist
    dispatch({
        type : GOOGLEAUTH,
        payload : "Account does not exist"
    })
}

// allow user to reset their password
export const resetPassword = (new_password) => dispatch =>{

    const signupData = localStorage.getItem(userInfo)
    // check if the account already exist
    if(signupData){
        signupData.password = new_password

        dispatch({
            type: SUCCESS_PASSWORD_RESET,
            payload : "You have successifully reset your password"
        })
    }    

    // display error if the account does not exist
        dispatch({
            type: FAILED_PASSWORD_RESET,
            payload : "Account does not exist"
        })
    
}

// when user request to logout check if they are still logged in
export const logoutUser = (new_password) => dispatch =>{

    const signupData = localStorage.getItem(userInfo)

    // set the loggedin status to false on logout
    if(signupData && signupData.loggedin){
        signupData.loggedin = false

    dispatch({
        type: SUCCESS_LOGOUT,
        payload : "You have successifully logged out"
    })
    } else if(signupData && !signupData.loggedin){

        dispatch({
            type: FAILED_LOGOUT,
            payload : "not loggedin"
        })
    }

    // reset the app to default - with registser and signin buttons on header
    dispatch({
        type: FAILE_LOGOUT,
        payload : "no account"
    })
}