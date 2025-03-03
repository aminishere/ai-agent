import Moralis from "moralis";
import {ToolConfig} from '../allTools';

export const getWalletNftsTool: ToolConfig<{ address: string }> = {
  definition: {
    type: "function",
    function: {
      name: "getWalletNfts",
      description: "Fetches all NFTs owned by a given wallet address.",
      parameters: {
        type: "object",
        properties: {
          address: { type: "string", description: "Wallet address to fetch NFTs for" }
        },
        required: ["address"]
      }
    }
  },

  handler: async ({ address }) => {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      normalizeMetadata: true
    });
    
    return {
      nfts: response.raw || []
    };
  }
};
