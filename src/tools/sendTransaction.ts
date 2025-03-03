import {Address, parseEther, AccessList} from 'viem';
import {createViemWalletClient} from '../viem/createViemWalletClient';
import { ToolConfig } from './allTools';

interface sendTransactionArgs{
    to: Address;
    value?: string;
}

export const sendTransactionTool: ToolConfig<sendTransactionArgs> ={
    definition:{
        type: 'function',
        function:{
            name: 'send_transaction',
            description: 'Send test to an address',
            parameters: {
                type: 'object',
                properties: {
                    to:{
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'The recipient address',
                    },
                    value:{
                        type: 'string',
                        description: 'The amt of testnet to be send',
                        optional: true,
                    }
                }, required : ['to']
            }

        }
    },
    handler: async({to,value}: sendTransactionArgs)=>{
        try{
            const walletClient = createViemWalletClient();

            const hash= await walletClient.sendTransaction({
                to,
                value: value? parseEther(value): undefined,
            });
            return hash;
        }catch(error){
            throw new Error(
                `Failed to send transaction: ${error instanceof Error? error.message: 'unknown error'}`
            )
        }
    }
};
