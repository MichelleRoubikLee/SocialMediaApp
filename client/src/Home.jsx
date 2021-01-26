import React from 'react';
// import authenticationService from './_services/authentication.service';
// import { userService  } from './_services/user.service';

class Home extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         currentUser: authenticationService.currentUserValue,
    //         users: null
    //     };
    // }

    // componentDidMount() {
    //     userService.getAll().then(users => this.setState({ users }));
    // }

    render() {
        // const { currentUser, users } = this.state;
        return (
            <div>
                <h1>Hi!</h1>
                <p>You're logged in with React & JWT!!</p>
                <h3>Users from secure api end point:</h3>
                {/* {users &&
                    <ul>
                        {users.map(user =>
                            <li key={user.id}>{currentUser.userName} </li>
                        )}
                    </ul>
                } */}
            </div>
        );
    }
}

export default  Home ;