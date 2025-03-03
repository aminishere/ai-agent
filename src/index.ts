import 'dotenv/config';
import OPENAI from 'openai';
import { createAssistant } from './openai/createAssistant';
import { createThread } from './openai/createThread';
import { createRun } from './openai/createRun';
import { performRun } from './openai/performRun';

async function main() {
    
    const client =new OPENAI();
    const message = "Hello, jenni can you get your wallet balance! here is ur wallet address: 0xe90084C300A9e20d36BE630A8A13A2833aDE432f";
    const assistant = await createAssistant(client);
    const thread = await createThread(client, message);
    const run= await createRun(client, thread, assistant.id);
    const result = await performRun(run, client, thread);
    console.log(result);
}

main();