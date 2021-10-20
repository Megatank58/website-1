import { rm } from 'fs/promises';

const rootDir = new URL('../', import.meta.url);
const documentationDir = new URL('docs/Documentation/', rootDir);

const docusaurusOutput = new URL('.docusaurus/', rootDir);

/** @type {import('node:fs').RmOptions} */
const rmOptions = { recursive: true, force: true };

await Promise.all([
	rm(docusaurusOutput, rmOptions), //
	rm(documentationDir, rmOptions)
]);
