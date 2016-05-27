import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    基本信息
                    <UserProfile />
                </div>
                <div className="col-md-4">
                    代码仓库
                    <UserRepos />
                </div>
                <div className="col-md-4">
                    笔记
                    <Notes />
                </div>
            </div>
        )
    }
}

export default Profile;
