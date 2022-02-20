import React from "react";

export default class HiddenProfileName extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            profileHidden: true
        }
    }

    toggleProfileName = () => {
        this.setState({
            profileHidden: !this.state.profileHidden
        })
    };

    render() {
        const profileNameClass = this.state.profileHidden ? 'hide' : '';
        const buttonLabel = this.state.profileHidden ? 'show profileName' : 'hide profileName'
        return (
            <span>
        <div className={profileNameClass} />
        <button onClick={this.toggleProfileName} id={this.props.item.uniqueID}>
        </button>
      </span>
        )
    }
}