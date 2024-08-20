import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          userInfo: {
            name: "Dummy",
            location: "Default",
          },
        };
    }

    async componentDidMount() {
        const getUserInfo = await fetch("https://api.github.com/users/anshu51379");
        const json = await getUserInfo.json();
        this.setState({
            userInfo: json,
        })
        console.log(json);
    }

    componentDidUpdate() {
        console.log("updated")
    }

    render(){
        const { name, location, avatar_url } = this.state.userInfo;
        return (
          <div className="user-card">
            <img src={avatar_url}></img>
            <h3>Name: {name}</h3>
            <h4>Location: {location}</h4>
          </div>
        );
    }
}

export default UserClass;

