import Moralis from "moralis";
import { ToolConfig } from '../allTools';

export const getNftDetailsTool: ToolConfig<{ tokenAddress: string; tokenId: string; chain: string }> = {
  definition: {
    type: "function",
    function: {
      name: "getNftDetails",
      description: "Fetches the details of a specific NFT by token address and token ID.",
      parameters: {
        type: "object",
        properties: {
          tokenAddress: { type: "string", description: "Contract address of the NFT" },
          tokenId: { type: "string", description: "Token ID of the NFT" },
          chain: { type: "string", description: "Blockchain network (e.g., eth, polygon)" }
        },
        required: ["tokenAddress", "tokenId", "chain"]
      }
    }
  },

  handler: async ({ tokenAddress, tokenId}) => {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    const response = await Moralis.EvmApi.nft.getMultipleNFTs({
      address: tokenAddress,
      tokenId: tokenId,
      
    });

    return {
      metadata: response.raw
    };
  }
};
