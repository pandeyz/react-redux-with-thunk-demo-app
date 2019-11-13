import React from 'react';

import { connect } from 'react-redux';
import { addUser } from '../actions';

class AddUser extends React.Component {
    constructor() {
        super();

        // To focus the fullname
        this.myRef = React.createRef();

        this.state = {
            fullname: '',
            phone: '',
            department: ''
        }
    }

    // To handle form submit
    handleSubmit = (event) => {
        event.preventDefault();

        // Call the reducer
        if( this.state.fullname === '' || this.state.phone === '' || this.state.department === '' )
        {
            alert('All fields are manadatory');
            return false;
        }

        this.props.addUser(this.state);

        // Reset the values
        this.setState({ fullname: '', phone: '', department: '' });

        // To focus the fullname
        this.myRef.current.focus();
    }

    // To handle user input and set the value in local state
    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="text-center"><h4>Add User</h4></div>
                <form className="form-inline" autoComplete="off" onSubmit={ this.handleSubmit } autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name:</label>
                        <input type="text" className="form-control" name="fullname" onChange={ this.handleInput } value={ this.state.fullname } ref={this.myRef} />
                    </div>
                    <div className="form-group" style={{ marginLeft: 100 }}>
                        <label htmlFor="fullname">Phone No:</label>
                        <input type="text" className="form-control" name="phone" onChange={ this.handleInput } value={ this.state.phone } />
                    </div>
                    <div className="form-group" style={{ marginLeft: 100 }}>
                        <label htmlFor="department">Department:</label>
                        <select className="form-control" name="department" onChange={ this.handleInput } value={ this.state.department } >
                            <option value="">Select</option>
                            <option value="IT">IT</option>
                            <option value="QA">QA</option>
                            <option value="Big Data">Big Data</option>
                        </select>
                    </div>
                    <button style={{ marginLeft: 100 }} type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        )
    }
}

// export default AddUser;

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, { addUser })(AddUser);