import React, { Component } from 'react';
import '../css/All.css'

class SongRow extends Component {
    pauseSong = () => {
        this.refs.songPause.pause();
    };
    render() {
        return (
            <table key={this.props.songItem.id}>
                <tbody>
                    <tr>
                        <td>
                            <img className={"cover-pic"} alt={"cover"} src={this.props.songItem.album.cover_xl} data-toggle="modal" data-target={'#'+this.props.songItem.id}/>
                        </td>
                        <td>
                            <p className="song-title"><b>Song</b>: {this.props.songItem.title}</p>
                            <p className="artist-name"><b>Artist</b>: {this.props.songItem.artist.name}</p>
                            <p className="album-name"><b>Album</b>: {this.props.songItem.album.title}</p>
                        </td>
                    </tr>

                <div className="modal fade" tabIndex={-1} id={this.props.songItem.id} role="dialog" style={{
                    'backgroundImage': `url(${this.props.songItem.album.cover_xl})`,
                    'backgroundSize': 'cover'
                }}>
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">{this.props.songItem.title}</h3>
                            <button type="button" className="close" data-dismiss="modal" onClick={this.pauseSong}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <table className={this.props.songItem.id}>
                                <tbody>
                                <tr>
                                    <td>
                                       <img className={"cover-pic-modal"} alt={"cover"} src={this.props.songItem.album.cover_xl} />
                                    </td>
                                    <td>
                                        <p className="song-title-modal"><h4><b>Song</b>: {this.props.songItem.title}</h4></p>
                                        <p className="artist-name-modal"><h4><b>Artist</b>: {this.props.songItem.artist.name}</h4></p>
                                        <p className="album-name-modal"><h4><b>Album</b>: {this.props.songItem.album.title}</h4></p>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td><p className="preview-song">Song Preview:</p></td>
                                                <td>
                                                    <p>
                                                        <audio controls ref="songPause">
                                                            <source src={this.props.songItem.preview}
                                                                    type="audio/mpeg"/>
                                                            Your browser does not support the audio element.
                                                        </audio>
                                                    </p>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </tbody>
                </table>
        )
    }
}

export default SongRow