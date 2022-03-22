import React from 'react';

export default function Dice(props) {
  const styles = {
    backgroundColor: props.active ? '#59E391' : '#FFFFFF',
  };
  return (
    <div className='die-face' style={styles} onClick={props.holdDice}>
      <h2 className='die-num'>{props.value}</h2>
    </div>
  );
}
