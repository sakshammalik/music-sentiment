import React, { Component } from 'react';
import SearchBox from './SearchBox'
import '../css/All.css'

class Header extends Component {
  render() {
    return (
      <div>
          <table className="table-header">
              <tbody>
              <tr>
                  <td>
                      <img className="music-header" src={"music-header.png"} alt="music"/></td>
                  <td className="title-header">Music Sentiment</td>
              </tr>
              </tbody>
          </table>
          <SearchBox />
      </div>
    );
  }
}

export default Header;
