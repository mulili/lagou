import React from 'react';
import PropTypes from 'prop-types';
import { Button, List } from 'antd-mobile';
import './App.less';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onAddNames = () => {
    const { store } = this.props;
    store.dispatch({
      type: 'Add',
      payload: `xiaoming${Math.random()}`,
    });
  }

  onSubtractNames=() => {
    const { store } = this.props;
    store.dispatch({
      type: 'Subtract',
    });
  }

  onRestore=() => {
    const { store } = this.props;
    store.dispatch({
      type: 'Restore',
    });
  }

  render() {
    const { Item } = List;
    const { store } = this.props;
    return (
      <div className="App">
        <Button
          type="primary"
          onClick={this.onAddNames}
        >
        addName
        </Button>
        <Button
          type="warning"
          onClick={this.onSubtractNames}
        >
        subtractName
        </Button>
        <Button
          type="default"
          onClick={this.onRestore}
        >
        Restore
        </Button>

        <List
          renderHeader={() => 'Name list start'}
          renderFooter={() => 'Name list end'}
        >
          {store.getState().nameList.map(key => (
            <Item
              type="Button"
              key={key}
            >
              {`Hello,${key},welcome to study`}
            </Item>
          ))}
        </List>

      </div>
    );
  }
}
App.propTypes = {
  store: PropTypes.shape.isRequired,
};

export default App;
