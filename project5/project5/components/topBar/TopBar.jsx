import React from 'react';
import {
  AppBar, Toolbar, Typography,Avatar,
} from '@material-ui/core';
import './TopBar.css';
import axios from 'axios';
/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    listt: [],
    infoo:[],
  }
  axios.get('http://localhost:3000/test/info')
  .then(response => response.data)
  .then(data => this.setState({ infoo: data }));

}
  render() {
    var name=0;
    var ner=window.location.href;
    //alert(window.location.hash.slice(8, 32))
    if( ner.slice(22, 27)=== "users"){

      axios.get('http://localhost:3000/user/'+ner.slice(28, 52))
      .then(response => response.data)
      .then(data => this.setState({ listt: data }));
      name = this.state.listt.first_name+" "+this.state.listt.last_name;

    }else if(ner.slice(22, 28) === "photos"){
      axios.get('http://localhost:3000/user/'+ner.slice(28, 34))
    .then(response => response.data)
    .then(data => this.setState({ listt: data }));

    name = "photos of /"+" "+this.state.listt.first_name+" "+this.state.listt.last_name;
    }
    else{
      
      name = " ";
    }
    
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
    
          </Typography>
          <div className="ner" >
          <Typography  className="aay" variant="h6"   color="inherit" >
         <td><Avatar src="icon.png"></Avatar></td><td className="lwlw"><Avatar src="keke.png"></Avatar></td><td> { name} </td>
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
