# GitHub Thingy

An application for doing some simple things with GitHub GraphQL API. Created as an exercise on how to use GraphQL.

Currently implemented features:
* View current user's details
* List current user's repositories

# Requirements

Application has been developed using Node 12. While other versions may work, none of them have been tested.

For development Node >= 10 and Git >= 2.13.0 are required for the Git pre-commit hook to work.

# How to set up

Clone the repository and provide a personal GitHub access token. Instructions on getting an access token are available on [GitHub's developer documentation site](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token). Current implementation doesn't require any scopes to be selected.

Personal access token is read from environment variable REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN. It's read automatically from .env file if one is placed in the root folder.
