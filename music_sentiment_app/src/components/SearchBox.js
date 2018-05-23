import React, { Component } from 'react';
import '../css/All.css'
import axios from 'axios'
import Songs from './Songs'



class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state = {data: [],
                        query: '',
        loader_bool:false}
    };
    handleChange=(event)=> {
    this.setState({query: event.target.value},()=>{
    });
  };
    getSongInfo=(e) => {
              if (e.key === 'Enter' || e.type === 'click') {
                  this.setState({
                          loader_bool: true
                      });
                  axios.get('https://deezerdevs-deezer.p.mashape.com/search',{
                      params:{
                          q:this.state.query
                      },
                      headers:{
                          "X-Mashape-Key": "ppQ8OnBq8fmshzfWL4nMuw3wfyW1p1AdkUxjsnchMkhIgYR2SL",
                            "Accept": "text/plain"
                      }
                  }).then((resp)=>{
                      this.setState({
                          data: resp.data.data,
                          loader_bool: false
                      });
                      console.log(resp);
                  });
              }
          };


  render() {
      let final_data;
      if (this.state.loader_bool){
          final_data = <img className={"loader-gif"} src={"loader.gif"} alt={'loader'}/>
      }
      else{
          final_data = <Songs data={this.state.data}/>
      }
    return (
      <div>
           <input value={this.state.query} onChange={this.handleChange} className={"search"} placeholder={"Search for a song..."} onKeyPress={this.getSongInfo}/>
          <button className="search-button" type="submit" onClick={this.getSongInfo}> Search</button>
          {final_data}
      </div>
    );
  }
}

export default SearchBox;
