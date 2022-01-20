import { useQuery } from '@apollo/client';
import { postInterface } from '../interface';
import { getUserById } from '../querys';

const Post: React.FC<postInterface> = ({ id, title, userId, content }) => {
  // execute getuserbyid query
  const { data, loading, error } = useQuery(getUserById, {
    variables: {
      userId,
    },
  });

  return (
    <>
      {data ? (
        <div className="post">
          <text>@{data.getUserById.username}</text> <br />
          <b className="postCardTitle">{title}</b>
        </div>
      ) : loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div>No posts</div>
      )}
    </>
  );
};

export default Post;
