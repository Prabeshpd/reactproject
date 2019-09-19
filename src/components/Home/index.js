import React, { Fragment } from "react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import Sidebar from "../layouts/sidebar";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Sidebar />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
