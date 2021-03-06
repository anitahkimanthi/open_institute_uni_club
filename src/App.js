import React, { useEffect } from 'react'
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

function App (props) {
  // when components renders update redux store
  useEffect(() => {
    props.updateRedux()
  })

  const history = createBrowserHistory()
  
  return (
    <div className='app row no-gutters'>
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
})

export default connect(mapStateToProps, { updateRedux })(App)
