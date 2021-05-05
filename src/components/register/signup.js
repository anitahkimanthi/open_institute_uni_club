import { Button, Divider } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { register, updateRedux } from '../../redux/actions/actions'
import image from '../../static/images/image13.jpg'
import AlertBar from '../alert/alert'
import {withRouter} from "react-router"
import store from '../../redux/store'

function Signup (props) {

  // setting user input in state
  const [state, setState] = useState({
    email: '',
    password: '',
    age: '',
    loggedIn: false
  })


  const { message, error ,updateRedux} = props

  // enable user to type and see what they are typing
  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  // submit user data to the server but in our case we are using redux and local storage to store and retrive data
  const handleSubmit = e => {
    const { email, password, age } = state

    const userInputs = {
      email: email,
      password: password,
      age: age,
      loggedIn: true
    }

    setState({
      email: '',
      password: '',
      age: '',
      loggedIn: false
    })

    props.register(userInputs)
    updateRedux();

    const mess = store.getState().register.message
    console.log(mess)
    
  }

const { password, email, age } = state /// distructuring of state
  return (

    <div className='row no-gutters auth h-80 justify-content-center'>

      <AlertBar message={message} error={error}/>
      
      <div className='col-12 col-lg-6 fields my-auto'>
        <form>
          <h3>Register</h3>
          <input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            placeholder='yourname@gmail.com'
          />
          <br />
          <input
            type='number'
            name='age'
            value={age}
            onChange={handleChange}
            placeholder='Age'
          />
          <br />
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            placeholder='password'
          />
          <br />
          {password === '' || email === '' || age === '' ? (
            <Button variant='contained' className='disabled'>
              Register
            </Button>
          ) : (
            <Button
              variant='contained'
              className='enabled'
              onClick={handleSubmit}
            >
              Register
            </Button>
          )}

          <div className='footer'>
            <Link to='/forgot-password'>
              <small>Forgot password</small>
            </Link>

            <Divider orientation='vertical' flexItem className='divider' />
            <Link to='/login'>
              <small>Sign In</small>
            </Link>
          </div>
        </form>
      </div>
      <div className='col-12 col-lg-6 image_wapper'>
        <img src={image} alt='title' className='img-fluid' />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  message: state.register.message,
  error: state.register.error
})

export default withRouter(connect(mapStateToProps, { register,updateRedux })(Signup))
