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

/**
 * main Appointment component, combines all other components, switches between view modes
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Appointment = (props) => {
  const [errorMsg, setErrorMsg] = useState('');

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const EDIT = "EDIT";
  const ERROR = "ERROR";
  const DELETING = "DELETING";
  const CONFIRM_DELETE = "CONFIRM_DELETE";

  const {mode, transition, back} = useVisualMode(props.interview ? SHOW : EMPTY);

  /**
   * called when save button clicked on create/edit interview form
   * @param student
   * @param interviewer
   */
  function onSave(student, interviewer) {
    const interview = {
      student: student,
      interviewer: interviewer
    };

    transition(SAVING);

    /**
     * handle cases of successfully booked interview or error during booking
     */
    const onBookInterviewSuccess = () => transition(SHOW);
    const onBookInterviewError = (error) => {
      setErrorMsg(error.message || 'Error saving an Appointment.');
      transition(ERROR, true);
    }
    props.bookInterview(props.id, interview, onBookInterviewSuccess, onBookInterviewError)
  }

  /**
   * called when Delete icon clicked on a booked interview
   */
  function onDelete() {
    transition(DELETING);

    /**
     * handle cases of successfully canceled interview or error during cancelling
     */
    const onCancelInterviewSuccess = () => transition(EMPTY);
    const onCancelInterviewError = (error) => {
      setErrorMsg(error.message || 'Error canceling an Appointment.');
      transition(ERROR, true);
    }
    props.cancelInterview(props.id, onCancelInterviewSuccess, onCancelInterviewError);
  }

  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)}/>}
      {mode === ERROR &&
        (<Error
          message={errorMsg}
          onClose={back}
        />)}
      {(mode === CREATE || mode === EDIT) &&
        (<Form
          interviewer={props.interview && props.interview.interviewer && props.interview.interviewer.id}
          interviewers={props.interviewers}
          student={props.interview && props.interview.student}
          onCancel={back}
          onSave={onSave}/>)}
      {mode === SHOW &&
        (<Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM_DELETE)}
          onEdit={() => transition(EDIT)}
        />)}
      {mode === SAVING && (<Status message={"Saving..."}/>)}
      {mode === DELETING && (<Status message={"Deleting..."}/>)}
      {mode === CONFIRM_DELETE &&
        (<Confirm
          onCancel={back}
          onConfirm={onDelete}
        />)}
    </article>
  );
};

export default Appointment;