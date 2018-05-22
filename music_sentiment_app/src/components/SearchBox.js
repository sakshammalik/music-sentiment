import React, { Component } from 'react';
import '../css/All.css'
import axios from 'axios'
import Songs from './Songs'



class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state = {data: [],
                        query: ''}
    };
    handleChange=(event)=> {
    this.setState({query: event.target.value},()=>{
    });
  };
    getSongInfo=(e) => {
              if (e.key === 'Enter' || e.type === 'click') {
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
                          data: resp.data.data
                      });
                      console.log(resp);
                  });
              }
          };


  render() {
    return (
      <div>
           <input value={this.state.query} onChange={this.handleChange} className={"search"} placeholder={"Search for a song..."} onKeyPress={this.getSongInfo}/>
          <button className="search-button" type="submit" onClick={this.getSongInfo}> Search</button>
              <Songs data={this.state.data}/>
      </div>
    );
  }
}

export default SearchBox;
