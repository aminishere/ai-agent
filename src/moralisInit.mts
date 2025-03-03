import Moralis from "moralis";

export async function startMoralis() {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
    
  });
}