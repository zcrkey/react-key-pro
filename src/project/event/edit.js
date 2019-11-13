import React from 'react';
import EventForm from './from';

export default class EventEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        EventEdit
        <EventForm></EventForm>
      </div>
    )
  }
}