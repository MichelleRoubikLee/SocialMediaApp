import React from 'react';
 
export default class User extends React.Component {
 
  state = {
    user: [],
    location: []
  }
 
  componentDidMount () {
    const { userId } = this.props.match.params
 
    fetch(`http://localhost:5000/api/users/${userId}`)
      .then(response => response.json())
      .then((user) => {
        this.setState(() => ({
          user: user,
        }));
        console.log(user);
      })
  }
 
  render(){
    return (
      <div className="User">
 
      </div>
    );
  }
}