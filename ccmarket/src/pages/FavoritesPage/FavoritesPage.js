import React, { Component } from 'react';
import { connect } from "react-redux";
import './FavoritesPage.css';
// import '../../store/store.js';
// import { listFavorites } from "../../actions/favorites-actions";

// import coinListDescriptions from "../../data/coinlist-description.js";
// var coinListArr = coinListDescriptions.split("\n").map(x => x.split("|"));
// console.log('coinListArr: ' + coinListArr);

class FavoritesPage extends Component {
  state = {
    favorites: true,
    coinlist: []
  };

  componentDidMount() {
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=100")
      .then(res => res.json())
      .then(
        coinlist => this.setState(prev => ({ loading: false, coinlist })),
        error => this.setState(prev => ({ loading: false, error }))
      );
  }

  handleListFavorites = () => {

    if(localStorage.getItem("favoriteList") === 'null') { return (
      <div>
        No Favorites.
      </div>
    ) }

    var favoriteListArr = JSON.parse(localStorage.getItem("favoriteList"));
    favoriteListArr = favoriteListArr.sort();
    // OLD with state/props only: var favoriteList = this.props.favorites;
    
    console.log(`Favorites: ${favoriteListArr}`);

    return favoriteListArr.map((v,i)=>{
      return (
        <div key={v} style={{backgroundColor:'#f5f5f5', margin:5, padding: 10}}>
          <span style={{marginRight: 10}}>{i+1}.</span> {v}
        </div>
      )
    }
    )
  }

  render() {
    return (
      <div className="FavoritesPage--container">
        <h2>Favorites</h2>
        <div className="FavoritesPage--container-inner">

          { this.state.favorites === false ?

            (

              <div className="FavoritesPage--container-favorites-nolist">
                <h4>You have not chosen<br />any Favorites</h4>
              </div>
          
            ) : (

              <div className="FavoritesPage--container-favorites">
              <h4>This area is in DEVELOPMENT currently.</h4>
                <h4>Here are your<br />Favorites</h4>
                {this.handleListFavorites()}
              </div>  
            )
          }

        </div>
      </div>
    )
  }
 }
 
 const mapStateToProps = (state, props) => {
  return {
    favorites: state.favorites
  };
};

// const mapDispatchToProps = {
//   onListFavorites: listFavorites
// };

// export default FavoritesPage;
 export default connect(mapStateToProps)(FavoritesPage);