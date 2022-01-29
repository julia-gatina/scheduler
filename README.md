# Interview Scheduler
React application that allows users to book, edit and cancel interviews. 

When users open the app the can see right away how many available spots each day has on the left nav bar.
If there are no more spots, the day color is dimmed. Selected day is white, and when you hover over a day, it is red.

!["Scheduler appointment initial view"]()

Upon booking an interview users can see icons/avatars of all interviewers available for the selected day.
So users simply need to type their name at the top, click on interviewer's icon at the bottom, and click "Save" button. Done! 

!["Scheduler create or edit an appointment "]()

If users would like to change selected interviewer or maybe need to fix a typo in their name, there's an Edit icon they click. 

!["Scheduler Edit and Delete appointment options"]()

Cancelling an interview can be done with a few clicks: Delete icon on a booked interview and then confirmation, 
so that no interviews get deleted by mistake. 

!["Scheduler confirmation to delete an appointment"]()



## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
