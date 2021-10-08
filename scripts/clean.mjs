import { rm } from 'fs/promises';

const rootDir = new URL('../', import.meta.url);
const docusaurusOutput = new URL('.docusaurus/', rootDir);

await rm(docusaurusOutput, { recursive: true, force: true });
