import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
// import { withStyles } from '@material-ui/core/styles';
// // import { toggleColor } from 'Actions/UiActions';
// import { toggleColor } from '../../redux/actions/UiActions';
// import styles from './welcome-jss.js';

class Welcome extends Component {
  render() {
    // const { classes, color, toggleColor } = this.props;
    console.log(this.props);
    return (
      <Fragment>
        bro
        <h2>I am App Component</h2>
        <h2>I am {this.props.myname}</h2>
        <h2>I am {this.props.mylang.map((item, i)=>
          <><br /><span>{i}</span>
          <span>{item}</span><br /></>
        )}</h2>
         {/* <h1 style={{  color }}>
          React Template with Webpack and Babel
        </h1>
        <p>*Change text color by click on image</p>
        <img src='/images/react.png' alt='react' className={classes.image} onClick={toggleColor} /> */}
      </Fragment>
    );
  };
};

// Welcome.propTypes = {
//   classes: PropTypes.object.isRequired,
//   color: PropTypes.string.isRequired
// };

const reducer = 'ui';

const mapStateToProps = state => ({
  myname: state.getIn([reducer, 'name']),
  mylang: state.getIn([reducer, 'lang'])
});

// const mapDispatchToProps = dispatch => ({
//   toggleColor: bindActionCreators(toggleColor, dispatch)
// });

const WelcomeMapped = connect(
  mapStateToProps
  // mapDispatchToProps
)(Welcome);
export default WelcomeMapped;
//export default withStyles(styles)(WelcomeMapped);
