import { argv, exit } from 'node:process';
import { crawlPage } from './crawl.js';

function main() {
	if (argv.length < 3) {
		console.log(`Please enter a base URL`);
		process.exit = 1;
	} else if (argv.length > 3) {
		console.log(`Too many arguments`);
		process.exit = 2;
	} else {
		console.log(`Started crawling at ${argv[2]}`);
		crawlPage(argv[2])
	}
}

main()
