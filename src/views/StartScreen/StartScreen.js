import React, { Component, PropTypes } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';

import { NewPlayerForm } from 'containers';
import { setPlayerName } from 'redux/modules/name';

export class StartScreen extends Component {
  static propTypes = {
    router: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      query: PropTypes.shape({
        ref: PropTypes.string,
      }).isRequired,
    }).isRequired,
    playerName: PropTypes.string.isRequired,
    setPlayerName: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    this.goToRef(this.props);
  }

  componentWillReceiveProps = (nextProps) => {
    this.goToRef(nextProps);
  }

  goToRef = (props) => {
    const { router, location, playerName } = props;
    const { ref } = location.query;

    if (playerName && ref) {
      router.replace(ref);
    }
  }

  render() {
    const { playerName } = this.props;

    return (
      
      


    <div>

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <h1 className="display-4">Welcome to Magic Lightning{ playerName && `, ${playerName}` }</h1>
          <p className="lead">Turn-based card game between two opponents, using constructed decks of 
          RPG cards. Players use their limited mana crystals to play abilities or summon creatures to
          attack the opponent, with the goal of destroying the opponent to earn their satoshis</p>
          <hr className="my-4"></hr>
          <h3 className="h3">How to Play Magic Lightning</h3>
          <div className="row">
            <div className="col-4">
              <div className="list-group" id="list-tab" role="tablist">
                <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Summon a creature</a>
                <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Attack the enemy</a>
              </div>
            </div>
            <div className="col-8">
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Summon any creature from your deck using your mana. 
                Just drag and drop the creature to the <b>left</b> side of the game board.</div>
                <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Attack any opponent card using your summoned creatures. 
                Just drag and drop your card onto the opponent cards.</div>
              </div>
            </div>
          </div>
          <br></br>

             { playerName ? (
          <div>
            <center>
            <a className="btn btn-primary btn-lg" href="#/game/new" role="button">New game</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="btn btn-info btn-lg" href="#//game/join" role="button">Join game</a>
            </center>
          </div>
        ) : (
          <NewPlayerForm playerName={playerName} onSubmit={this.props.setPlayerName} />
        ) }
        </div>
      </div>
        
     
      </div>
    );
  }
}

const mapStateToProps = state => ({ playerName: state.player.name });
const mapDispatchToProps = dispatch => (bindActionCreators({ setPlayerName }, dispatch));

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(StartScreen);

