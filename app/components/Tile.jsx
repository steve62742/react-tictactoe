// import React from 'react';
var React = require('react');

var TileBox = React.createClass({

  getInitialState: function() {
    return {  status : "N"  , imgpath : "img/clear.png"  };
  },

    handleClick: function() {
        if (this.props.parentState.status == 1){


            if (this.props.data.status == "N"){
                this.props.onSelect(this.props.data.number);
                if ( this.props.parentState.turn == 0 ){
                    this.setState({
                        imgpath : "img/x.png"
                    });
                }else{
                    this.setState({
                        imgpath : "img/o.png"
                    });
                }
            }else{
                this.props.onSelect(-1);
            }

        }
    },
    getClasses : function(status){
        return "centerimg img-responsive "+ (( status == this.props.data.status) ? "" : "invisible" ) ;
    },

  render: function() {
    return (
        <div  onClick={this.handleClick}  className="col-sm-4 cell ">
            <img className={this.getClasses('N')} src="public/img/clear.png" />
            <img className={this.getClasses('O')} src="public/img/o.png" />
            <img className={this.getClasses('X')} src="public/img/x.png" />
        </div>
    );
  }
});

module.exports = TileBox;