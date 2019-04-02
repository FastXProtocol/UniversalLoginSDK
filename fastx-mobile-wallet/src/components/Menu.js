import React, {Component} from 'react';
import { Button } from 'semantic-ui-react'

class Menu extends Component {
  render() {
    const { setView } = this.props;
    return (
        <div className="footer">
            <Button.Group widths='3' color='blue'>
              <Button size="huge" onClick={setView.bind(this, 'MainScreen')}>Wallet</Button>
              <Button size="huge" onClick={setView.bind(this, 'Investment')}>Investment</Button>
              <Button size="huge" onClick={setView.bind(this, 'Account')}>Account</Button>
            </Button.Group>
        </div>
    )
  }
}

export default Menu;
