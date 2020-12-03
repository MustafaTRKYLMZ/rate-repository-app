
import { gql } from 'apollo-boost';

export const AUTHORİZE = gql`
  mutation authorize($username: String!, $password: String!) {
    authorize(
      credentials:{
         username: $username, password: $password
      }
     )  {
      accessToken
    }
  }
  `;
