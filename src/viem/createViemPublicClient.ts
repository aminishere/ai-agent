import { createPublicClient, http} from 'viem';
import { baseSepolia} from 'viem/chains';

//performing read opertion



export function createViemPublicClient(){

return createPublicClient({
    chain: baseSepolia,
    transport: http()
});
}