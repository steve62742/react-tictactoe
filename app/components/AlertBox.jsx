var React = require('react');
var Alert = require('react-s-alert') ;

var AlertBox = React.createClass({

    handleClick: function() {
        this.props.customFields.onrematch();
        this.props.handleClose();

    },
    handleConfirm() {
        this.props.handleClose();
    },
    handleClose() {
        this.props.handleClose();
    },
    getClasses() {
        if (this.props.customFields.final == true ){
            return 'btn btn-primary'
        }else{
            return 'nondis'
        }

    },

  render: function() {
    return (
            <div className={this.props.classNames} id={this.props.id} style={this.props.styles}>
                <div className='s-alert-box-inner'>
                    {this.props.message}
                </div>
                <button type='button' className={this.getClasses()} onClick={this.handleClick}>Re-Match</button>
            </div>
    );
  }
});

module.exports = AlertBox;