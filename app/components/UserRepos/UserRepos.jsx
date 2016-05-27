import React, { Component } from 'react';

class UserRepos extends Component {
  render(){
    return (
        <div>
          <p> GIT仓库 </p>
          <p> REPOS: {this.props.repos}</p>
        </div>
    )
  }
}
export default UserRepos;
