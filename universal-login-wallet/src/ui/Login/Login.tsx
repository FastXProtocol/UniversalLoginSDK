import React from 'react';
import WalletSelector from './WalletSelector';
import Logo from './../../assets/logo-with-text.svg';
import Modal from '../Modals/Modal';
import {useServices, useRouter} from '../../hooks';
import {DEFAULT_LOCATION, Procedure} from 'universal-login-commons';
import {utils} from 'ethers';
import { connect } from 'http2';

const MINIMUM_TOPUP_AMOUNT = utils.parseEther('0.005');

interface LoginProps {
  setAuthorized: Procedure;
  location? : {state: {from: {pathname : string}}};
}

const Login = ({setAuthorized, location} : LoginProps) => {
  const {createWallet, modalService, balanceService, connectToWallet} = useServices();
  const {history} = useRouter();
  const from = location && location.state ? location.state.from : DEFAULT_LOCATION;
  let unsubscribe: Procedure;

  const onCreateCLick = async (name: string) => {
    await createWallet(name);
    modalService.showModal('address');
    unsubscribe = balanceService.subscribe(onBalanceChange);
  };

  const onConnectionClick = async (name: string) => {
    await connectToWallet(name);
    modalService.showModal('waiting');
  };

  const onBalanceChange = (amount: utils.BigNumber) => {
    if (amount.gte(MINIMUM_TOPUP_AMOUNT)) {
      unsubscribe();
      setAuthorized();
      history.push(from);
    }
  };
  return(
    <div className="login">
      <img src={Logo} alt="Logo" className="login-logo"/>
      <p className="login-subtitle">The best place to put your money anywhere on the planet. Universal finance for everyone.</p>
      <WalletSelector  onCreateClick={(name: string) => onCreateCLick(name)} onConnectionClick={onConnectionClick}/>
      <Modal />
    </div>
  );
};

export default Login;
