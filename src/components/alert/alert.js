import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import store from '../../redux/store'
import Alert from '@material-ui/lab/Alert'
import { SUCCESS_REGISTER, FAILED_LOGIN } from '../../redux/actions/types'

export default function alert (props) {

  const { message, error } = props // distructuring the props
 
  // on click of close icon set the message and error state to empty
  const closeAlert = () => {

    store.dispatch({
      type: SUCCESS_REGISTER,
      payload: ''
    })

    store.dispatch({
      type: FAILED_LOGIN,
      payload: ''
    })
  }

  return (
    <div className="col-12">
      {message || error ? (
        <div>
          {message !== '' && (
            <Alert
              severity='success'
              variant='filled'
              action={
                <IconButton size='small' onClick={closeAlert} className='icon'>
                  <CloseIcon fontSize='inherit' />
                </IconButton>
              }
              className='alert success'
            >
              {message}
            </Alert>
          )}

          {error !== '' && (
            <Alert
              severity='error'
              variant='filled'
              action={
                <IconButton size='small' className='icon' onClick={closeAlert}>
                  <CloseIcon fontSize='inherit' />
                </IconButton>
              }
              className='alert error'
            >
              {error}
            </Alert>
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
