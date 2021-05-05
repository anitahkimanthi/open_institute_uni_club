import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  AppBar,
  Divider,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  useTheme,
  Hidden,
  Avatar,
  Popover,
  Box,
  Typography,
  SwipeableDrawer,
  Button
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import { useState } from 'react'
import { headerStyles } from '../styles/styles'
import { data } from '../data/content'
import { logoutUser, updateRedux } from '../../redux/actions/actions'
import { connect } from 'react-redux'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {
  usePopupState,
  bindTrigger,
  bindPopover
} from 'material-ui-popup-state/hooks'

const headerContent = data.header
const buttons = data.auth

const Sidebar = props => {
  const classes = headerStyles()

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover'
  })

  const { loggedIn, logoutUser, email,updateRedux } = props

  // check if user is logged in

  const logout = () => {
    logoutUser()
    updateRedux()
  }

  const username = email.substring(0, email.lastIndexOf('@'))
  
  return (
    <div className='sidebar'>
      <List>
        {headerContent.map((item, i) => (
          <NavLink to={item.link} activeClassName='active'>
            <ListItem key={i}>
              <ListItemText primary={item.text} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      {loggedIn ? (
        <div className='auth_buttons'>
          <div className='profile' {...bindTrigger(popupState)}>
            <List>
              <ListItem>
                <Avatar src='/broken-image.jpg' className='avatar' />
                <ListItemText>
                  {username}
                  <ExpandMoreIcon />
                </ListItemText>
              </ListItem>
            </List>
          </div>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <Box p={2} className='logoutcont'>
              <Typography onClick={logout}>Logout</Typography>
            </Box>
          </Popover>
        </div>
      ) : (
        <div className='auth_buttons'>
          <List className={classes.buttonItem}>
            {buttons.map((item, i) => (
              <Link to={item.link}>
                <ListItem key={i}>
                  <Button variant='contained' key={i}>
                    {item.text}
                  </Button>
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      )}
    </div>
  )
}

const Nav = props => {
  const theme = useTheme() // allows user to use the word theme for direction setting
  const classes = headerStyles() // styles

  // setting state
  const [menu, setMenu] = useState(false)

  // open the open up when user click on the profile
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover'
  })

  // distructuring the props states and actions
  const { loggedIn, logoutUser, email,updateRedux} = props

  // allow user to open sidemenu
  const handleOpenMenu = () => {
    setMenu(!menu)
  }

  // check if user is logged in if yes log them out
  const logout = () => {
    logoutUser()
    updateRedux()
    
  }

  return (
    <div className='header row no-gutters'>
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <MenuIcon
              color='inherit'
              aria-label='open drawer'
              onClick={handleOpenMenu}
              edge='start'
              className={classes.menuButton}
            ></MenuIcon>

            <div className={classes.logo}>
              <Link to='/'>
                <List>
                  <ListItem>
                    <div className={classes.avator}>OPCLUB</div>
                  </ListItem>
                </List>
              </Link>
            </div>
            <div className={classes.headerLinks}>
              <List className={classes.links}>
                {headerContent.map((item, i) => (
                  <NavLink to={item.link} key={i} activeClassName='active'>
                    <ListItem key={i} className={classes.linkItem}>
                      <ListItemText primary={item.text} />
                      <Divider />
                    </ListItem>
                  </NavLink>
                ))}
              </List>
            </div>

            <div className={classes.auth}>
              {loggedIn ? (
                <div className='auth_buttons'>
                  <div className='profile' {...bindTrigger(popupState)}>
                    <List>
                      <ListItem>
                        <Avatar src='/broken-image.jpg' className='avatar' />
                        <ListItemText>
                          {email !== ""
                            ? email.substring(0, email.lastIndexOf('@'))
                            : ''}
                          <ExpandMoreIcon />
                        </ListItemText>
                      </ListItem>
                    </List>
                  </div>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center'
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center'
                    }}
                  >
                    <Box p={2} className='logoutcont'>
                      <Typography onClick={logout}>Logout</Typography>
                    </Box>
                  </Popover>
                </div>
              ) : (
                <div className='auth_buttons'>
                  <List className={classes.buttonItem}>
                    {buttons.map((item, i) => (
                      <Link to={item.link} key={i}>
                        <ListItem key={i}>
                          <Button variant='contained' key={i}>
                            {item.text}
                          </Button>
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </div>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <nav>
        <Hidden smUp implementation='css'>
          <SwipeableDrawer
            open={menu}
            variant='temporary'
            onClose={handleOpenMenu}
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          >
            <Sidebar
              menu={menu}
              handleOpenMenu={handleOpenMenu}
              logoutUser={logoutUser}
              loggedIn={loggedIn}
              email={email}
            />
          </SwipeableDrawer>
        </Hidden>
      </nav>
      <br />
      <br />
    </div>
  )
}

function Header (props) {
  const { loggedIn, logoutUser, email,updateRedux } = props

  return <Nav 
    loggedIn={loggedIn} 
    updateRedux ={updateRedux}
    logoutUser={logoutUser} 
    email={email} 
    />
}

const mapStateToProps = state => ({
  loggedIn: state.register.registerInfo.loggedIn,
  email: state.register.registerInfo.email,
})

export default connect(mapStateToProps, { logoutUser, updateRedux })(Header)
