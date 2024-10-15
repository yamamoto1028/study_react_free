import "./App.css";
// import MediaQuery from "react-responsive";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./HeaderComponents/Header";
import { Footer } from "./FooterComponents/Footer";
import { Service } from "./ServiceComponents/Service";
import { About } from "./AboutComponents/About";
import { Staff } from "./StaffComponents/Staff";
import { Contact } from "./ContactComponents/Contact";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <Switch>
            <Route exact path="/">
              <Service />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/staff">
              <Staff />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
      <div className="footer">
        <Footer />
      </div>
      {/* <MediaQuery query="(max-width: 767px)">
        <SPContents />
      </MediaQuery>
      <MediaQuery query="(min-width: 767px)">
        <PCContents />
      </MediaQuery> メディアクエリの実装→一旦保留*/}
    </div>
  );
}
function NotFound() {
  return <h1>多分パスちがうで？ようみてみ</h1>;
}

export default App;
