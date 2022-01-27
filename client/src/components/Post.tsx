import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { postInterface } from '../interface';
import { getUsernameById } from '../querys';
import { useNavigate } from 'react-router-dom';

const Post: React.FC<postInterface> = ({ id, title, userId, content }) => {
  // execute getuserbyid query
  const { data, loading, error } = useQuery(getUsernameById, {
    variables: {
      userId,
    },
  });

  const navigate = useNavigate();

  const postClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <>
      {data ? (
        <div
          onClick={postClick}
          className="cursor-pointer text-left 
          border-2 w-72 self mx-auto p-6 rounded-lg shadow-lg mb-2
          hover:scale-110 ease-linear transition-all duration-75"
        >
          <div>
            <Link to={`/user/${userId}`}>
              <text className="font-medium text-sm hover:underline">
                @{data.getUserById.username}
              </text>{' '}
            </Link>
            <br />
            <b className="font-extrabold text-xl">{title}</b>
          </div>
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
