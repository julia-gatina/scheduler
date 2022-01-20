import React from 'react';
import classNames from 'classnames';
import 'components/DayListItem.scss';

const formatSpots = (spots) => {
  let spotsString = '';

  if (spots === 0) {
    spotsString = 'no spots';
  } else if (spots === 1) {
    spotsString = '1 spot';
  } else {
    spotsString = `${spots} spots`;
  }
  return spotsString;
};

export default function DayListItem(props) {
  const dayClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.full,
  });

  const handleClick = () => {
    props.setDay(props.name)
  };

  return (
    <li className={dayClass}>
      <h2 className='day' onClick={handleClick}>
        {props.name}
      </h2>
      <h3 className='text--light'>{formatSpots(props.spots)} remaining</h3>
    </li>
  );
};
