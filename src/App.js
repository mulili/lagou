import React from 'react';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button, List } from 'antd-mobile';

import * as action from './actionCreator';

import './App.less';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { Item } = List;
    const {
      nameList, addName, subtractName, restore
    } = this.props;
    return (
      <div className="App">
        <Button
          type="primary"
          onClick={addName}
        >
        addName
        </Button>
        <Button
          type="warning"
          onClick={subtractName}
          disabled={nameList.length === 0}
        >
        subtractName
        </Button>
        <Button
          type="default"
          onClick={restore}
        >
        Restore
        </Button>

        <List
          renderHeader={() => 'Name list start'}
          renderFooter={() => 'Name list end'}
        >
          {nameList.map(key => (
            <Item
              type="Button"
              key={key}
            >
              {`Hello,${key}`}
            </Item>
          ))}
        </List>

      </div>
    );
  }
}
App.propTypes = {
  nameList: PropTypes.arrayOf(PropTypes.string).isRequired,
  addName: PropTypes.func.isRequired,
  subtractName: PropTypes.func.isRequired,
  restore: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  nameList: state.name
});

const mapDispatchToProps = {
  addName: action.addName,
  subtractName: action.subtractName,
  restore: action.restore
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
