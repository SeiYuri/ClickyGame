import React, { Component } from 'react';
import MemoryCard from '../MemoryLogic';
import images from "../../images.json";
import "./MainGameContainer.css";

class MainGameContainer extends Component {
	state = {
		images,
		message: "Click one of the images below to start earning points, but don't click it twice or you lose!",
		score: 0,
	};
	
	handleClick = (id, clicked) => {

		const imageOrder = this.state.images;

		if (clicked) {
			imageOrder.forEach((image, index) => {
				imageOrder[index].clicked = false;
			});
			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "Didn't I tell you not to click on an image more than once?!",
				score: 0
			})
		}
		else {
			imageOrder.forEach((image, index) => {
				if (id === image.id) {
					imageOrder[index].clicked = true;
				}
			});

			const { score } = this.state;
			const newScore = score + 1;

			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "Yes, that's correct, good job.",
				score: newScore,
			})
		}
	};

	render() {
		return (
			<div className="container-fluid mainCardContainer">
			<div className="gameMessage text-center">
						<p>{this.state.message}</p>
					</div>
					<div className="gameScores text-center">
						<p>Score: {this.state.score}</p>
					</div>
				<div className="container">
					
					<div className="row">
					{this.state.images.map(image => (
						<MemoryCard
							key={image.id}
							id={image.id}
							name={image.name}
							clicked={image.clicked}
							image={image.image}
							handleClick={this.handleClick}
							/>
					))}
					</div>
					
				</div>
			</div>
		);
	}
};

export default MainGameContainer;