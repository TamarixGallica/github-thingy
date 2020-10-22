import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Paper, Typography, Link,
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

const RepositoryItem = ({
  name,
  url,
  description,
  primaryLanguage,
  owner,
  stargazers,
}) => (
  <Box m={1}>
    <Paper>
      <Typography variant="h6" component="h2"><Link href={url}>{name}</Link></Typography>
      <Typography>
        <StarIcon />
        <Typography variant="srOnly">Starred</Typography>
        {stargazers.totalCount}
        <Typography variant="srOnly">times</Typography>
      </Typography>
      {
      description
      && (
        <Typography>
          {description}
        </Typography>
      )
    }
      {
      primaryLanguage && (
        <Typography>
          Language:
          {primaryLanguage.name}
        </Typography>
      )
    }
      {
    owner && (
      <Typography>
        Owner:
        {' '}
        <Link href={owner.url}>{owner.login}</Link>
      </Typography>
    )
  }
    </Paper>
  </Box>
);

RepositoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  primaryLanguage: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
  stargazers: PropTypes.PropTypes.shape({
    totalCount: PropTypes.number.isRequired,
  }).isRequired,
  watchers: PropTypes.PropTypes.shape({
    totalCount: PropTypes.number.isRequired,
  }).isRequired,
};

RepositoryItem.defaultProps = {
  description: undefined,
  primaryLanguage: {
    color: undefined,
  },
};

export default RepositoryItem;
