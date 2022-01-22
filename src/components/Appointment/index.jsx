import React from 'react'
import './styles.scss';
import Show from "./Show";
import Header from "./Header";
import Empty from "./Empty";



const createAppointmentItems = (appointments) => {
    const createdAppointmentsItems = appointments.map((item) => {
        return (
            <li className="appointment" key={item.id}>
                <Header time={item.time}/>
                {item.interview ?
                    <Show student={item.interview.student} interviewer={item.interview.interviewer.name}/> : <Empty/>}
            </li>
        )
    });
    return createdAppointmentsItems;
}


const Appointment = (props) => {
    return (
        <article>
            <ul>
                {createAppointmentItems(props.appointments)}
                <li key={"last"}>
                    <Header time={"5pm"}/>
                </li>
            </ul>
        </article>
    );
};

export default Appointment;