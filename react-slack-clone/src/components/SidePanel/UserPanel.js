import React, {Component} from 'react'
import {Grid, Header, Icon, Dropdown, Image} from 'semantic-ui-react'
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

        const { user } = this.state

        const {primaryColor} = this.props
        
        return(
            <Grid style={{background: primaryColor}}>
                <Grid.Column>
                    <Grid.Row style={{padding: '1.2em', margin: 0}}>
                        <Header inverted floated="left" as="h2">
                            <Icon name="code" />
                            <Header.Content>
                                Dev Chat
                            </Header.Content>
                        </Header>
                        <Header style={{padding: '0.25em'}} as="h4" inverted>
                            <Dropdown 
                                trigger={
                                    <span>
                                        <Image src={user.photoURL} spaced="right" avatar />
                                        {user.displayName}
                                    </span>
                                } 
                                options={this.dropdownOptions()} />
                        </Header>
                    </Grid.Row>


                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user.currentUser
})

export default connect(mapStateToProps)(UserPanel)