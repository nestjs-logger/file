import type { LogLevel, LoggerService } from '@nestjs/common';
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
export declare class FileLogger implements LoggerService {
    protected options: Options;
    constructor(options: Options);
    protected createPath(level: LogLevel): string;
    log(message: any, ...optionalParams: any[]): void;
    error(message: any, ...optionalParams: any[]): void;
    warn(message: any, ...optionalParams: any[]): void;
    debug(message: any, ...optionalParams: any[]): void;
    verbose(message: any, ...optionalParams: any[]): void;
    static create(options: Options): FileLogger;
}
