import React from 'react';

import { connect } from 'react-redux';
import { deleteUser, fetchUsers } from '../actions';

class ListUser extends React.Component {
    
    // To delete user
    handleDelete = (id) => {
        // Call the action
        this.props.deleteUser(id);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        var tableRow = <tr><td colSpan="5" className="text-center">No record found</td></tr>;
        if( this.props.users.length > 0 )
        {
            for(let i=0; i<this.props.users.length; i++)
            {
                tableRow = this.props.users[i].map((user, index) => (<tr key={ index }>
                    <td>{ index + 1 }</td>
                    <td>{ user.fullname }</td>
                    <td>{ user.phone }</td>
                    <td>{ user.department }</td>
                    <td><span className="glyphicon glyphicon-edit"></span> | <span onClick={ () => this.handleDelete(index) } className="glyphicon glyphicon-trash"></span></td>
                </tr>))
            }
        }
        return (
            <div>
                <hr />
                <div className="text-center"><h4>List Users</h4></div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Department</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tableRow }
                    </tbody>
                </table>
            </div>
        )
    }
}

// export default ListUser;

function mapStateToProps(state) {
    return {
        users: state.UserReducer
    }
}

export default connect(mapStateToProps, { deleteUser, fetchUsers })(ListUser);