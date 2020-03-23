/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { removeSpaces } from '../../helpers';

export default function BodyPart(props) {
  const { part, specs, target: clickFunction } = props;


  const handleClick = () => {
    clickFunction(part);
  };

  return (
    <img id={`organ__${removeSpaces(part, '_')}`} src={`/games/lichaam/${part}.svg`} onClick={handleClick} alt={part} className="body__part" style={{ position: 'absolute', ...specs }} />
  );
}
