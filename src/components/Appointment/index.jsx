import React from 'react'
import './styles.scss';
import Show from "./Show";
import Header from "./Header";
import Empty from "./Empty";

const Appointment = (props) => {
    const {time, id, interview, interviewer } = props;
    return (
        <article className="appointment" id={id} time={time}>
            <Header time={time}/>
            {interview ?
                <Show student={interview.student} interviewer={interview.interviewer.name}/> : <Empty/>}
        </article>
    );
};

export default Appointment;