import React from 'react'
import './styles.scss';
import Show from "./Show";
import Header from "./Header";
import Empty from "./Empty";

const appointments = [
    {
        id: 1,
        time: "12pm",
    },
    {
        id: 2,
        time: "1pm",
        interview: {
            student: "Lydia Miller-Jones",
            interviewer: {
                id: 3,
                name: "Sylvia Palmer",
                avatar: "https://i.imgur.com/LpaY82x.png",
            }
        }
    },
    {
        id: 3,
        time: "2pm",
    },
    {
        id: 4,
        time: "3pm",
        interview: {
            student: "Archie Andrews",
            interviewer: {
                id: 4,
                name: "Cohana Roy",
                avatar: "https://i.imgur.com/FK8V841.jpg",
            }
        }
    },
    {
        id: 5,
        time: "4pm",
    }
];

const createAppointmentItem = appointments.map((item) => {
    return (
        <li className="appointment" key={item.id} time={item.time}>
            <Header time={item.time}/>
            {item.interview ?
                <Show student={item.interview.student} interviewer={item.interview.interviewer.name}/> : <Empty/>}
        </li>
    )
});

const Appointment = () => {
    return (
        <ul>{createAppointmentItem}</ul>
    );
};

export default Appointment;