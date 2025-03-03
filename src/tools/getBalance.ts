import {Address} from 'viem';
import {createViemPublicClient} from '../viem/createViemPublicClient';
import {ToolConfig} from './allTools';
import {formatEther} from 'viem';

interface GetBalanceArgs{
    wallet: Address;
}

export const getBalanceTool : ToolConfig<GetBalanceArgs>={
    definition:{
        type: 'function',
        function : {
            name: 'get_balance',
            description: 'Get the balance of a wallet',
            parameters: {
                type: 'object',
                properties:{
                    wallet:{
                        type: 'string',
                        pattern: '^0x[0-9a-fA-F]{40}$',
                        description: 'The walllet address to get the balance of',
                    }
                },
                required: ['wallet']
            }
        }
    },
    handler : async({wallet}) => {
        const publicClientClient = createViemPublicClient();
        const balance = await publicClientClient.getBalance({address: wallet});
        return formatEther(balance);
    }
}
