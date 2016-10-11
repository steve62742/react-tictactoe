var React = require('react');

var InfoBox = React.createClass({

  getInitialState: function() {
    return { players : ["Player 1" , "Player 2"]    };
  },
  printPlayer : function(){
    return this.state.players[this.props.parentState.turn];
  },

  printTurn : function(){
    return this.props.parentState.turn;
  },

  render: function() {
    return (
        <div className="col-md-12 headercell ">

            <div className="panel panel-default">
              <div className="panel-body">
                <h1>Tic - Tac - Toe</h1>
              </div>
            </div>
            <div className="col-md-6">
                <div className="well">
                    <h2>
                        <span className="label label-default" ><span className="glyphicon glyphicon glyphicon-user" aria-hidden="true"></span>  Turn to Play :</span>
                        <span style={{float:"right"}} className="label label-default">{ this.state.players[this.props.parentState.turn]  }</span>
                    </h2>
                </div>
            </div>
            <div className="col-md-6">
                <div className="well">
                    <h2>
                        <span className="label label-default"><span className="glyphicon glyphicon glyphicon-play" aria-hidden="true"></span>  Turns Played :</span>
                        <span style={{float:"right"}} className="label label-default">{  this.props.parentState.clicks  }</span>
                    </h2>
                </div>
            </div>
        </div>
    );
  }
});


module.exports = InfoBox;