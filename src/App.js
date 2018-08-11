import React, { Component } from 'react';
import {translate} from 'react-i18next';
import Sidebar from './Sidebar/Sidebar';
import PageView from './PageView/PageView';
import Layout from './Layout/Layout';
import Topbar from './Topbar/Topbar';
import Footer from './Footer/Footer'

class App extends Component {
  render() {
    return (
      <Layout
        topbar={<Topbar/>}
        sidebar={<Sidebar/>}
        content={<PageView/>}
        footer={<Footer/>}
      />
    );
  }
}

export default translate()(App);
