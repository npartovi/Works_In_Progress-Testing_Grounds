import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { deleteEducation } from '../../actions/profileActions'
import Moment from 'react-moment'


class Education extends Component {

    onDeleteClick(eduId){
        this.props.deleteEducation(eduId)
    }

    render(){
        const education = this.props.education.map(edu => (
            <tr key={edu._id}>
                <td>{edu.school}</td>
                <td>{edu.degree}</td>
                <td><Moment format="YYYY/MM/DD">{edu.from}</Moment> - 
                {edu.data ? <Moment format="YYYY/MM/DD"></Moment> : "Present" }</td>
                <td><button onClick={this.onDeleteClick.bind(this, edu._id)} className="btn btn-danger">Delete</button></td>
            </tr>
        ))


        return(
            <div>
                <h4 className="mb-4">Education Credentials</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>School</th>
                            <th>Degree</th>
                            <th>Years</th>
                        </tr>
                    </thead>
                    <tbody>
                        {education}
                    </tbody>
                </table>
            </div>
        )
    }
}

Education.propTypes = {
    deleteEducation: PropTypes.func.isRequired
}


export default connect(null, {deleteEducation})(Education)