import React, {Component} from 'react';
import { Header, Grid, Tab, List, Icon } from 'semantic-ui-react'

const panes = [
    { menuItem: 'All Txs', render: () => <Tab.Pane attached={false}>
        <List divided verticalAlign='middle'>
            <List.Item style={{padding: '16px 0'}}>
                <List.Content floated='right'>
                    <div style={{'lineHeight': '28px'}}> + 12.34</div>
                </List.Content>
                <List.Content>
                    <h4>0x123....efgg31</h4>
                    <div>2019/04/01 16:42</div>
                </List.Content>
            </List.Item>
            <List.Item style={{padding: '16px 0'}}>
                <List.Content floated='right'>
                    <div style={{'lineHeight': '28px'}}> - 12.34</div>
                </List.Content>
                <List.Content>
                    <h4>0x123....efgg31</h4>
                    <div>2019/04/01 16:42</div>
                </List.Content>
            </List.Item>
        </List>
    </Tab.Pane> },
    { menuItem: 'Send', render: () => <Tab.Pane attached={false}></Tab.Pane> },
    { menuItem: 'Receive', render: () => <Tab.Pane attached={false}></Tab.Pane> },
]

class TokenDetail extends Component {
  render() {
    const { viewParameters, setView } = this.props

    return (
        <div>
            <div className="page-header">
                <a className="button" onClick={setView.bind(this, 'MainScreen')}>
                <Icon name="chevron left" />
                Back
                </a>
                {viewParameters.token}
            </div>
            <Header as='h2' textAlign="center">
                20.2 {viewParameters.token}
                <Header.Subheader>$4600.24</Header.Subheader>
            </Header>
            <Grid columns={2} className="income-box">
                <Grid.Column>
                    <div>  
                        <div style={{fontSize:'16px'}}>4.15%</div>
                        <div style={{fontSize:'12px'}}>ARP</div>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div style={{fontSize:'16px',lineHeight: '38px'}}>Invest Now</div>
                </Grid.Column>
            </Grid>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} className="custom-tab trade"/>
        </div>
    )
  }
}

export default TokenDetail;
