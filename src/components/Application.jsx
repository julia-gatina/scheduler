import React, {useEffect, useState} from "react";
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "./Appointment";
import getAppointmentsForDay from "helpers/selectors";
import axios from "axios";

const Application = (props) => {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: []
  });

  const setDay = (day) => {
    setState({...state, day})
  };

  // Create appointments list to render
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const appointmentList = dailyAppointments.map((appointments) => {
    return <Appointment
      key={appointments.id}
      {...appointments}
      interviewers={state.interviewers}
    />;
  });

  useEffect(() => {
    Promise.all([
      axios.get("api/days"),
      axios.get("api/appointments"),
      axios.get("/api/interviewers")
    ])
      .then((all)=> {
      console.log('response', all)
      const [days, appointments, interviewers] = all;
        setState((prev) => ({
          ...prev,
          days: days.data,
          appointments: appointments.data,
          interviewers: interviewers.data,
        }));
      })
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered"/>
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentList}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
};

export default Application;