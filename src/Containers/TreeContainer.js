import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-materialize'

// import { Card, Col, Row } from "react-materialize";
// import { Link } from "react-router-dom";
import { Stage, Layer, Image, Circle, Text } from 'react-konva'
import tree from '../img/refuge_tree.jpg'

class TreeContainer extends Component {
	state = {
		width: 0,
		height: 0,
		masterName: '',
		masterToShow: {},
		image: null,
		isMouseInside: false,
		isMouseInside1: false,
		opacity: 0,
		text: '',
		textX: 0,
		textY: 0,
		textR: 0,
		textOpacity: 1,
		highlightImage: null
	}

	handleOpacity = () => {
		this.setState({
			opacity: 1
		})
	}

	handleMouseEnter = event => {
		let highlightImageName = event.target.attrs.name.toLowerCase().replace(' ', '_') + '.png'
		console.log(highlightImageName)

		// let promise = OS.File.stat(require(`../img/${highlightImageName}`))
		// promise = promise.then(
  	// function onSuccess(stat) {
    // if (stat.isFile) {
    //   console.log('YES');
    // }})
		console.log(require(`../img/${highlightImageName}`));
		if (require(`../img/${highlightImageName}`)) {
			console.log('YES');
			let highlightImage = require(`../img/${highlightImageName}`)

			const imageHigh = new window.Image()
			imageHigh.src = highlightImage
			imageHigh.onload = () => {
				this.setState({
					highlightImage: imageHigh,
					highImageWidth: imageHigh.width,
					highImageHeight: imageHigh.height
				})
			}
		}

		this.setState({
			isMouseInside: true,
			text: event.target.attrs.name,
			textX: event.target.attrs.x,
			textY: event.target.attrs.y,
			textR: event.target.attrs.radius
		})
		console.log(this.state.highlightImage)
	}

	handleMouseLeave = () => {
		this.setState({
			isMouseInside: false,
			text: '',
			textX: 0,
			textY: 0,
			textR: 0,
			highlightImage: null
		})
		console.log(this.state.textX)
	}

	handleClick = event => {
		console.log(event.target.attrs.name)
		console.log(event.target.attrs)
		let master = this.props.masters.find(master => {
			return master.name === event.target.attrs.name
		})
		console.log(master)
		this.setState({
			masterToShow: master
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
				image: image,
				imageWidth: image.width,
				imageHeight: image.height
			})
			// console.log(this.state.imageHeight);
			// console.log(this.state.imageWidth);
		}
	}

	calcTextX() {
		// debugger
		console.log(this.textNode)
		if (this.textNode) {
			// this.setState({
			// 	textOpacity: 1
			// })
			console.log(this.textNode.partialText)
			return this.textNode.getTextWidth() / 2
		}
		// return this.state.textX
	}

	render() {
		// console.log(this.state.image.height);

		let x_end = this.state.width * 70 / 100
		let y_end = x_end * 1.43
		let x_five_prcnt = x_end * 5 / 100
		let y_five_prcnt = y_end * 5 / 100
		return (
			<div style={{ display: 'flex', textAlign: 'left' }}>
				<Stage
					width={this.state.width * 70 / 100}
					height={
						this.state.image !== null
							? this.state.image.height
							: window.innerHeight
					}>
					<Layer>
						<Image
							image={this.state.image}
							width={this.state.width * 70 / 100}
							height={this.state.width * 70 / 100 * 1.43}
						/>
						<Image
							image={this.state.highlightImage}
							x={this.state.textX-(this.state.textR*1.2)}
							y={this.state.textY-(this.state.textR*1.43)}
							width={this.state.highImageWidth / 3}
							height={this.state.highImageHeight / 3}
						/>
						<Text
							ref={node => {
								this.textNode = node
							}}
							x={this.state.textX - (this.state.textR / 2)}
							y={this.state.textY + this.state.textR}
							text={this.state.text}
							fontSize={18}
							align={'center'}
						/>
						<Circle
							name={'Tilopa'}
							x={x_five_prcnt * 10.2}
							y={y_five_prcnt * 3.2}
							radius={x_five_prcnt * 1.4}
							opacity={0.5}
							onCLick={this.handleClick}
							onMouseOver={this.handleMouseEnter}
							onMouseOut={this.handleMouseLeave}
						/>
						<Circle
							name={'Milarepa'}
							x={x_five_prcnt * 13.2}
							y={y_five_prcnt * 3.6}
							radius={x_five_prcnt * 1.5}
							opacity={0.5}
							onCLick={this.handleClick}
							onMouseOver={this.handleMouseEnter}
							onMouseOut={this.handleMouseLeave}
						/>
						<Circle
							name={'Milarepa'}
							x={x_five_prcnt * 7.15}
							y={y_five_prcnt * 3.7}
							radius={x_five_prcnt * 1.5}
							fill="red"
							opacity={0.5}
							onCLick={this.handleClick}
							onMouseOver={this.handleMouseEnter}
							onMouseOut={this.handleMouseLeave}
						/>
						<Circle
							name={'Dorje Chang'}
							x={x_five_prcnt * 10.2}
							y={y_five_prcnt * 6.6}
							radius={x_five_prcnt * 3.2}
							opacity={0.5}
							onCLick={this.handleClick}
							onMouseOver={this.handleMouseEnter}
							onMouseOut={this.handleMouseLeave}
						/>
					</Layer>
				</Stage>
				<div style={{ padding: '20px' }}>
					<div style={{ fontSize: '3.5vw', lineHeight: '3.5vw' }}>
						{this.state.masterToShow.name}
					</div>
					<div style={{ fontSize: '2vw', marginBottom: '1.5vw' }}>
						{this.state.masterToShow.years_lived}
					</div>
					<div style={{ fontSize: '1.3vw', marginBottom: '2vw' }}>
						{this.state.masterToShow.description}
					</div>

					{this.state.masterToShow.name ? (
						<NavLink to={'/masters/' + this.state.masterToShow.name}>
							<Button className="red" waves="light">
								See the Master
							</Button>
						</NavLink>
					) : null}
				</div>
			</div>
		)
	}
}

export default TreeContainer
