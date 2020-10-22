import React from 'react';
import PropTypes from 'prop-types';

const RepositoryItem = ({
  name,
  url,
  description,
  primaryLanguage,
  owner,
  stargazers,
}) => (
  <div>
    <div>
      <h2>
        <a href={url}>{name}</a>
      </h2>

      <div>
        {stargazers.totalCount}
        {' '}
        Stars
      </div>
    </div>

    <div>
      <div>
        {description}
      </div>
      <div>
        <div>
          {primaryLanguage && (
            <span>
              Language:
              {primaryLanguage.name}
            </span>
          )}
        </div>
        <div>
          {owner && (
            <span>
              Owner:
              {' '}
              <a href={owner.url}>{owner.login}</a>
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
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
  description: '',
  primaryLanguage: {
    color: '',
  },
};

export default RepositoryItem;
