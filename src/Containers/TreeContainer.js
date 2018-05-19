import React, { Component } from 'react'
// import { Card, Col, Row } from "react-materialize";
// import { Link } from "react-router-dom";

class TreeContainer extends Component {
  state = {
    width: 0,
    height: 0,
    masterName: '',
    masterToShow: {}
  }

  clickImage = (event) => {
    let master = this.props.masters.find(master => {
      return master.name === event.target.alt
    })
    this.setState({
      masterToShow: master
    })
  }

  mouseHover = (event) => {
    this.setState({
      masterName: event.target.alt
    })
  }

  mouseLeave = (event) => {
    this.setState({
      masterName: ''
    })
  }

  updateDimensions(){
    let update_width = window.innerWidth
    let update_height = window.innerHeight
    this.setState({
      width: update_width,
      height: update_height,
    })
  }

  componentDidMount(){
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

	render() {
    let x_end = Math.floor((this.state.width*70)/100)
    let y_end = Math.floor(x_end*1.43)
    let x_five_prcnt = Math.floor((x_end*5)/100)
    let y_five_prcnt = Math.floor((y_end*5)/100)
		return (
			<div style={{display: 'flex', textAlign: 'left'}}>

      <div style={{flexShrink: 0}} className='refuge-tree'>
				<img src={require(`../img/refuge_tree.jpg`)}   useMap='#masters' style={{width: '100%'}}/>
        <map name="masters" >
          <area shape="circle" coords={[x_five_prcnt*13.5, y_five_prcnt*3.5, x_five_prcnt*1.5]} alt="Milarepa" onClick={this.clickImage} onMouseOver={this.mouseHover} onMouseLeave={this.mouseLeave}/>
          <area shape="circle" coords={[x_five_prcnt*10.2, y_five_prcnt*3, x_five_prcnt*1.5]} alt="Tilopa" onClick={this.clickImage} onMouseOver={this.mouseHover} onMouseLeave={this.mouseLeave}/>
        </map>
        </div>

        <div>
        {this.state.masterName}<br/>
        {this.state.masterToShow.name}<br/>
        {this.state.masterToShow.description}
        </div>
			</div>
		)
	}
}

export default TreeContainer
