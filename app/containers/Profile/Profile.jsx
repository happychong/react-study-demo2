import React, { Component } from 'react';
import { UserProfile, UserRepos, Notes } from '../../components';

class Profile extends Component {
    state = {
        notes: ['1', '2', '3'],
        bio: {
            name: 'songxiaodan'
        },
        repos: ['a', 'b', 'c']
    }
    render() {
        console.log(this.props);
        return (
            <div className="row">
                <div className="col-md-4">
                    基本信息
                    <UserProfile
                        username={this.props.params.username}
                        bio={this.state.bio}/>
                </div>
                <div className="col-md-4">
                    代码仓库
                    <UserRepos repos={this.state.repos}/>
                </div>
                <div className="col-md-4">
                    笔记
                    <Notes notes={this.state.notes}/>
                </div>
            </div>
        )
    }
}

export default Profile;
