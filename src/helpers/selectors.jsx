import React from "react";

export function getAppointmentsForDay(state, day) {
  const dayArray = state.days.filter((item) => item.name === day);
  if (dayArray.length === 0) {
    return [];
  }
  const arrayOfAppointmentsToFind = dayArray[0].appointments;
  const appointmentsArrayToRender = arrayOfAppointmentsToFind.map((apptId) => state.appointments[apptId]);
  return appointmentsArrayToRender;
};