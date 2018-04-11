import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./MarketDataModal.css";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Favorite from "material-ui-icons/Favorite";
import FavoriteProcess from "../FavoriteProcess/FavoriteProcess";
import Modal from "material-ui/Modal";
import { TableCell, TableRow } from "material-ui/Table";
import Close from "material-ui-icons/Close";
import DataBranchNews from "../../containers/DataBranchNews/DataBranchNews";
import MarketDataSymbol from "../../containers/MarketDataSymbol/MarketDataSymbol";
import { toggleFavorite } from "../../actions/favorites-actions";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 45;
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 100,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5]
  }
});

class SimpleModal extends React.Component {
  state = {
    open: false,
    currentSym: " "
  };

  handleOpenModal = symbol => {
    this.setState(prevState => ({
      open: true,
      currentSym: this.props.symbol + " "
    }));
  };

  handleCloseModal = () => {
    this.setState(prevState => ({ open: false }));
  };

  handleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    var mySymbol = e.currentTarget.getAttribute('data-symbol');
    // dispatch(showLoading())
    this.props.onToggleFavorite(mySymbol);

    // return console.log('FAVORITE! ' + mySymbol);
    alert('FAVORITE! ' + mySymbol);

    // this.setState(prevState => ({ open: false }));
    // return <FavoriteProcess symbol={mySymbol} />
    // return alert('FAVORITE! ' + mySymbol);
  }

  render(props) {
    const {
      classes,
      rank,
      name,
      price_usd_commas,
      volume_usd_commas,
      percent_change_1h,
      percent_change_24h,
      percent_change_7d,
      market_cap_usd_commas,
      price_btc,
      date,
      symbol,
      id
    } = this.props;

    return (
      <Fragment>
        <TableRow
          key={id}
          className="MarketDataTickerApi--row"
          onClick={this.handleOpenModal}
        > 

          <TableCell className="MarketDataTickerApi--col text-bigger collapsible">
            {rank}
          </TableCell>
          <TableCell className="MarketDataTickerApi--col text-bigger">
            {name}
          </TableCell>
          <TableCell className="MarketDataTickerApi--col text-bigger">
            {symbol}
          </TableCell>
          <TableCell  className="MarketDataTickerApi--col text-bigger">
            <span onClick={this.handleFavorite} data-name={name} data-symbol={symbol}><Favorite className="MarketDataModal--Favorite-icon" /></span>
          </TableCell>          
          <TableCell className="MarketDataTickerApi--col">
            {price_usd_commas}
          </TableCell>

          <TableCell className="MarketDataTickerApi--col ">
            {percent_change_1h > 0 ? (
              <span style={{ color: "green" }}>{percent_change_1h}%</span>
            ) : (
              <span style={{ color: "red" }}>{percent_change_1h}%</span>
            )}
          </TableCell>
          <TableCell className="MarketDataTickerApi--col ">
            {percent_change_24h > 0 ? (
              <span style={{ color: "green" }}>{percent_change_24h}%</span>
            ) : (
              <span style={{ color: "red" }}>{percent_change_24h}%</span>
            )}
          </TableCell>
          <TableCell className="MarketDataTickerApi--col collapsible">
            {percent_change_7d > 0 ? (
              <span style={{ color: "green" }}>{percent_change_7d}%</span>
            ) : (
              <span style={{ color: "red" }}>{percent_change_7d}%</span>
            )}
          </TableCell>
          <TableCell className="MarketDataTickerApi--col collapsible">
            {volume_usd_commas}
          </TableCell>
          <TableCell className="MarketDataTickerApi--col collapsible">
            {market_cap_usd_commas}
          </TableCell>
          <TableCell className="MarketDataTickerApi--col collapsible">
            {price_btc}
          </TableCell>
          <TableCell className="MarketDataTickerApi--col collapsible">
            {date}
          </TableCell>
        </TableRow>
        
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleCloseModal}
        >
          <div style={getModalStyle()} className="MarketDataModal--modal">
            <div className="MarketDataModal--container">
              <div className="MarketDataModal--header">
                <div className="MarketDataModal--header-left">
                  <span className="header-symbol-box">{symbol}</span>
                  <h4 className="MarketDataModal--header-headline">{name} </h4>
                </div>
                <div className="MarketDataModal--header-right">
                  <span className="header-data">{percent_change_1h}%</span>
                  <span className="header-label">(1hr &Delta;)</span>
                  <span className="header-data">{percent_change_24h}%</span>
                  <span className="header-label">(24hr &Delta;)</span>
                  <span className="header-label">
                    <Close
                      className="iconspace-Close"
                      onClick={() => this.handleCloseModal(symbol)}
                    />
                  </span>
                </div>
              </div>
              <div className="MarketDataModal--body">
                <div className="MarketDataModal--body-table-wrapper">
                  <div class="MarketDataModal--body-table">
                    <div class="MarketDataModal--body-table-row-header ">
                      <div class="MarketDataModal--body-table-cell-label">USD</div>
                      <div class="MarketDataModal--body-table-cell-label">
                        7 Day Δ
                      </div>
                      <div class="MarketDataModal--body-table-cell-label">
                        Volume (1k)
                      </div>
                      <div class="MarketDataModal--body-table-cell-label">BTC</div>
                      <div class="MarketDataModal--body-table-cell-label">
                        Market Cap
                      </div>
                    </div>

                    <div class="MarketDataModal--body-table-row">
                      <div class="MarketDataModal--body-table-cell" data-title="">
                        {price_usd_commas}
                      </div>
                      <div class="MarketDataModal--body-table-cell" data-title="">
                        {percent_change_7d}%
                      </div>
                      <div class="MarketDataModal--body-table-cell" data-title="">
                        ${volume_usd_commas}
                      </div>
                      <div class="MarketDataModal--body-table-cell" data-title="">
                        {price_btc}
                      </div>
                      <div class="MarketDataModal--body-table-cell" data-title="">
                        {market_cap_usd_commas}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <div className="MarketDataModal--chart-label">7 Day</div>
                    <MarketDataSymbol sym={symbol} chartDateRange="7d" />
                  </div>
                  <div className="column">
                    <div className="MarketDataModal--chart-label">30 Day</div>
                    <MarketDataSymbol sym={symbol} chartDateRange="30d" />
                  </div>
                  <div className="column">
                    <div className="MarketDataModal--chart-label">90 Day</div>
                    <MarketDataSymbol sym={symbol} chartDateRange="90d" />
                  </div>
                </div>

                <div className="MarketDataModal--body-text">
                  <h3>
                    {name} ({symbol}) News &amp; Info
                  </h3>
                  <h4>Currently ranked #{rank} on our market charts.</h4>
                  <Typography
                    variant="subheading"
                    id="simple-modal-description"
                  >
                    Watch for updates - {date}
                    <br />
                  </Typography>
                </div>

                <DataBranchNews query={name} limit={6} />
              </div>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};


const mapStateToProps = (state, props) => {
  return {
    favorites: state.favorites
  };
};

const mapDispatchToProps = {
  onToggleFavorite: toggleFavorite
};





// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);
export default connect(mapStateToProps, mapDispatchToProps)(SimpleModalWrapped);