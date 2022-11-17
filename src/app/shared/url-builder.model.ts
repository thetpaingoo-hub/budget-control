import { QueryStringParameter } from "./query-string-parameter.model";


export class UrlBuilder {
    public url!: string;
    public queryString!: QueryStringParameter;

    constructor() {}

    public set(baseUrl: string, action: string, queryString?: QueryStringParameter): void {
        this.url = [baseUrl, action].join('/');
        this.queryString = queryString || new QueryStringParameter();
    }

    public toString(): string {
        const qs: string = this.queryString ? this.queryString.toString() : '';
        return qs ? `${this.url}?${qs}` : this.url;
    }
}
