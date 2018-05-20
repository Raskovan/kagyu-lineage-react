import React, { Component } from 'react'
// import { Card, Col, Row } from "react-materialize";
// import { Link } from "react-router-dom";
import { Stage, Layer, Image, Circle } from 'react-konva'
import tree from '../img/refuge_tree.jpg'

class TreeContainer extends Component {
	state = {
		width: 0,
		height: 0,
		masterName: '',
		masterToShow: {},
		image: null,
		isMouseInside: false,
    isMouseInside1: false
	}

  handleMouseEnter = () => {
      this.setState({ isMouseInside: true});
  }
  handleMouseLeave = () => {
      this.setState({ isMouseInside: false});
  }

  handleMouseEnter1 = () => {
      this.setState({ isMouseInside1: true});
  }
  handleMouseLeave1 = () => {
      this.setState({ isMouseInside1: false});
  }

	clickImage = event => {
		let master = this.props.masters.find(master => {
			return master.name === event.target.alt
		})
		this.setState({
			masterToShow: master
		})
	}

	mouseHover = event => {
		this.setState({
			masterName: event.target.alt
		})
	}

	mouseLeave = event => {
		this.setState({
			masterName: ''
		})
	}

	updateDimensions() {
		let updateWidth = window.innerWidth
		let updateHeight = window.innerHeight
		this.setState({
			width: updateWidth,
			height: updateHeight
		})
	}

	componentDidMount() {
		this.updateDimensions()
		window.addEventListener('resize', this.updateDimensions.bind(this))

		const image = new window.Image()
		image.src = tree
		image.onload = () => {
			this.setState({
				image: image
			})
		}
	}

	render() {
    // console.log(this.state.width);
		let x_end = Math.floor(this.state.width * 70 / 100)
		let y_end = Math.floor(x_end * 1.43)
		let x_five_prcnt = Math.floor(x_end * 5 / 100)
		let y_five_prcnt = Math.floor(y_end * 5 / 100)
		return (
      <div className='refuge_tree'>
			<Stage
				width={this.state.width}
				height={
					this.state.image !== null
						? this.state.image.height
						: window.innerHeight
				}>
				<Layer>
					<Image image={this.state.image} />
					<Circle
						x={500}
						y={450}
            radius={150}
						fill={this.state.isMouseInside ? 'black' : ''}
						shadowBlur={50}
            opacity={0.5}
            onCLick={this.handleMouseEnter }
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
					/>
          <Circle
            x={650}
            y={250}
            radius={50}
            fill={this.state.isMouseInside1 ? 'red' : ''}
            shadowBlur={50}
            opacity={0.5}
            onCLick={this.handleMouseEnter }
            onMouseEnter={this.handleMouseEnter1}
            onMouseLeave={this.handleMouseLeave1}
          />
				</Layer>
			</Stage>
    </div>
		)
	}
}

export default TreeContainer
