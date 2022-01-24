import React from 'react'
import './styles.scss';
import Show from "./Show";
import Header from "./Header";
import Empty from "./Empty";

const Appointment = (props) => {
  return (
    <article className="appointment">
        <Header time={props.time}/>
        {props.interview ?
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer.name}
            // onEdit={onEdit}
            // onDelete={onDelete}
          />
          : <Empty/>}
    </article>
  );
};

export default Appointment;