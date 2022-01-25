
export default function getAppointmentsForDay(state, day) {
  const dayArray = state.days.filter((item) => item.name === day);
  if (dayArray.length === 0) {
    return [];
  }
  const arrayOfAppointmentsToFind = dayArray[0].appointments;
  const appointmentsArrayToRender = arrayOfAppointmentsToFind.map((apptId) => state.appointments[apptId]);
  return appointmentsArrayToRender;
};

export function getInterview (state, interview) {
  const interviewArray =[]
console.log("this is state ->> ", state)
  return {  
    "student": "Lydia Miller-Jones",
    "interviewer": {  
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    }
  }};