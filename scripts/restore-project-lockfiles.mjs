import { readdir } from 'fs/promises';
import { execSync } from 'node:child_process';

const projectsDir = new URL('../projects/', import.meta.url);
const projects = (await readdir(projectsDir)).map((dirName) => new URL(dirName, projectsDir));

const yarnLockDelete = /deleted:\s+ yarn.lock/;

for (const project of projects) {
	const res = execSync(`git status`, { cwd: project, encoding: 'utf8' });
	if (yarnLockDelete.test(res)) {
		execSync(`git checkout -q yarn.lock`, { cwd: project });
	}
}
