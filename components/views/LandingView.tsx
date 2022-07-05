import { useEffect, useState } from 'react'
import Cookies from 'js-cookie' 
import Web3 from 'web3';
import Web3Token from 'web3-token';
import faunadb, { 
  Get,
  Paginate,
  Documents,
  Collection,
  Lambda,
  Map
} from 'faunadb';


export const LandingView = ({ isLoggedIn, setIsLoggedIn }) => {

    useEffect(() => {
        const authToken = Cookies.get('fauna-auth');
        if(authToken) {
          setIsLoggedIn(true)
        }
      }, []);
    
      const login = async () => {
        const web3 = new Web3(window.ethereum);
        try {
          const accounts = await window.ethereum.send(
            "eth_requestAccounts"
          )
          console.log('accounts', accounts.result[0]);
          const address = accounts.result[0];
          const signed_msg = await Web3Token.sign(msg => web3.eth.personal.sign(msg, address), '1h');
          const response = await fetch('api/user', {
            method: 'POST',
            body: JSON.stringify({
              signed_msg
            }),
          });
    
          if(response.status !== 200) {
            return;
          }
    
          const { token } = await response.json();
          const one_hour = new Date(new Date().getTime() +  3600 * 1000) // sign token for 1 hour
          Cookies.set('fauna-auth', token, { expires: one_hour })
          setIsLoggedIn(true)
        } catch (error) {
          alert('Please Install MetaMask Wallet')
          return;
        }
    }
    
      const logout = () => {
        Cookies.remove('fauna-auth')
        setIsLoggedIn(false)
      }

    return (
        <div className="flex-grow">
            <button onClick={login} className="bg-red-500 p-4 rounded-xl">
                Log in with Metamask
            </button>
        </div>
    )
}