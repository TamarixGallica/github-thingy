import React from 'react';
import PropTypes from 'prop-types';

import {
  ListItem, ListItemIcon, ListItemText, Typography,
} from '@material-ui/core';

const ListItemWithIcon = ({ name, value, icon: Icon }) => (
  <ListItem>
    <ListItemIcon>
      {Icon}
    </ListItemIcon>
    <Typography variant="srOnly">{name}</Typography>
    <ListItemText primary={value || 'Not available'} />
  </ListItem>
);

ListItemWithIcon.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  icon: PropTypes.element.isRequired,
};

ListItemWithIcon.defaultProps = {
  value: '',
};

export default ListItemWithIcon;
