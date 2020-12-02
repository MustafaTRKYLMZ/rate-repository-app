import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query {
    repositories{
        edges{
          node{
            fullName,
            ratingAverage,
            stargazersCount,
            forksCount,
          ownerAvatarUrl,
            language,
            description,
            reviewCount,
          }
        }
      }
  }
`;