import { Component } from "react";
import { addCount, serverRenderClock } from "redux/store";
import Index from "./presenter";

class Container extends Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer));
    store.dispatch(addCount());

    return { isServer };
  }

  componentDidMount() {
    this.timer = this.props.startClock();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log(this.props);
    return <Index {...this.props} title="Index Page" linkTo="/other" />;
  }
}

export default Container;
