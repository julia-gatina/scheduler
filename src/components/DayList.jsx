import React from 'react';
import DayListItem from './DayListItem';

/**
 * renders list of all available days
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const DayList = (props) => {
  const renderDayListItem = props.days.map((singleDay) => {
    return (
      <DayListItem
        key={singleDay.id}
        name={singleDay.name}
        spots={singleDay.spots}
        selected={singleDay.name === props.value}
        setDay={props.onChange}
      />
    );
  });
  return <ul> {renderDayListItem} </ul>;
}

export default DayList;
