import React from 'react';
import { removeSpaces } from '../../helpers';

export default function Label(props) {
  const { target, label, labelStyle } = props;
  return (
    <button id={`label__${removeSpaces(label, '_')}`} className="body__label" type="button" style={labelStyle} onClick={target}>{label}</button>
  );
}
