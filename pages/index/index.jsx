import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { startClock, addCount } from "redux/store";
import Container from "./container";

const mapStateToProps = state => {
  const { lastUpdate, light, count } = state;
  return { lastUpdate, light, count };
};

const mapDispatchToProps = dispatch => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
