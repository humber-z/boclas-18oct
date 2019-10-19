import React, { useEffect, useState } from 'react'
import { Typography, CircularProgress, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import firebase from '../../firebase'
import App from './App'
import { withRouter } from 'react-router-dom' 
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import HomeIcon from '@material-ui/icons/Home';
import GavelIcon from '@material-ui/icons/Gavel';
import MailIcon from '@material-ui/icons/Mail';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import SettingsIcon from '@material-ui/icons/Settings';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DescriptionIcon from '@material-ui/icons/Description';
import Principal from './components/Principal'
import Asignado from './components/Asignado'
import Catalogos from './components/Catalogos'
import Configuracion from './components/Configuracion'
import Reportes from './components/Reportes'
import Solicitudes from './components/Solicitudes'
import Usuarios from './components/Usuarios'
import MultiStep from './editor/stepMenu';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';










const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(8),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  }
}));

function Dashboard(props) {
  const classes = useStyles();
   const theme = useTheme();
	//const { classes } = props

	if(!firebase.getCurrentUsername()) {
		// not logged in
		alert('Please login first')
		props.history.replace('/login')
		return null
	}

	const [quote, setQuote] = useState('')
  const [open, setOpen] = useState(true);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

	useEffect(() => {
		firebase.getCurrentUserQuote().then(setQuote)
	})

	return (
		<div className={classes.root}>
      <CssBaseline />
         <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,})}>
            <Toolbar>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}>
                   <MenuIcon />
               </IconButton>
            <Typography variant="h6" className={classes.title}
               component="h1" 
               variant="h5">
					     Hola { firebase.getCurrentUsername() }
			    	</Typography>
            {/*<Button
				   	   type="submit"
					     variant="contained"
					     color="secondary"       
					     onClick={logout}>
				    	Salir
            </Button>*/}
          </Toolbar>
       </AppBar>
      {/*Side NavBar*/}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
        paper: classes.drawerPaper,
        }}
      >
       {/*<Typography variant="h4" noWrap style={{padding: '25px 10px 10px 10px'}}>
            BoClaims
          </Typography>*/}
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
         <Link to="/dashboard/principal" style={{ textDecoration: 'none', color: '#333333'}}>
          <ListItem button key={0}>
             <ListItemIcon><HomeIcon /></ListItemIcon>
             <ListItemText primary="Principal" />
          </ListItem>
          </Link>
          <Link to="/dashboard/solicitudes" style={{ textDecoration: 'none', color: '#333333'}}>
          <ListItem button key={1}>
             <ListItemIcon><PeopleIcon /></ListItemIcon>
             <ListItemText primary="Solicitudes" />
          </ListItem>
          </Link>
          <Link to="/dashboard/casos" style={{ textDecoration: 'none', color: '#333333'}}>
          <ListItem button key={2} >
             <ListItemIcon><GavelIcon /></ListItemIcon>
             <ListItemText primary="Casos" />
          </ListItem>
          </Link>
          <Link to="/dashboard/asignado" style={{ textDecoration: 'none', color: '#333333'}}>
          <ListItem button key={3} onClick={() => console.log('work')}>
             <ListItemIcon><AssignmentIcon /></ListItemIcon>
             <ListItemText primary="Asignado" />
          </ListItem>
          </Link>
          <Link to="/dashboard/reportes" style={{ textDecoration: 'none', color: '#333333'}}>
          <ListItem button key={4} onClick={() => console.log('work')}>
            <ListItemIcon><DescriptionIcon /></ListItemIcon>
            <ListItemText primary="Reportes" />
          </ListItem>
          </Link>
          <Link to="/dashboard/configuracion" style={{ textDecoration: 'none', color: '#333333'}}>
          <ListItem button key={5}>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Configuracion" />
          </ListItem>
          </Link>
          <Link to="/dashboard/catalogos" style={{ textDecoration: 'none', color: '#333333'}}>
          <ListItem button key={6}>
            <ListItemIcon><FileCopyIcon /></ListItemIcon>
            <ListItemText primary="Catalogos" />
          </ListItem>
          </Link>
          <Link to="/dashboard/usuarios" style={{ textDecoration: 'none', color: '#333333'}}>
          <ListItem button key={7}>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Usuarios" />
          </ListItem>
          </Link>
          <ListItem button key={8}>
             <ListItemIcon><AssignmentIndIcon /></ListItemIcon>
             <ListItemText primary="Estructura Organizacional" />
          </ListItem>
          <ListItem button key={9} onClick={logout}>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Salir" />
          </ListItem>
        </List>
      </Drawer>
    {/*App Content*/}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
       {/* <App /> */}
       <Switch>
       <Route path={`/dashboard/principal`} component={Principal} />
       <Route exact path={`/dashboard/casos`} component={App} />
       <Route path={`/dashboard/asignado`} component={Asignado} />
       <Route path={`/dashboard/catalogos`} component={Catalogos} />
       <Route path={`/dashboard/configuracion`} component={Configuracion} />
       <Route path={`/dashboard/reportes`} component={Reportes} />
       <Route path={`/dashboard/solicitudes`} component={Solicitudes} />
       <Route path={`/dashboard/usuarios`} component={Usuarios} />
       </Switch>
      </main>
      </div>
	)

	async function logout() {
		await firebase.logout()
		props.history.push('/')
	}

 setNull = () =>{

 }

}

export default withRouter((Dashboard))