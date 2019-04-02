
import React, {Component} from 'react';
import { List, Image, Icon } from 'semantic-ui-react'
import Menu from './Menu'

class Investment extends Component {
    setView(view, viewOptions = {}) {
        const {emitter} = this.props.services;
        emitter.emit('setView', view, viewOptions);
    }

  render() {
    return (
        <div>
            <div className="wallet-header">
                <div style={{fontSize:'16px',lineHeight:'32px'}}>24hrs Earnings</div>
                <div style={{fontSize:'22px',lineHeight:'44px'}}>+ $32.11</div>
                <div style={{fontSize:'16px',lineHeight:'32px'}}>$4613.04</div>
            </div>
            <List divided verticalAlign='middle' style={{padding:'16px'}}>
                <List.Item style={{padding: '16px 0'}} onClick={this.setView.bind(this,'InvestmentDetail',{})}>
                    <List.Content floated='left' style={{
                            color: 'rgb(9,82,220)',
                            fontSize: '16px',
                            lineHeight: '32px'
                    }}>4.15%</List.Content>
                    <Image avatar src={require('../img/dai.svg')} />
                    <List.Content>
                        <div style={{fontSize:'16px'}}>DAI</div>
                        <div style={{fontSize:'12px',color:'grey'}}>Compound</div>
                    </List.Content>
                    <List.Content floated='right'>
                        <div style={{fontSize:'16px',color:'red'}}>-$12.34</div>
                        <div style={{fontSize:'12px',color:'grey'}}>123.34DAI</div>
                    </List.Content>
                </List.Item>
                <List.Item style={{padding: '16px 0'}} onClick={this.setView.bind(this,'InvestmentDetail',{})}>
                    <List.Content floated='left' style={{
                            color: 'rgb(9,82,220)',
                            fontSize: '16px',
                            lineHeight: '32px'
                    }}>4.15%</List.Content>
                    <Image avatar src={require('../img/eth.svg')} />
                    <List.Content>
                        <div style={{fontSize:'16px'}}>ETH</div>
                        <div style={{fontSize:'12px'}}>Compound</div>
                    </List.Content>
                    <List.Content floated='right'>
                        <div style={{fontSize:'16px',color:'green'}}>+$12.34</div>
                        <div style={{fontSize:'12px',color:'grey'}}>123.34ETH</div>
                    </List.Content>
                </List.Item>
            </List>
            <div style={{position:'relative',padding:'16px',height: '100px'}}>
                <div className="add_btn" onClick={this.setView.bind(this,'InvestmentAdd')}>
                    <Icon name='plus' />
                </div>
            </div>
            <div style={{fontSize:'12px',color:'grey',padding: '16px 25%'}}>
            You dont have any investment yet. click the button above to create your first portfolio.
            </div>
            <Menu setView={this.setView.bind(this)} />
        </div>
    )
  }
}

export default Investment;
