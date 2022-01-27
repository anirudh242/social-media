import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { getPostById } from '../querys';

const PostPage = () => {
  const postId = useParams<{ postId: string }>().postId;

  const { data, loading } = useQuery(getPostById, {
    variables: {
      postId,
    },
  });

  return (
    <div className="text-center">
      {data ? (
        <>
          <h1 className="pageHeader">{data.getPostById.title}</h1>
          {data.getPostById.description ? (
            <p className="text-gray-500">{data.getPostById.description}</p>
          ) : (
            <></>
          )}
          <br />
          <p>{data.getPostById.content}</p>
        </>
      ) : loading ? (
        <h1 className="pageHeader">Loading...</h1>
      ) : (
        <h1 className="pageHeader">Error</h1>
      )}
    </div>
  );
};

export default PostPage;
