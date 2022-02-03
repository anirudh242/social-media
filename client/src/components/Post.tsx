import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { postInterface } from '../interface';
import { getUsernameById } from '../querys';
import { useNavigate } from 'react-router-dom';

const Post: React.FC<postInterface> = ({
  id,
  title,
  userId,
  description,
  content,
}) => {
  // execute getuserbyid query
  const { data, loading, error } = useQuery(getUsernameById, {
    variables: {
      userId,
    },
  });

  const navigate = useNavigate();

  return (
    <>
      {data ? (
        <div
          className="text-left 
          border-2 w-72 self mx-auto p-6 rounded-lg shadow-lg mb-2
          hover:scale-110 ease-linear transition-all duration-75 active:scale-100"
        >
          <div>
            <Link to={`/user/${userId}`}>
              <text className="font-medium text-sm hover:underline">
                @{data.getUserById.username}
              </text>{' '}
            </Link>
            <br />
            <Link to={`/post/${id}`}>
              <b className="font-extrabold text-xl hover:underline">{title}</b>
            </Link>
            {description !== null ? (
              <>
                <br />
                <text className="text-xs text-gray-500">{description}</text>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <div>No posts</div>
      )}
    </>
  );
};

export default Post;
