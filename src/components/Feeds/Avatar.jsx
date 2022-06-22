const Avatar = ({
  userEmail,
  imageUrl = 'https://via.placeholder.com/32.jpg',
  size = { width: '32px', height: '32px' },
}) => {
  return (
    <div
      style={{
        width: size.width,
        height: size.height,
        borderRadius: '50%',
        overflow: 'hidden',
      }}
    >
      <img
        src={imageUrl}
        width="100%"
        height="100%"
        alt={`${userEmail}의 아바타 `}
      />
    </div>
  );
};

export default Avatar;
