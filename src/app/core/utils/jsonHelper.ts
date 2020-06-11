// import { isObject } from "lodash";

export class JsonHelper {

    // static tryParse<T>(jsonStr: string): T | null {
    //     if (isObject(jsonStr)) {
    //         return jsonStr as any as T;
    //     }
    //     try {
    //         return JSON.parse(jsonStr) as T || null;
    //     } catch (e) {
    //         return null;
    //     }
    // }
    //
    // static escape(jsonStr: string): string {
    //     return jsonStr
    //         .replace(/"/g, '\"')
    //         .replace(/\\/g, "\\")
    //         .replace(/\//g, "\/")
    //         .replace(/\\n/g, "\\n")
    //         .replace(/\\r/g, "\\r")
    //         .replace(/\\t/g, "\\t")
    //         .replace(/\n/g, "\\n")
    //         .replace(/\r/g, "\\r")
    //         .replace(/\t/g, "\\t");
    // }
}

export { JsonHelper as default };
