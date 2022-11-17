export class QueryStringParameter {
    private paramsAndValues: string[];

    constructor() {
        this.paramsAndValues = [];
    }

    public push(key: string, value: Object): void {
        value = encodeURIComponent(value.toString())
        .replace(/%2B/gi, '+')
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%26/gi, '&')
        .replace(/%2F/gi, '/');
        this.paramsAndValues.push([key, value].join('='));
    }

    public toString = (): string => this.paramsAndValues.join('&');
}
