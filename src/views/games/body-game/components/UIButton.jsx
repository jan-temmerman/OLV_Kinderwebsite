import React from 'react';

export default function UIButton(props) {
  const { action, text } = props;
  return (
    <button type="button" className="UIButton" onClick={action}>{text}</button>
  );
}
