import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Spinner from '../components/Spinner';
import RepositoryList from '../components/RepositoryList';

const GET_REPOSITORIES_OF_CURRENT_USER = gql`
  {
    viewer {
      repositories(
        first: 10
        orderBy: { direction: DESC, field: STARGAZERS }
      ) {
        edges {
          node {
            id
            name
            url
            description
            primaryLanguage {
              name
            }
            owner {
              login
              url
            }
            stargazers {
              totalCount
            }
            viewerHasStarred
            watchers {
              totalCount
            }
            viewerSubscription
          }
        }
      }
    }
  }
`;

const UserRepositories = () => (
  <Query query={GET_REPOSITORIES_OF_CURRENT_USER}>
    {({ data, loading }) => {
      if (loading) {
        return <Spinner />;
      }

      const { viewer } = data;
      return (
        <Container>
          <Box>
            <Typography variant="h1">My repositories</Typography>
            <RepositoryList repositories={viewer.repositories.edges} />
          </Box>
        </Container>
      );
    }}
  </Query>
);

export default UserRepositories;
