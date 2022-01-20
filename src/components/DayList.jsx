import React from 'react';
import DayListItem from './DayListItem';

const DayList = (props) => {
  const { days, day, setDay } = props;
  const dynamicDayListItem = days.map((singleDay) => {
    return (
      <DayListItem
        key={singleDay.id}
        selected={singleDay.name === day}
        {...singleDay}
        setDay={setDay}
      />
    );
  });

  return <ul> {dynamicDayListItem} </ul>;
}

export default DayList;
