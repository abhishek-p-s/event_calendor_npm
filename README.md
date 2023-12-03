# React Event Calendor

Easily render a full-sized event calendar.

## setting up in you project

npm i event_calendor

import { CustomCalendor } from 'event_calendor/src';

<CustomCalendor/> this will diasplay the calendor 

if you need to show the events in this for a specific date you can pass one array as below

const sampleEvents = [
  {
    date: '2023-12-05',
    title: '',
    link: 'https://example.com/meeting',
  },
  {
    date: '2023-12-10',
    title: '',
    link: 'https://example.com/project-deadline',
  },
  {
    date: '2023-12-15',
    title: '',
    link: 'https://example.com/team-lunch',
  },
  {
    date: '2023-12-28',
    title: '',
    link: 'https://example.com/holiday-party',
  },
];

<CustomCalendor events={sampleEvents}/>

This is a project which is we are under developement anyone can cusomise accoriding to there usage