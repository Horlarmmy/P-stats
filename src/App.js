import { render } from '@testing-library/react';
import './App.css';
import { useState } from 'react';
import { ERC20Transfers } from '@covalenthq/web3-components';
import { TokenBalances } from '@covalenthq/web3-components';
import { Transactions } from '@covalenthq/web3-components';
import { Input } from 'antd';
import PieRechartComponent from './components/Tokenbalances'
import Portfolio from './components/Portfolio';


const { Search } = Input
const FormControls = ({onSubmit}) => {
    return (
        <Search placeholder='Enter Your Wallet Address' onSearch={onSubmit} enterButton
        style={{
            width: 500,
        }}/>
    )
}
function App() {
    const [walletAddress, setWalletAddress] = useState(null)
    const onSubmit = (values) => {
        setWalletAddress(values)
    }
    if (walletAddress) {
        return (
            <>
            <div style={{width: '80%', margin: 'auto'}}>
            <h1> P-Stats</h1>
            <br/>
            <p>Wallet Address: &nbsp; {walletAddress} </p>
            <br/>
            <Portfolio wallet_addr={walletAddress} />
            <br/>
            <PieRechartComponent />
            <br/>
            <h2> Token Balances </h2>
            <TokenBalances address={walletAddress} chainId={9001}/>
            <br/>
            <h2> Token Transfers </h2>
                <ERC20Transfers address={walletAddress} chainId={9001}/>
            <br/>
            <br/>
            <h2> Transactions</h2>
            <Transactions address={walletAddress} chainId={9001}/>

    

            </div>
            </>
        )
    } else {
        return (
            <>
            <div style={{width: '80%', margin: 'auto'}}>
            <h1> P-Stats</h1>
            <br/>
                <FormControls onSubmit={onSubmit}/>
                <br/>
                <p>Your Total worth at your fingertip...</p>

            </div>
            </>
        )
    }

}

export default App;
