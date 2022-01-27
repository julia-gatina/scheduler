import React, {useState} from 'react'
import './styles.scss';
import Show from "./Show";
import Header from "./Header";
import Empty from "./Empty";
import useVisualMode from "../../hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Error from "./Error";
import Confirm from "./Confirm";

const Appointment = (props) => {
  const [errorMsg, setErrorMsg] = useState('');

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const ERROR = "ERROR";
  const DELETING = "DELETING";
  const CONFIRM_DELETING = "CONFIRM_DELETING";

  const {mode, transition, back} = useVisualMode(props.interview ? SHOW : EMPTY);

  function onSave(student, interviewer) {
    const interview = {
      student: student,
      interviewer: interviewer
    };
    transition(SAVING);

    const onBookInterviewSuccess = () => transition(SHOW);
    const onBookInterviewError = (error) => {
      setErrorMsg(error.message || 'Error booking an Appointment.');
      transition(ERROR);
    }
    props.bookInterview(props.id, interview, onBookInterviewSuccess, onBookInterviewError)
  }

  function onDelete() {
    transition(DELETING);

    const onCancelInterviewSuccess = () => transition(EMPTY);
    const onCancelInterviewError = (error) => {
      setErrorMsg(error.message || 'Error canceling an Appointment.');
      transition(ERROR);
    }
    props.cancelInterview(props.id, onCancelInterviewSuccess, onCancelInterviewError);
  }

  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)}/>}
      {mode === ERROR && <Error message={errorMsg}/>}
      {mode === CREATE && (<Form
        interviewer={props.interviewer}
        interviewers={props.interviewers}
        student={props.student}
        onCancel={back}
        onSave={onSave}/>)}
      {mode === SHOW && (<Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        onDelete={() => transition(CONFIRM_DELETING)}
      />)}
      {mode === SAVING && (<Status message={"Saving..."}/>)}
      {mode === DELETING && (<Status message={"Deleting..."}/>)}
      {mode === CONFIRM_DELETING && (<Confirm
        onCancel={back}
        onConfirm={onDelete}
      />)}
    </article>
  );
};

export default Appointment;