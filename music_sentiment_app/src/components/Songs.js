import React, { Component } from 'react';
import SongRow from './SongRow'
import '../css/All.css';

class Songs extends Component {


    // componentWillMount(){
    //     this.setState({
    //         songRow: song,
    //     })
    // }
  render() {
      let data = this.props.data;
    return (
      <div className="container">
          <div className="row">

          {
              data.map((song)=>{
                    return (
                        <div className="col-sm-6">
                            <SongRow key={song.id} songItem={song}/>
                        </div>
                    )

              })
          }
          </div>
      </div>
    );
  }
}

export default Songs;
