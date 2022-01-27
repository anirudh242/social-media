import { useParams } from 'react-router-dom';

const PostPage = () => {
  const postId = useParams<{ postId: string }>().postId;

  return (
    <div>
      <h1>{postId}</h1>
    </div>
  );
};

export default PostPage;
