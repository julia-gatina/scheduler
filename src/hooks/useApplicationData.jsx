import React, {useEffect, useState} from "react";
import axios from "axios";

/**
 * responsible for setting app state and fetching data
 * @returns {{bookInterview: bookInterview, setDay: setDay, state: {appointments: *[], interviewers: {}, days: *[], day: string}, cancelInterview: cancelInterview}}
 */
const useApplicationData = () => {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: [],
    interviewers: {}
  });

  /**
   * api request to GET days, appointments, and interviewers data
   */
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

  /**
   * sets current day
   * @param day
   */
  const setDay = (day) => {
    setState({...state, day})
  };

  /**
   * helper to calculate available spots for current day
   * @param currentDay
   * @param allAppointments
   * @returns {number} how many free spots current day has
   */
  const countDaySpots = (currentDay, allAppointments) => {
    return currentDay.appointments
      .map(apptId => allAppointments[apptId]) // appointment objects
      .filter(appt => !appt.interview) // appointment with interview === null
      .length
  };

  /**
   * updates array of all days with spots available for current day
   * @param state
   * @param appointments
   * @returns {updated days array}
   */
  const getSpotsRemaining = (state, appointments) => {
    const currentDayName = state.day;
    const currentDay = state.days.find(day => day.name === currentDayName);
    const spots = countDaySpots(currentDay, appointments)
    const newCurrentDay = {...currentDay, spots};
    const newDaysArray = state.days.map(day => day.name === currentDayName ? newCurrentDay : day)

    return newDaysArray;
  };

  /**
   * called when an interview is booked, PUT api request
   * @param id
   * @param interview
   * @param onBookInterviewSuccess
   * @param onBookInterviewError
   */
  const bookInterview = (id, interview, onBookInterviewSuccess, onBookInterviewError) => {
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

  /**
   * called when an interview is cancelled, DELETE api request
   * @param appointmentId
   * @param onCancelInterviewSuccess function
   * @param onCancelInterviewError function
   */
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

  /**
   * updates UI with the new state when an interview is booked or cancelled
   * @param id
   * @param interview
   */
  const updateAppointmentsListOnUi = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: interview ? {...interview} : null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    setState({
      ...state,
      appointments,
      days: getSpotsRemaining(state, appointments)

    });
  };
  return {state, setDay, bookInterview, cancelInterview};
};

export default useApplicationData;