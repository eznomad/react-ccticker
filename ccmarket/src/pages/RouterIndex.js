import React from "react";
import { Route, Switch } from "react-router-dom";
import Reboot from "material-ui/Reboot";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import HeaderSection from "../containers/HeaderSection/HeaderSection";
import FooterSection from "../containers/FooterSection/FooterSection";
import CoinListPage from "./CoinListPage/CoinListPage";
import NewsPage from "./NewsPage/NewsPage";
import TestPage from "./TestPage/TestPage";
import ChartPage from "./ChartPage/ChartPage";
import TermsPage from "./TermsPage/TermsPage";
import FavoritesPage from "./FavoritesPage/FavoritesPage";
import App from "../containers/App";
import logo from "../images/logo.svg";
import grey from "material-ui/colors/grey";
import green from "material-ui/colors/green";
import MarketDataView from "../common/MarketDataView/MarketDataView";

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: green
  },
  status: {
    danger: "orange"
  }
});

const RouterIndex = props => {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Reboot />
        {/* <AlertSection /> */}
        <HeaderSection />
        <div style={{ marginTop: 80, minHeight: 800 }}>
          <Switch>
            <Route exact path="/" render={() => <App pageOn="app" />} />
            <Route path="/market" render={() => <App pageOn="app" />} />
            <Route
              path="/coinlist"
              render={() => <CoinListPage pageOn="coinlist" />}
            />
            <Route
              path="/news/:topic"
              render={({ match }) => (
                <NewsPage pageOn="news" query={match.params.topic} location={match.location} />
              )}
            />
            <Route
              path="/news"
              render={() => <NewsPage pageOn="news" query="Bitcoin" />}
            />
            <Route path="/blog" render={() => <App pageOn="app" />} />
            <Route path="/favorites" render={() => <FavoritesPage pageOn="favorites" />} />
            <Route path="/updates" render={() => <App pageOn="app" />} />
            <Route path="/faq" render={() => <App pageOn="app" />} />
            <Route
              path="/test"
              render={() => <TestPage pageOn="test" myCoins="testdata" />}
            />
            <Route
              path="/charts/range/:range(24h|7d|30d|90d)"
              render={({ match }) => (
                <ChartPage pageOn="chart" range={match.params.range} />
              )}
            />
            <Route path="/charts" render={() => <ChartPage pageOn="chart" />} />
            <Route path="/terms" render={() => <TermsPage pageOn="terms" />} />
          </Switch>
        </div>
        <FooterSection />
      </div>
    </MuiThemeProvider>
  );
};

export default RouterIndex;
