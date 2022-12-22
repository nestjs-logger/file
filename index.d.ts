/// <reference types="node" />
import type { LogLevel, LoggerService } from '@nestjs/common';
import { WriteStream } from 'fs';
export declare type Options = {
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
declare type Streams = {
    [key: string]: WriteStream;
};
export declare class FileLogger implements LoggerService {
    protected options: Options;
    protected streams: Streams;
    constructor(options: Options);
    protected createPath(level: LogLevel): string;
    protected write(fileName: string, data: string): void;
    log(message: any, ...optionalParams: any[]): void;
    error(message: any, ...optionalParams: any[]): void;
    warn(message: any, ...optionalParams: any[]): void;
    debug(message: any, ...optionalParams: any[]): void;
    verbose(message: any, ...optionalParams: any[]): void;
    static create(options: Options): FileLogger;
}
export {};
