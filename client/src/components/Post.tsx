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
    <div>
      {data ? data.getUserById.username : 'loading'} {id} {title} {userId}{' '}
    </div>
  );
};

export default Post;
