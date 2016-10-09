// import React from 'react';
var React = require('react');

var TileBox = require('./Tile.jsx');
var InfoBox = require('./Infobox.jsx');
var AlertBox = require('./AlertBox.jsx');

var Alert = require('react-s-alert').default;

var Game = React.createClass({
    getInitialState: function() {
        return {
            status: 1,
            turn: 0,
            clicks: 0,
            tiles : [
                { number: 0 , status : "N" },
                { number: 1 , status: "N" },
                { number: 2 , status: "N" },
                { number: 3 , status: "N" },
                { number: 4 , status: "N" },
                { number: 5 , status: "N" },
                { number: 6 , status: "N" },
                { number: 7 , status: "N" },
                { number: 8 , status: "N" }
            ]
        };
    },
    rematch : function(){
        console.log("yo");
        var newtiles = [];
        for (var i =0; i < this.state.tiles.length; i++){
            newtiles.push( {number : this.state.tiles[i].number , status : "N"} );
        }

            this.setState({
                clicks: 0 ,
                turn : 0 ,
                status : 1,
                tiles : newtiles
            }  );

    },

    checkOnClick : function( number){
        if (number == -1 ){
            this.alertWrongClick();




        }else{
            var dumb = this.state.tiles;
            dumb[number].status =  ( (this.state.turn==0) ? "X" : "O" ) ;
            this.setState({
                clicks: this.state.clicks+1 ,
                turn : ( (this.state.turn==0) ? 1 : 0 ) ,
                tiles : dumb
            } , this.checkWin() );
        }




    },

    alertWrongClick : function () {

        Alert.warning('<h2>You cant choose this tile again</h2>', {
            position: 'top-right',
            effect: 'slide',
            beep: false,
            timeout: 3000,
            offset: 100,
                customFields: {
                    onrematch: this.rematch,
                    final : false
                }
        });

    },

    alertWin : function(winner){
        //alert("o nikitis ine o "+winner+" se "+this.state.clicks+" girous");

        Alert.info('<h2>Game Over  ' +winner+' wins!</h2>', {
            position: 'top-right',
            effect: 'slide',
            onShow: function () {
                console.log('aye!')
            },
            beep: false,
            timeout: 'none',
            offset: 100,
                customFields: {
                    onrematch: this.rematch,
                    final : true
                }
        });





    },

    checkWin : function () {
        if ( ( this.state.tiles[0].status == this.state.tiles[1].status && this.state.tiles[0].status  == this.state.tiles[2].status ) && ( this.state.tiles[0].status != "N" ) ){
            this.setState({
                status : 0
            }  );
            if ( this.state.tiles[0].status =="O" ){
                this.alertWin("player 2");
            }else{
                this.alertWin("player 1");
            }
        }else        if ( ( this.state.tiles[3].status == this.state.tiles[4].status && this.state.tiles[3].status  == this.state.tiles[5].status ) && ( this.state.tiles[3].status != "N" ) ){

            this.setState({
                status : 0
            }  );
            if ( this.state.tiles[3].status =="O" ){
                this.alertWin("player 2");
            }else{
                this.alertWin("player 1");
            }
        }else        if ( ( this.state.tiles[6].status == this.state.tiles[7].status && this.state.tiles[6].status  == this.state.tiles[8].status ) && ( this.state.tiles[6].status != "N" ) ){

            this.setState({
                status : 0
            }  );
            if ( this.state.tiles[6].status =="O" ){
                this.alertWin("player 2");
            }else{
                this.alertWin("player 1");
            }
        }else        if ( ( this.state.tiles[0].status == this.state.tiles[4].status && this.state.tiles[0].status  == this.state.tiles[8].status ) && ( this.state.tiles[0].status != "N" ) ){

            this.setState({
                status : 0
            }  );
            if ( this.state.tiles[0].status =="O" ){
                this.alertWin("player 2");
            }else{
                this.alertWin("player 1");
            }
        }else        if ( ( this.state.tiles[2].status == this.state.tiles[4].status && this.state.tiles[2].status  == this.state.tiles[6].status ) && ( this.state.tiles[2].status != "N" ) ){

            this.setState({
                status : 0
            }  );
            if ( this.state.tiles[2].status =="O" ){
                this.alertWin("player 2");
            }else{
                this.alertWin("player 1");
            }
        }else        if ( ( this.state.tiles[0].status == this.state.tiles[3].status && this.state.tiles[0].status  == this.state.tiles[6].status ) && ( this.state.tiles[0].status != "N" ) ){

            this.setState({
                status : 0
            }  );
            if ( this.state.tiles[0].status =="O" ){
                this.alertWin("player 2");
            }else{
                this.alertWin("player 1");
            }
        }else        if ( ( this.state.tiles[1].status == this.state.tiles[4].status && this.state.tiles[1].status  == this.state.tiles[7].status ) && ( this.state.tiles[1].status != "N" ) ){

            this.setState({
                status : 0
            }  );
            if ( this.state.tiles[1].status =="O" ){
                this.alertWin("player 2");
            }else{
                this.alertWin("player 1");
            }
        }else        if ( ( this.state.tiles[2].status == this.state.tiles[5].status && this.state.tiles[2].status  == this.state.tiles[8].status ) && ( this.state.tiles[2].status != "N" ) ){

            this.setState({
                status : 0
            }  );
            if ( this.state.tiles[2].status =="O" ){
                this.alertWin("player 2");
            }else{
                this.alertWin("player 1");
            }
        } else if ( this.state.tiles[0].status == this.state.tiles[1].status &&
            this.state.tiles[0].status == this.state.tiles[2].status &&
            this.state.tiles[0].status == this.state.tiles[3].status &&
            this.state.tiles[0].status == this.state.tiles[4].status &&
            this.state.tiles[0].status == this.state.tiles[5].status &&
            this.state.tiles[0].status == this.state.tiles[6].status &&
            this.state.tiles[0].status == this.state.tiles[7].status &&
            this.state.tiles[0].status == this.state.tiles[8].status &&
            this.state.tiles[0].status != "N"  ) {


            this.setState({
                status : 0
            }  );
            this.alertWin("No one");
        }

    },

    render: function() {
            var parentState = this.state;
            return (
                <div>
                    <div className="row"><InfoBox  parentState={parentState} />
                        {this.state.tiles.map((tile) => {
                         return (
                           <TileBox
                             data={tile} parentState={parentState}
                             onSelect={this.checkOnClick}

                           />
                         );
                        })}
                    </div>
                    <Alert stack={{limit: 3}} html={true} contentTemplate={AlertBox}  />
                </div>
            );
    }

});


module.exports = Game;