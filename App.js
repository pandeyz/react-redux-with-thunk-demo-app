import React from 'react';

import AddUser from './components/AddUser';
import ListUser from './components/ListUsers';

class App extends React.Component {
    render() {
        return (
            <div className="container" style={{ marginTop: 50 }}>
                <AddUser />
                <ListUser />
            </div>
        )
    }
}

export default App;
