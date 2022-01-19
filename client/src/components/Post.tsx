import { postInterface } from '../interface';

const Post: React.FC<{
  id: number | null;
  title: string | null;
  userId: number | null;
}> = ({ id, title, userId }) => {
  return (
    <div>
      {id}
      {title}
      {userId}
    </div>
  );
};

export default Post;
