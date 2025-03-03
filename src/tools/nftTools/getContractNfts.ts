import Moralis from "moralis";
import {ToolConfig} from '../allTools';

export const getContractNftsTool: ToolConfig<{ contractAddress: string }> = {
  definition: {
    type: "function",
    function: {
      name: "getContractNfts",
      description: "Fetches all NFTs from a given contract address.",
      parameters: {
        type: "object",
        properties: {
          contractAddress: { type: "string", description: "Contract address to fetch NFTs from" }
        },
        required: ["contractAddress"]
      }
    }
  },

  handler: async ({ contractAddress }) => {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    const response = await Moralis.EvmApi.nft.getContractNFTs({
      address: contractAddress,
      format: "decimal",
      normalizeMetadata: true
    });
    
    return {
      nfts: response.raw || []
    };
  }
};
