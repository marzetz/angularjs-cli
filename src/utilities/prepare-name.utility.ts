import {ICommandNames} from "./data-enums-interfaces.utility";

export function prepareNameUtility(name: string): ICommandNames {
    return {
        camel: toCamel(name),
        snake: toSnake(name),
        kebap: toKebap(name),
        capitalized: toCapitalized(name)
    };
}

function splitOriginalName(name: string) {
    return name.split(/(?=[A-Z])|[^\w\s]/g);
}

function toCamel(name: string) {
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

function toCapitalized(name: string) {
    const splitted = splitOriginalName(name);
    return splitted.map(value => {
        return value.toUpperCase();
    }).join('_');
}

