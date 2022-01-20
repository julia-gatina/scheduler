import React from 'react';
import DayListItem from './DayListItem';

const DayList = (props) => {
  const { days, day, setDay } = props;
  const newDayListItem = days.map((item) => {
    return <DayListItem key={item.id} selected={item.name === day} {...item} setDay={setDay} />;
  });

  return <ul> {newDayListItem} </ul>;
};

export default DayList;
