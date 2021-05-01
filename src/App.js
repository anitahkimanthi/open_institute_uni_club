import React, { useEffect, useState } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { updateRedux } from './redux/actions/actions'
import { connect } from 'react-redux'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Homepage from './components/homepage/layout'
import Register from './components/register/signup'
import Login from './components/signin/login'
import Cohorts from './components/cohorts/cohorts'
import Programme_page from './components/programme/layout'
import Programme_List from './components/programme/programme_list'
import Gallary from './components/gallary/gallary'
import ResetPassword from './components/password_reset/forgotpassword'
import NotFound from './components/notfound/error'
import Alert from '@material-ui/lab/Alert'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

function App (props) {
  const [open, setOpen] = useState(true)

  useEffect(() => {
    props.updateRedux()
  })

  const closeAlert = () => {
    setOpen(false)
  }

  const history = createBrowserHistory()
  const { message, error } = props

  return (
    <div className='app row no-gutters'>
      {open && (
        <div className='col-12'>
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
      )}
      <div className='col-12 nopadding'>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/home' component={Homepage} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ResetPassword} />

            <Route path='/programme' component={Programme_page} />
            <Route path='/programme-list' component={Programme_List} />
            <Route path='/gallary' component={Gallary} />
            <Route path='/cohorts' component={Cohorts} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  message: state.register.message,
  error: state.register.error
})

export default connect(mapStateToProps, { updateRedux })(App)
