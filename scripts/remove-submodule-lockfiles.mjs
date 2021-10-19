import { opendir, rm } from 'node:fs/promises';
import { join } from 'node:path';

async function* scan(path, cb) {
	const dir = await opendir(path);

	for await (const item of dir) {
		const file = join(dir.path, item.name);
		if (item.isFile()) {
			if (cb(file)) {
				yield file;
			}
		} else if (item.isDirectory()) {
			if (!illegalFoldersToNavigate.includes(item.name)) {
				yield* scan(file, cb);
			}
		}
	}
}

const projectsDir = new URL('../projects', import.meta.url);
const cb = (path) => path.endsWith('yarn.lock');

const illegalFoldersToNavigate = [
	'.devcontainer',
	'.git',
	'.github',
	'.vscode',
	'.yarn',
	'dist',
	'guides',
	'lib',
	'node_modules',
	'prebuild',
	'scripts',
	'src',
	'tests'
];
const paths = [];

for await (const path of scan(projectsDir, cb)) {
	paths.push(path);
}

await Promise.all(paths.map((path) => rm(path, { force: true, recursive: true })));
