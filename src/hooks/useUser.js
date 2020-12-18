import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER } from '../graphql/queries/authorizedUser';

const useUser = () => {
  let variables = {"first": 9, "includeReviews": true};
  const { data, loading, fetchMore, ...result} = useQuery(CURRENT_USER,{
    fetchPolicy: 'cache-and-network',
    variables
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.authorizedUser.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }
    fetchMore({
      query: GET_AUTHORIZEDUSER,
      variables: {
        after: data.authorizedUser.reviews.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          authorizedUser: {
            ...fetchMoreResult.authorizedUser,
            reviews:{
              ...fetchMoreResult.authorizedUser.reviews,
              edges: [
              ...previousResult.authorizedUser.reviews.edges,
              ...fetchMoreResult.authorizedUser.reviews.edges,
              ]
            },
          },
        };

        return nextResult;
      },
    });
  };

  return {
    authorizedUser: data ? data.authorizedUser : undefined,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useUser;