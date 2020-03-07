import React from 'react';

export default function Score(props) {
  const { score } = props;
  return (
    <p className="score">
      Score:
      {' '}
      {score}
    </p>
  );
}
