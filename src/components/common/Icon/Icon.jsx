import { ReactComponent as Add } from 'assets/add.svg';
import { ReactComponent as Bookmark } from 'assets/bookmark.svg';
import { ReactComponent as Comment } from 'assets/comment.svg';
import { ReactComponent as Compass } from 'assets/compass.svg';
import { ReactComponent as Heart } from 'assets/heart.svg';
import { ReactComponent as Home } from 'assets/home.svg';
import { ReactComponent as Logout } from 'assets/logout.svg';
import { ReactComponent as Message } from 'assets/message.svg';
import { ReactComponent as Smile } from 'assets/smile.svg';
import { ReactComponent as ThreeDots } from 'assets/three-dots.svg';
import theme from 'styles/theme';

const iconComponents = {
  add: Add,
  compass: Compass,
  heart: Heart,
  home: Home,
  logout: Logout,
  message: Message,
  dots: ThreeDots,
  comment: Comment,
  bookmark: Bookmark,
  smile: Smile,
};
const Icon = ({
  icon,
  width = '22px',
  height = '22px',
  fill = theme.color.black,
}) => {
  const SelectedIcon = iconComponents[icon];

  if (!SelectedIcon) {
    throw new Error(`${icon} 컴포넌트를 찾을 수 없습니다.`);
  }

  return <SelectedIcon width={width} height={height} fill={fill} />;
};

export default Icon;
