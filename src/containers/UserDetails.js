import React from 'react';
import {
  Container, Box, Typography, List,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import LinkIcon from '@material-ui/icons/Link';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import TwitterIcon from '@material-ui/icons/Twitter';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Spinner from '../components/Spinner';
import ListItemWithIcon from '../components/ListItemWithIcon';

const GET_CURRENT_USER_DETAILS = gql`
{
  viewer {
    login
    name
    url
    location
    twitterUsername
    websiteUrl
  }
}
`;

const UserDetails = () => (
  <Query query={GET_CURRENT_USER_DETAILS}>
    {({ data, loading }) => {
      if (loading) {
        return <Spinner />;
      }

      const { viewer } = data;

      return (
        <Container>
          <Box>
            <Typography variant="h1">My details</Typography>
            <List>
              <ListItemWithIcon name="Name" value={viewer.name} icon={<PersonIcon />} />
              <ListItemWithIcon name="Login" value={viewer.login} icon={<FingerprintIcon />} />
              <ListItemWithIcon name="GitHub link" value={viewer.url} icon={<LinkIcon />} />
              <ListItemWithIcon name="Website link" value={viewer.websiteUrl} icon={<LinkIcon />} />
              <ListItemWithIcon name="Location" value={viewer.location} icon={<LocationCityIcon />} />
              <ListItemWithIcon name="Twitter handle" value={viewer.twitterUsername} icon={<TwitterIcon />} />
            </List>
          </Box>
        </Container>
      );
    }}
  </Query>
);

export default UserDetails;
