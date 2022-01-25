
const getAppointmentsForDay = (state, day) => {
  const dayArray = state.days.filter((item) => item.name === day);
  if (dayArray.length === 0) {
    return [];
  }
  const arrayOfAppointmentsToFind = dayArray[0].appointments;
  const appointmentsArrayToRender = arrayOfAppointmentsToFind.map((apptId) => state.appointments[apptId]);
  return appointmentsArrayToRender;
};

const getInterview = (state, interview) => {

 if (!interview) {
   return null;
 } else
  return {interviewer: state.interviewers[interview.interviewer], student: interview.student
    };
};

export {getAppointmentsForDay, getInterview};