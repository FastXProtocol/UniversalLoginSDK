import UniversalLoginSDK from 'universal-login-sdk';

const connectToWallet = (sdk: UniversalLoginSDK, walletService: any) => async (name: string) => {
  const contractAddress = await sdk.walletContractExist(name) as string;
  const privateKey = await sdk.connect(contractAddress);
  walletService.privateKey = privateKey;
  return privateKey;
};
export default connectToWallet;
