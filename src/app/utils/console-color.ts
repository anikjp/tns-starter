const colorReset = '\x1b[0m';
const colorDim = '\x1b[2m';

const colorBlack = '\x1b[30m';
const colorRed = '\x1b[31m';
const colorMagenta = '\x1b[35m';
const colorCyan = '\x1b[36m';
const colorGreen = '\x1b[32m';
const colorBlue = '\x1b[34m';

[
    ['warn', colorMagenta],
    ['error', colorRed],
    ['log', colorCyan]
].forEach((pair) => {
    // tslint:disable-next-line:one-variable-per-declaration
    const method = pair[0], reset = colorReset, color = colorBlack + pair[1];
    console[method] = console[method].bind(console, color, method.toUpperCase(), reset);
});

interface Console {
    errorColor(message?: any, ...optionalParams: Array<any>): void;
    logColor(message?: any, ...optionalParams:  Array<any>): void;
    warnColor(message?: any, ...optionalParams:  Array<any>): void;

    logNativeScript(message?: any, ...optionalParams:  Array<any>): void;
    logIos(message?: any, ...optionalParams:  Array<any>): void;
    logAndroid(message?: any, ...optionalParams:  Array<any>): void;
}

console.logNativeScript = (message?: any, ...optionalParams:  Array<any>) => {
    console.log(colorBlue, 'NATIVESCRIPT EVENT: ' + message, colorReset);
};
console.logIos = (message?: any, ...optionalParams:  Array<any>) => {
    console.log(colorDim, 'IOS EVENT:           ' + message, colorReset);
};
console.logAndroid = (message?: any, ...optionalParams:  Array<any>) => {
    console.log(colorGreen, 'ANDROID EVENT:     ' + message, colorReset);
};

console.logColor = (message?: any, ...optionalParams:  Array<any>) => {
    console.log(colorCyan, message, colorReset);
};
console.errorColor = (message?: any, ...optionalParams:  Array<any>) => {
    console.error(colorRed, message, colorReset);
};
console.warnColor = (message?: any, ...optionalParams:  Array<any>) => {
    console.warn(colorMagenta, message, colorReset);
};
