import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  // this is so we can get setstate right?
  constructor() {
    super();
    this.state = {
      isClicked: false,
    }
    // could I just set this to isClicked to false by adding a line in app/gameitem?
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onClicked = () => {
    // console.log("clicked it");
    this.setState({
      isClicked: true,
    })
    if (this.props.type === 'litter')
     this.props.clicked();
  }



  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    // so this makes it all rocks right now
    // const icon = ItemIcons.rock;

    const icon = ItemIcons[this.props.type];
    // so its taking in a type in the form of a prop from App, when it gives a component? 
    // and then we are storing that type name, and then finding the itemicon for it. (although why does it need to be in [] and not .)


    // so need to add a click handler, logic if "this" is litter css goes green, if not goes red
    
    let color = 'game-item'

    if (this.state.isClicked && this.props.type === 'litter') {
      // crap, just accidentally used icon instead of this.props.types, whole issue
      color = 'game-item spotted-litter'
    } else if (this.state.isClicked) {
      color = 'game-item spotted-nature'
    }
    return (
      <div className={color} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" onClick={this.onClicked}></img>
      </div>
    );
  }
}

export default GameItem;
