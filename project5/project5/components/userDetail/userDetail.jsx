import React from 'react';
import { Link } from "react-router-dom";
import {
  Typography,Avatar,
} from '@material-ui/core';
import './userDetail.css';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      listt:[],
    }

  }
  // outOfBandJSX(){
  //   var listname = this.state.listt.map(person=>
  //     <Typography key={person._id}>
  //     <p><td>FirstName:</td>{person.first_name}</tr>
  //     <p><td>LastName:</td>{person.last_name}</tr>
  //     <p><td>ID:</td>{person._id}</tr>
  //     <p><td>Location:</td>{person.location}</tr>
  //     <p><td>Description:</td>{person.description}</tr>
  //     <p><td>Ocupation:</td>{person.occupation}</tr>
  //    </Typography> 
  //   )};
  bb(){
  Axios.get('http://localhost:3000/user/'+this.props.match.params.userId)
  .then(response =>response.data)
  .then(da =>this.setState({listt:da}));
  }    
  render() {
    this.bb(); 
        var per = this.state.listt;
        return (
          
       <div className="det">
          
          <Typography variant="body1">
           <Typography className="usName">
          <p className="axax">User's Detail </p>
           <tr><td>FirstName:</td><td>{" "+per.first_name}</td><td></td></tr>
           <tr><td>LastName:</td><td>{" "+per.last_name}</td></tr>
           <tr><td>ID:</td><td>{per._id}</td></tr>
           <tr><td>Location:</td><td>{per.location}</td></tr>
           <tr><td>Description:</td><td>{per.description}</td></tr>
           <tr><td>Ocupation:</td><td>{per.occupation}</td></tr>
          </Typography>
          <Link to={"/photos/"+this.props.match.params.userId}>
        <Button variant="contained" color="primary" >{per.first_name+" "+per.last_name+"'S "}Photos</Button>
           </Link>
          </Typography>
          </div>
        );
      }
    }
    export default UserDetail;