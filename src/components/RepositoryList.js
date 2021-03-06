/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Typography } from '@material-ui/core';
import RepositoryItem from './RepositoryItem';

const updateQuery = (previousResult, { fetchMoreResult }) => {
  if (!fetchMoreResult) {
    return previousResult;
  }

  return {
    ...previousResult,
    viewer: {
      ...previousResult.viewer,
      repositories: {
        ...previousResult.viewer.repositories,
        ...fetchMoreResult.viewer.repositories,
        edges: [
          ...previousResult.viewer.repositories.edges,
          ...fetchMoreResult.viewer.repositories.edges,
        ],
      },
    },
  };
};

const RepositoryList = ({
  repositories, pageInfo, totalCount, fetchMore,
}) => (
  <>
    {
      repositories.map(({ node }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <RepositoryItem key={node.id} {...node} />
      ))
    }
    <Typography>
      Showing
      {' '}
      {repositories.length}
      /
      {totalCount}
      {' '}
      repositories
    </Typography>
    <Button
      variant="contained"
      color="primary"
      disabled={!pageInfo.hasNextPage}
      onClick={() => fetchMore({
        variables: {
          cursor: pageInfo.endCursor,
        },
        updateQuery,
      })}
    >
      More Repositories
    </Button>
  </>
);

export default RepositoryList;
