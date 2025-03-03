import Moralis from "moralis";
import {ToolConfig} from './allTools';

export const getTokenBalanceTool: ToolConfig<{ address: string; chain: string }> = {
  definition: {
    type: "function",
    function: {
      name: "getTokenBalance",
      description: "Fetches the ERC-20 token balance of a given address.",
      parameters: {
        type: "object",
        properties: {
          address: { type: "string", description: "Wallet address to fetch balance for" },
          chain: { type: "string", description: "Blockchain network (e.g., eth, polygon)" }
        },
        required: ["address", "chain"]
      }
    }
  },

  handler: async ({ address}) => {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    const response = await Moralis.EvmApi.token.getWalletTokenBalances({ address });
    
    return {
      balance: response.raw || "0"
    };
  }
};