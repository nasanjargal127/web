import React from 'react';
import {
  Typography
} from '@material-ui/core';
import './userPhotos.css';

import {
  Link
} from 'react-router-dom';

import Card from '@material-ui/core/Card';


import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import axios from 'axios';



/**
 * Define UserPhotos, a React componment of CS142 project #5
 * window.cs142models.photoOfUserModel(userId): 
 * {this.props.match.params.userId}
 */


class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeStep : 0,
    lim: 0,
    listItems123: [],}

  
    axios.get('http://localhost:3000/photosOfUser/'+this.props.match.params.userId)
     .then((response) => {
       this.setState({listItems123: response.data})
     })
    .catch((error)=>{
       console.log(error);
    });

  }

  CommentSec(comments){
    
    var pComment = comments.map((comm) =>
    <CardContent key = {comm._id}>
      
    <Typography  variant="h6" align="left" color="secondary" > 

      <Link to={"/users/" + comm.user._id} key={comm.user._id} style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="secondary">
        {comm.user.first_name + " " + comm.user.last_name}
          </Button></Link>
    </Typography>
    <Typography color="textSecondary" style={{ fontWeight : 'bold'}}>
      {comm.comment}
    </Typography>
    <Typography color="textSecondary" align="right" style={{ fontWeight : 'bold'}}>
        {comm.date_time}  
    </Typography>
  </CardContent>
    )
    
    return pComment
  }



  PhotoDetailer(){

    
    var listItems = [];
    listItems=this.state.listItems123;
    console.log(listItems);
    var listOfPhoto = listItems.map((photo) =>
    <Card key = {photo._id} className = "pPhoto">
    <CardContent>
      <img src={"http://localhost:3000/images/" + photo.file_name } className = "pictures"></img>
    </CardContent>
    <CardContent>
      <Typography  align="right"  color="textSecondary" >
          Uploaded : {photo.date_time}
      </Typography> 
      {(typeof photo.comments !== "undefined" ) ? this.CommentSec(photo.comments): console.log("commentgui zurag: " + photo._id)}
    </CardContent>      
</Card>
    
    );
    return listOfPhoto;
  }



  PhotoD(){

    var listes = this.PhotoDetailer();
    return listes[this.state.activeStep];

  }
  
  handleNext = () => {
    var listes = this.PhotoDetailer();
    var count = 0;
    var i;

    for (i in listes) {
    if (listes.hasOwnProperty(i)) {
        count++;           
    }
}
   // console.log(count);
    if(count-1 !== this.state.activeStep)
      this.setState((state) => ({ activeStep: state.activeStep + 1}));
    //console.log(this.state.activeStep);
    if (count-1 === this.state.activeStep)
    this.setState((state) => ({ activeStep: state.activeStep = 0}));
  };

  handleBack = () => {
    if(0 !== this.state.activeStep)
      this.setState((state) => ({ activeStep: state.activeStep - 1}));
   // console.log(this.state.activeStep);
   if(0 === this.state.activeStep)
   this.setState((state) => ({ activeStep: state.activeStep = 3}));
  };

  render() {
    return (
      <div> 
              <Typography align="left" style={{ float: 'left' }}>
              <Button variant="contained" color="secondary"  onClick={this.handleBack} >
                Back
              </Button >
              </Typography>
          <Typography align="right" style={{ float: 'right' }}><Button variant="contained" color="secondary" onClick={this. handleNext} >
                Next
              </Button>
          </Typography>
        {this.PhotoD()}
      </div>
    );
  }
}

export default UserPhotos;  