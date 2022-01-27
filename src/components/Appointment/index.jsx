import React from 'react'
import './styles.scss';
import Show from "./Show";
import Header from "./Header";
import Empty from "./Empty";
import useVisualMode from "../../hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";

const Appointment = (props) => {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";

  const {mode, transition, back} = useVisualMode(props.interview ? SHOW : EMPTY);

  function onSave(student, interviewer) {
    const interview = {
      student: student,
      interviewer: interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)

  }

  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)}/>}
      {mode === CREATE && (<Form
        interviewer={props.interviewer}
        interviewers={props.interviewers}
        student={props.student}
        onCancel={back}
        onSave={onSave}/>)}
      {mode === SHOW && (<Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
      />)}
      {mode === SAVING && (<Status message={"Saving"}/>)}
    </article>
  );
};

export default Appointment;