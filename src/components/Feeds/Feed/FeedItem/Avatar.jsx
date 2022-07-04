import Div from './Avatar.styled';

const Avatar = ({
  userId,
  imageUrl = 'https://via.placeholder.com/32.jpg',
  size = { width: '32px', height: '32px' },
}) => {
  return (
    <Div size={size}>
      <img
        src={imageUrl}
        width="100%"
        height="100%"
        alt={`${userId}의 아바타 `}
      />
    </Div>
  );
};

export default Avatar;
