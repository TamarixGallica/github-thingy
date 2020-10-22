import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Spinner from '../components/Spinner';
import RepositoryList from '../components/RepositoryList';

const GET_REPOSITORIES_OF_CURRENT_USER = gql`
  query($cursor: String) {
    viewer {
      repositories(
        first: 10
        orderBy: { direction: DESC, field: STARGAZERS }
        after: $cursor
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
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

const UserRepositories = () => (
  <Query query={GET_REPOSITORIES_OF_CURRENT_USER}>
    {({ data, loading, fetchMore }) => {
      if (loading) {
        return <Spinner />;
      }

      const { viewer } = data;
      return (
        <Container>
          <Box>
            <Typography variant="h1">My repositories</Typography>
            <RepositoryList
              repositories={viewer.repositories.edges}
              pageInfo={viewer.repositories.pageInfo}
              fetchMore={fetchMore}
            />
          </Box>
        </Container>
      );
    }}
  </Query>
);

export default UserRepositories;
