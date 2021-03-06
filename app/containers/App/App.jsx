import React, { Component } from 'react';

// class App extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div>
//                 <h2> content from App Component </h2>
//                 {this.props.children}
//             </div>
//         )
//     }
// }

import { SearchGithub } from '../../components';

const App = ({children, history}) => {
    return (
        <div className="main-container">
          <nav className="navbar navbar-default" role="navigation">
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
