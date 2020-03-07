import React from 'react';

export default function Lives(props) {
  const { lives } = props;
  const hearts = [];

  for (let i = 0; i <= lives; i += 1) {
    hearts.push(<span key={i}>*</span>);
  }
  return (
    <p>{hearts}</p>
  );
}
