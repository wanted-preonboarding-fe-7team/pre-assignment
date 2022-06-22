const Logo = ({ size = 3 }) => {
  return (
    <span
      style={{
        fontWeight: 700,
        fontSize: `${size}rem`,
        fontStyle: 'italic',
      }}
    >
      Bstagram
    </span>
  );
};

export default Logo;
