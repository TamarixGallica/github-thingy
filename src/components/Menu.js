import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const navigationWidth = 150;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: navigationWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: navigationWidth,
  },
}));

const Navigation = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer className={classes.drawer} classes={{ paper: classes.drawerPaper }} variant="permanent" anchor="left">
        <List>
          {
            [{ text: 'My details', link: '/me' }, { text: 'My repositories', link: '/me/repositories' }].map(({ text, link }) => (
              <ListItem key={text}>
                <Link to={link}>
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </div>
  );
}

export default Navigation;
