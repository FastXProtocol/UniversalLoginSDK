
import React, {Component} from 'react';
import { List, Grid, Image, Button } from 'semantic-ui-react'

class Wallet extends Component {
  render() {
    const { setView } = this.props;
    return (
        <div>
            <div className="wallet-header">
                <Grid columns={2} textAlign="center">
                    <Grid.Row>
                        <Grid.Column>
                            <div className="title">Total Assets</div>
                            <div className="content">$4602.07</div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="title">24hrs Earnings</div>
                            <div className="content">$ 32.11</div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <a className="button">Send</a>
                        </Grid.Column>
                        <Grid.Column>
                            <a className="button">Receive</a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            <div style={{padding: '2rem'}}>
                <List divided verticalAlign='middle'>
                    <List.Item style={{padding: '16px 0'}} onClick={setView.bind(this, 'TokenDetail', {token:'ETH'})}>
                        <List.Content floated='right'>
                            <div style={{'lineHeight': '28px'}}>$12.34</div>
                        </List.Content>
                        <Image avatar src={require('../img/eth.svg')} />
                        <List.Content>20.2 ETH</List.Content>
                    </List.Item>
                    <List.Item style={{padding: '16px 0'}} onClick={setView.bind(this, 'TokenDetail', {token:'DAI'})}>
                        <List.Content floated='right'>
                            <div style={{'lineHeight': '28px'}}>$12.34</div>
                        </List.Content>
                        <Image avatar src={require('../img/dai.svg')} />
                        <List.Content>110.13 DAI</List.Content>
                    </List.Item>
                </List>
            </div>
        </div>
    )
  }
}

export default Wallet;
