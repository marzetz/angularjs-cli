import {ICommandNames} from "./data-enums-interfaces.utility";

export function prepareNameUtility(name: string): ICommandNames {
    return {
        lowerCamel: toLowerCamel(name),
        upperCamel: toUpperCamel(name),
        snake: toSnake(name),
        kebap: toKebap(name),
        allCaps: toAllCaps(name)
    };
}

function splitOriginalName(name: string) {
    return name.split(/(?=[A-Z])|[^\w\s]/g);
}

function toLowerCamel(name: string) {
    let lowerCamel = toUpperCamel(name);
    return `${lowerCamel[0].toLowerCase()}${lowerCamel.slice(1)}`
}

function toUpperCamel(name: string) {
    const splitted = splitOriginalName(name);
    return splitted.map(value => {
        return value.charAt(0).toUpperCase() + value.substr(1);
    }).join('');
}

function toSnake(name: string) {
    const splitted = splitOriginalName(name);
    return splitted.map(value => {
        return value.toLowerCase();
    }).join('_');
}

function toKebap(name: string) {
    const splitted = splitOriginalName(name);
    return splitted.map(value => {
        return value.toLowerCase();
    }).join('-');
}

function toAllCaps(name: string) {
    const splitted = splitOriginalName(name);
    return splitted.map(value => {
        return value.toUpperCase();
    }).join('_');
}

