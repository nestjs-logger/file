import type { LogLevel, LoggerService } from '@nestjs/common';
import { appendFileSync } from 'fs';
import { join } from 'path';
import { EOL } from 'os';
import dayjs from 'dayjs';

export type Options = {
	directory: string;
	/**
	 * File name without the extension
	 *
	 * Default: `nest`
	 */
	filename?: string;

	/**
	 * Default: `log`
	 */
	extension?: string;
};

export class FileLogger implements LoggerService {
	constructor(protected options: Options) {
		//
	}

	protected createPath(level: LogLevel) {
		const { directory, filename, extension } = this.options;

		return join(directory, `${filename ?? 'nest'}-${level}.${extension ?? 'log'}`);
	}

	log(message: any, ...optionalParams: any[]) {
		const data = JSON.stringify(
			{
				message,
				optionalParams,
			},
			null,
			'\t'
		);

		appendFileSync(this.createPath('log'), `[${dayjs().format('YYYY-MM-DD HH:mm:ss')}]${data}${EOL}`);
	}

	error(message: any, ...optionalParams: any[]) {
		const data = JSON.stringify(
			{
				message,
				optionalParams,
			},
			null,
			'\t'
		);

		appendFileSync(this.createPath('error'), `[${dayjs().format('YYYY-MM-DD HH:mm:ss')}]${data}${EOL}`);
	}

	warn(message: any, ...optionalParams: any[]) {
		const data = JSON.stringify(
			{
				message,
				optionalParams,
			},
			null,
			'\t'
		);

		appendFileSync(this.createPath('warn'), `[${dayjs().format('YYYY-MM-DD HH:mm:ss')}]${data}${EOL}`);
	}

	debug(message: any, ...optionalParams: any[]) {
		const data = JSON.stringify(
			{
				message,
				optionalParams,
			},
			null,
			'\t'
		);

		appendFileSync(this.createPath('debug'), `[${dayjs().format('YYYY-MM-DD HH:mm:ss')}]${data}${EOL}`);
	}

	verbose(message: any, ...optionalParams: any[]) {
		const data = JSON.stringify(
			{
				message,
				optionalParams,
			},
			null,
			'\t'
		);

		appendFileSync(this.createPath('verbose'), `[${dayjs().format('YYYY-MM-DD HH:mm:ss')}]${data}${EOL}`);
	}

	static create(options: Options) {
		return new FileLogger(options);
	}
}
