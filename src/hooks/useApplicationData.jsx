import React, {useEffect, useState} from "react";
import axios from "axios";

const useApplicationData = () => {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: [],
    interviewers: {}
  });

  //fetch days, appointments, and interviewers data
  useEffect(() => {
    Promise.all([
      axios.get("api/days"),
      axios.get("api/appointments"),
      axios.get("/api/interviewers")
    ])
      .then((all) => {
        const [days, appointments, interviewers] = all;
        setState((prev) => ({
          ...prev,
          days: days.data,
          appointments: appointments.data,
          interviewers: interviewers.data,
        }));
      })
  }, []);

  const setDay = (day) => {
    setState({...state, day})
  };

  const cancelInterview = (appointmentId, onCancelInterviewSuccess, onCancelInterviewError) => {
    axios.delete(`/api/appointments/${appointmentId}`)
      .then((response) => {
        updateAppointmentsListOnUi(appointmentId, null);
        onCancelInterviewSuccess();
      })
      .catch(((error) => {
        console.error(error);
        onCancelInterviewError(error);
      }));
  }

  const updateAppointmentsListOnUi = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: {...interview}
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    setState({
      ...state,
      appointments
    });
  }

  const bookInterview = (id, interview, onBookInterviewSuccess, onBookInterviewError) => {
    // 1. make put request
    axios.put(`/api/appointments/${id}`, {interview: interview})
      .then((response) => {
        // 2. when successfully persisted update appointments list on UI
        updateAppointmentsListOnUi(id, interview);
        onBookInterviewSuccess();
      })
      .catch(((error) => {
        console.error(error);
        onBookInterviewError(error);
      }))
  };

  return {state, setDay, bookInterview, cancelInterview};
};

export default useApplicationData;