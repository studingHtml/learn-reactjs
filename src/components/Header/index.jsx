import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link, NavLink } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Register from '../../features/Auth/components/Register';
import Draggable from 'react-draggable';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
      color: 'white',
      textDecoration: 'none',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const FDialog = React.forwardRef((props,ref) => (
    <Dialog ref={ref} className="FDialog" open={open} onClose={handleClose} aria-labelledby="form-dialog-title" disableBackdropClick disableEscapeKeyDown>
    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
    <DialogContent>
      <Register />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
      <Button onClick={handleClose} color="primary">
        Subscribe
      </Button>
    </DialogActions>
  </Dialog>
  ));

  // const nodeRef = React.useRef(null);
  const ref = React.createRef();
  return (
    <div className={classes.root}>
            
        
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/" >Hana Shop</Link>
          </Typography>

        <p><NavLink to="/todos" activeClassName="active-menu">
        <Button className={classes.link} color="inherit">Todo</Button>
        </NavLink></p>
        
        <p><NavLink to="/albums" activeClassName="active">
        <Button className={classes.link} color="inherit">Album</Button>
        </NavLink></p>
        
        <Button color="inherit" onClick={handleClickOpen} >Register</Button>
        </Toolbar>
      </AppBar>
      
      <FDialog ref={ref}/>
    </div>
  );
}