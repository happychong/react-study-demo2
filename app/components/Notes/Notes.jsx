import React, { Component } from 'react';

class Notes extends Component {
  render(){
    return (
      <div>
        <p> 评论 </p>
        <p> Notes: {this.props.notes} </p>
      </div>
    )
  }
}
export default Notes;
