import React from 'react';
import {Link} from "react-router-dom"
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  Avatar,
}
from '@material-ui/core';
import './userList.css';
import axios from 'axios';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      infor:[],
    }
    axios.get('http://localhost:3000/user/list')
    .then(response=>response.data)
    .then(list=>this.setState({infor:list}))
  }

  

  render() {
    console.log("userList orloo");
    
    var users= window.cs142models.userListModel();
    console.log(this.state.infor);
    
    return (
      <div><tr><td><Avatar  src="user.png"></Avatar></td><td><p className="xwxw"> User's name</p></td></tr>
        
        {
          this.state.infor.map(pa=>
          <div key={pa}>
            <List className="xaxa">
            <ListItem  button exact="true" component={Link} to={"/users/" + pa._id}>

            <ListItemText primary={pa.first_name + " "+ pa.last_name} />
          
            
          </ListItem>
          </List>
        
          
          </div>
          
         
          )
        }
      </div>
    );
  }
}

export default UserList;