import React, { Component } from 'react';
import { SearchGithub } from '../../components';

// class App extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>content from App Component</h1>
//                 {this.props.children}
//             </div>
//         )
//     }
// }

const App = ({children, history}) => {
    return (
        <div className="main-container">
            <nav className="main-container">
                <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                    <SearchGithub history={history}/>
                </div>
            </nav>
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default App;
