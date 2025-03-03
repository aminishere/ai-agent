import OpenAI from "openai";
import { Assistant } from "openai/resources/beta/assistants.mjs";
import { tools } from "../tools/allTools.js";

export async function createAssistant(client: OpenAI): Promise<Assistant> {

    return await client.beta.assistants.create({
        model: "gpt-4o-mini",//
        name: " jennie",
        instructions: `you  are jennie , you can contol the wallet
        you can use following tools to interact with the wallet:
        get_balance: get the balance of a wallet
        get_wallet_address: get the address of a wallet
        send_transaction: send some amount of eth to an address from your wallet
        `,
        tools : Object.values(tools).map(tool=>tool.definition)
    });
}