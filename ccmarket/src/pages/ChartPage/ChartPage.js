import React, { Component, Fragment } from 'react';
import './ChartPage.css';
import ChartPageContent from '../../containers/ChartPageContent/ChartPageContent'
// import IconButton from 'material-ui/IconButton';
// import Button from 'material-ui/Button';
// import {DeviceHub} from 'material-ui-icons'
// import Link from 'react-router-dom/Link';


class ChartPage extends Component {

	componentDidMount() {
      
      fetch("https://api.coinmarketcap.com/v1/ticker/?limit=20")
      .then(res => res.json())
      .then(
        data => this.setState(prev => ({ loading: false, data })),
        error => this.setState(prev => ({ loading: false, error }))
      );
     } 

	renderLinks = () => {
		return(
			<div className="ChartPage--subheading">
				{/* <span className="ChartPage-link"><a href="/charts/range/24h">24h</a></span> */}
				<span className="ChartPage-link"><a href="/charts/range/7d">7 day</a></span> 
				<span className="ChartPage-link"><a href="/charts/range/30d">30 day</a></span>
				{/* <span className="ChartPage-link"><a href="/charts/range/60d">60 day</a></span> */}
				<span className="ChartPage-link"><a href="/charts/range/90d">90 day</a></span>
			</div>	
		)
	}

	render() {

		return (
			<Fragment>
				<div className="ChartPage--container">
					<div className="ChartPage--heading">
						<h1>Coin Charts</h1>
					</div>
					
						{this.renderLinks()}
					
					{/* <h1>{this.match.params.range}</h1> */}
					<ChartPageContent {...this.props} />


				</div>

	
			</Fragment>
		)
	}
}

export default ChartPage
