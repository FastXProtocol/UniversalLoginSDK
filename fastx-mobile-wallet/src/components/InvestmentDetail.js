


import React, {Component} from 'react';
import { Grid, Image, Header, Card, Icon } from 'semantic-ui-react'

class InvestmentDetail extends Component {
  render() {
    const { viewParameters, setView } = this.props

    return (
        <div style={{backgroundColor:'rgb(187,187,187)',height:'100%'}}>
            <div className="page-header">
                <a className="button" onClick={setView.bind(this, 'Investment')}>
                <Icon name="chevron left" />
                Back
                </a>
                XXX
            </div>
            <div style={{height: '100px',backgroundColor:'#333'}}>

            </div>
            <Card.Group style={{padding:'16px'}}>
                <Card style={{width:'100%'}}>
                    <Card.Content>
                        <Card.Header>
                            <Image avatar src={require('../img/eth.svg')} />
                            ETH
                        </Card.Header>
                        <Card.Description>
                            <div style={{textAlign:'center',padding:'16px'}}>
                                <Header as="h2">+ $12.34</Header>
                                <span>Total interest Accured</span>
                            </div>
                            <Grid columns={2} textAlign='center'>
                                <Grid.Column>
                                    <div>  
                                        <div style={{fontSize:'16px',color:'green'}}>4.15%</div>
                                        <div style={{fontSize:'12px',color:'grey'}}>ARP</div>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div>  
                                        <div style={{fontSize:'16px'}}>$46.07</div>
                                        <div style={{fontSize:'12px',color:'grey'}}>$10k Est. Earnings</div>
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
  }
}

export default InvestmentDetail;
