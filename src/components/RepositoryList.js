import React from 'react';
import RepositoryItem from './RepositoryItem';

const RepositoryList = ({ repositories }) => (
  repositories.map(({ node }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <RepositoryItem key={node.id} {...node} />
  ))
);

export default RepositoryList;
