#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
	.argument("<string>", "string to log")
	.action((message: string) => {
		console.log(`Hello ${message}`);
	}).description("It says heelo");

program.command("add <numbers...>").action((numbers: string[]) => {
	const sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
	console.log(`Sum: ${sum}`);
}).description("Add numbers");


program.parse(process.argv);