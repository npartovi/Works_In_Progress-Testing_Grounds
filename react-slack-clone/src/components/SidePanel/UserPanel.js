import React, {Component} from 'react'
import {Grid, Header, Icon, Dropdown} from 'semantic-ui-react'
import firebase from '../../firebase'
import {connect} from 'react-redux'

class UserPanel extends Component{

    constructor(props){
        super(props)

        this.state = {
            user: this.props.currentUser
        }
    }

    dropdownOptions = () => [

        {
            key: "user",
            text: <span>Sign in as <strong>{this.state.user.displayName}</strong></span>,
            disabled: true
        },
        {
            key: "avatar",
            text: <span>Change Avatar</span>
        },
        {
            key: "signout",
            text: <span onClick={this.handleSignout}>Sign Out</span>
        }
    ]

    handleSignout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => console.log("signed Out"))
    }

    render(){


        return(
            <Grid style={{background: '#4c3c4c'}}>
                <Grid.Column>
                    <Grid.Row style={{padding: '1.2em', margin: 0}}>
                        <Header inverted floated="left" as="h2">
                            <Icon name="code" />
                            <Header.Content>
                                Dev Chat
                            </Header.Content>
                        </Header>
                    </Grid.Row>


                    <Header style={{padding: '0.25em'}} as="h4" inverted>
                        <Dropdown trigger={<span>{this.state.user.displayName}</span>} options={this.dropdownOptions()} />
                    </Header>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user.currentUser
})

export default connect(mapStateToProps)(UserPanel)