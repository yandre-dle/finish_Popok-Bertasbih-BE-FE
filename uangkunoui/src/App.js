import React, { Component } from 'react';
import Headerkuno from './components/Headerkuno';
import Homekuno from './components/Homekuno';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Registerkuno from './components/Registerkuno';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import Loginkuno from './components/Loginkuno';
import { keepLogin, cookieChecked } from './actions';
import PopokListkuno from './components/PopokListkuno';
import PopokDetailkuno from './components/PopokDetailkuno';
import ManagePopokkuno from './components/ManagePopokkuno';
import Cartkuno from './components/Cartkuno';
import Historykuno from './components/Historykuno';

//
import WaitingVerification from './components/WaitingVerification';
import Verified from './components/Verified';
import UserList from './components/UserList';

const cookies = new Cookies();

class App extends Component {
  state = { content: 'Ini Content' }

  componentDidMount() {
      const username = cookies.get('Ferguso');
      if(username !== undefined) {
          this.props.keepLogin(username);
      }
      else {
        this.props.cookieChecked();
      }
  }

  onBtnOKClick = () => {
    this.setState({ content: 'Ini Comberan' })
  }

  render() {
    if (this.props.cookie) {
    return (
      <div>
         <Headerkuno navBrand={"uang kuno"} />
         <div>
            <Route exact path="/" component={Homekuno} />
            <Route path="/register" component={Registerkuno} />
            <Route path="/login" component={Loginkuno} />
            <Route path="/popoklist" component={PopokListkuno} />
            <Route path="/popokdetail" component={PopokDetailkuno} />
            <Route path="/managepopok" component={ManagePopokkuno} />
            <Route path="/cart" component={Cartkuno} />
            <Route path="/history" component={Historykuno} />
            <Route path="/waitingverification" component={WaitingVerification} />
            <Route path="/verified" component={Verified} />
            <Route path="/userlist" component={UserList} />
         </div>
      </div>
    );
}
  return (
  <div>
    <center><h1>Loading...</h1></center>
  </div>);
  }
}

const mapStateToProps = (state) => {
return { cookie: state.auth.cookie }
}

export default withRouter(connect(mapStateToProps, {keepLogin, cookieChecked})(App));
