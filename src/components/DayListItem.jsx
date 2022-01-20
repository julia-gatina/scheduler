import React from 'react';
import classNames from 'classnames';
import 'components/DayListItem.scss';

export default function DayListItem(props) {
  const dayClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.full,
  });
  return (
    <li className={dayClass}>
      <h2 className='day' onClick={props.setDay}>
        {props.name}
      </h2>
      <h3 className='text--light'>{props.spots} spots remaining</h3>
    </li>
  );
}
