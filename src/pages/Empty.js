import React from 'react';
import { Link } from 'react-router-dom';

function Empty() {
  return (
    <>
      <h2>해당 페이지를 찾을수 없습니다</h2>
      <Link to="/">홈으로</Link>
    </>
  );
}
export default Empty;
