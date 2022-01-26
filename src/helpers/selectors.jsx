
const getAppointmentsForDay = (state, day) => {
  const dayArray = state.days.filter((item) => item.name === day);
  if (dayArray.length === 0) {
    return [];
  }
  const arrayOfAppointmentsToFind = dayArray[0].appointments;
  const appointmentsArrayToRender = arrayOfAppointmentsToFind.map((appointmentId) => state.appointments[appointmentId]);
  return appointmentsArrayToRender;
};

const getInterviewersForDay = (state, day) => {
  const dayArray = state.days.filter((item) => item.name === day);
  if (dayArray.length === 0) {
    return [];
  }
  const arrayOfAppointmentsToFind = dayArray[0].interviewers;
  console.log("Day array . interviewers ->>>", dayArray[0].interviewers);
  const interviewersArrayToRender = arrayOfAppointmentsToFind.map((interviewerId) => state.interviewers[interviewerId]
  );
  return interviewersArrayToRender;
};

const getInterview = (state, interview) => {

 if (!interview) {
   return null;
 } else
  return {interviewer: state.interviewers[interview.interviewer], student: interview.student
    };
};

export {getAppointmentsForDay, getInterview, getInterviewersForDay};