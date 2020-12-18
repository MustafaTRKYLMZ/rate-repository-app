
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


  export const CREATEREVIEW = gql`
mutation CreateReview($input: CreateReviewInput){
  createReview(review: $input){
    repositoryId
  }
}
`;

export const CREATEUSER = gql`
mutation CreateUser($input: CreateUserInput){
  createUser(user: $input){
    id
		username
  }
}
`;

export const DELETEREVIEW = gql`
mutation DeleteReview($id: ID!){
  deleteReview(id: $id)
}
`;