import React from 'react';
import DayListItem from './DayListItem';

const DayList = (props) => {
  const { days, day, setDay } = props;
  const dynamicDayListItem = days.map((singleDay) => {
    return (
      <DayListItem
        key={singleDay.id}
        name={singleDay.name}
        spots={singleDay.spots}
        selected={singleDay.name === day}
        setDay={setDay(singleDay.id)}
      />
    );
  });
  return <ul> {dynamicDayListItem} </ul>;
}

export default DayList;
