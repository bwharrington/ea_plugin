/** @ignore */
declare namespace lucid {
    export function executeCommand(name: string, params: any): any;
    export function listen(msg: any): void;
    export function getPackageId(): string;
    export function getVersion(): string;
}

/** @ignore */
declare namespace console {
    export function log(...args: any[]): void;
}
