import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import GNB from './GNB';
import FeedPiece from './FeedPiece';

export default function Feed() {
  const [picture, setPicture] = useState([
    {
      id: '',
      image: '',
    },
  ]);

  useEffect(() => {
    fetch('/data/mockdata.json').then((res) =>
      res.json().then((data) => {
        setPicture(data);
      })
    );
  }, []);

  return (
    <>
      <GNB />
      <Body>
        {picture.map((el) => {
          return <FeedPiece key={el.id} feed={el} />;
        })}
      </Body>
    </>
  );
}

const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: fit-content;
  overflow: auto;
`;
