import {promisify} from "util";
import * as path from "path";
import * as fs from "fs";

export class Tools {
    public static path = path;
    public static exists = promisify(fs.exists);
    public static readFile = promisify(fs.readFile);
    public static mkdir = promisify(fs.mkdir);
    public static writeFile = promisify(fs.writeFile);
    public static appendFile = promisify(fs.appendFile);
}
