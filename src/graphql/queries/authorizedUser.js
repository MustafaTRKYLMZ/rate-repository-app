import { gql } from 'apollo-boost';

export const CURRENT_USER = gql`
query { 
   authorizedUser {
     id
     username
   }
}

`;