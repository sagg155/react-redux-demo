import React, {useEffect} from 'react';
import {fetchUsersPost} from '../redux';
import {connect} from 'react-redux';

UserContainer.propTypes = {
    
};

function UserContainer({userData, fetchUsers}) {
    useEffect(() => fetchUsers(), [])
    console.log("data====>", userData, fetchUsers)
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
          <h2>User List</h2>
          <div>
           {
            //    userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
            userData && typeof userData.users === 'object' && Object.keys(userData.users).map(user => <p>{user}</p>)
           }
          </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsersPost())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);