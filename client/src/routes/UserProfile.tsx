import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import { postInterface } from '../interface';
import { getUserById } from '../querys';

const UserProfile = () => {
  // get userId from url. User id is a number.
  const { userId } = useParams();

  // make a query to get user by id
  const { data, loading } = useQuery(getUserById, {
    variables: {
      userId: Number.parseInt(userId!),
    },
  });

  useEffect(() => {
    console.log(typeof Number.parseInt(userId!));
    console.log(data);
  });

  return (
    <div>
      {data ? (
        <div className="text-center">
          <h1 className="pageHeader">{data.getUserById.username}'s Profile</h1>
          <p>Username: {data.getUserById.username}</p>
          {data.getUserById.posts.map((post: postInterface) => (
            <Post
              id={post.id}
              title={post.title}
              userId={post.userId}
              content={post.content}
            />
          ))}
        </div>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <p>Error</p>
      )}
    </div>
  );
};

export default UserProfile;
