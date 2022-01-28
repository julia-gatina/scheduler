import React, {useState} from "react"
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

const Form = (props) => {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  // to cancel entered student name and/or selected interviewer
  const cancel = () => {
    reset();
    props.onCancel();
  };

  const handleSaveClick = () => {
    props.onSave(student, interviewer);
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={event => {
              setStudent(event.target.value);
            }}
            data-testid="student-name-input"
          />
          <line className="form-alert-student">
            Please enter Student name
          </line>
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          onChange={setInterviewer}
          selected={interviewer}
        />
        <line className="form-alert-interviewer">
          Please select Interviewer
        </line>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={handleSaveClick}>Save</Button>
        </section>
      </section>
    </main>
  );
};

export default Form;