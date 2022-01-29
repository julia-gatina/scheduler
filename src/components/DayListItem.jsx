import React from 'react';
import classNames from 'classnames';
import 'components/DayListItem.scss';

/**
 * creates an individual day to render
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const DayListItem = (props) => {
  const dayClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.full || props.spots === 0,
  });

  const renderSpotsMessage = (number) => {
    let spotsString = `${number} spots`;

    if (number === 1) {
      spotsString = '1 spot';
    }
    if (number === 0) {
      spotsString = 'no spots';
    }
    return spotsString;
  };

  return (
    <li className={dayClass} data-testid="day" onClick={() => props.setDay(props.name)} selected={props.selected}>
      <h2 className="text--regular">
        {props.name}
      </h2>
      <h3 className='text--light'>{renderSpotsMessage(props.spots)} remaining</h3>
    </li>
  );
};

export default DayListItem;