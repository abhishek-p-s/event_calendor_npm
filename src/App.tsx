import { Fragment } from 'react'
import './App.css'
import CustomCalendor from './CustomCalendor'

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


function App() {
  return (
    <Fragment>
      <CustomCalendor events={sampleEvents} />
    </Fragment>
  )
}

export default App
