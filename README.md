!["Scheduler icon](https://raw.githubusercontent.com/julia-gatina/scheduler/master/public/images/favicon.ico) ## Interview Scheduler

React application that allows users to book, edit and cancel interviews. 

When users open the app they can see right away how many available spots each day has on the left nav bar. 
If there are no more spots, the day color is dimmed, like Friday on the image below. Selected day is white, and when you hover over a day, it is red.

!["Scheduler appointment initial view"](https://github.com/julia-gatina/scheduler/blob/master/docs/full_app_view.png?raw=true)

Upon booking an interview users can see icons/avatars of all interviewers available for the selected day.
So users simply need to type their name at the top of the form, select an interviewer at the bottom, and click "Save" button. Done! 

!["Scheduler create or edit an appointment "](https://github.com/julia-gatina/scheduler/blob/master/docs/create_appointment_form.png?raw=true)

Once an interview is booked it will appear in the day schedule as shown below.
If users would like to change selected interviewer or maybe need to fix a typo in their name, there's an Edit icon they click. 

!["Scheduler booked interview"](https://github.com/julia-gatina/scheduler/blob/master/docs/edit_delete_appointment_icons.png?raw=true)

Cancelling an interview can also be done with a few clicks => Delete icon on a booked interview => and then Confirm, 
so that no interviews get deleted by mistake. 

!["Scheduler confirmation to delete an appointment"](https://github.com/julia-gatina/scheduler/blob/master/docs/delete_appt_confirmation.png?raw=true)


## Setup
Install dependencies with the following command:

```sh
npm install
```

## Running Webpack Development Server
If you want to run your entire application in development mode

```sh
npm start
```
## Running Storybook Visual Testbed
If you want to manually test the components in isolation:

```sh
npm run storybook
```

## Running Jest Test Framework
If you want to run unit or integration tests from the command line:

```sh
npm test
```

## Running Cypress E2E testing
If you want to run automated end-to-end tests in the browser:

```sh
npm run cypress
```