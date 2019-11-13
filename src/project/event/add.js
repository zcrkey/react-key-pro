import React from 'react';
import EventForm from './from';

export default class EventAdd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        EventAdd
        <EventForm></EventForm>
      </div>
    )
  }
}