import React from 'react';
import BodyPart from './BodyPart';

export default function Body(props) {
  const { pickOrgan } = props;
  return (
    <div className="body__body">
      {/* Insert Organs here */}
      <BodyPart target={pickOrgan} part="LEVER" specs={{ width: '14%', left: '37%', top: '37%' }} />

      <BodyPart target={pickOrgan} part="DIKKE DARM" specs={{ width: '22%', left: '39%', top: '42%' }} />

      <BodyPart target={pickOrgan} part="DUNNE DARM" specs={{ width: '15%', left: '42.5%', top: '42%' }} />

      <BodyPart target={pickOrgan} part="MAAG" specs={{ width: '20%', left: '42%', top: '29.5%' }} />

      <BodyPart target={pickOrgan} part="BLAAS" specs={{ width: '8%', left: '46%', top: '53%' }} />

      <BodyPart target={pickOrgan} part="LONGEN" specs={{ width: '32%', left: '34%', top: '20%' }} />

      <BodyPart target={pickOrgan} part="HART" specs={{ width: '10%', left: '55%', top: '28%' }} />

      <BodyPart target={pickOrgan} part="NIEREN" specs={{ width: '25%', left: '37.5%', top: '45%' }} />
      {/* Body comes here */}
      <img src="/games/lichaam/LICHAAM.svg" alt="Lichaam" />
    </div>
  );
}
