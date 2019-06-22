const expect = require('chai').expect;
import {promisify} from "util";
import * as fs from "fs";

const readDirectory = promisify(fs.readdir);

describe('contents text files', async () => {
    const filesList = await readDirectory('./src/contents/');
    const listOfContents = [
        'app-imports.css.content',
        'app-imports.less.content',
        'app-imports.scss.content',
        'component-html.content',
        'component-js.content',
        'component-style.content',
        'config.content',
        'constant-js.content',
        'directive-html.content',
        'directive-js.content',
        'factory-js.content',
        'filter-js.content',
        'gitignore.content',
        'index.content',
        'module.content',
        'package.css.content',
        'package.less.content',
        'package.scss.content',
        'provider-js.content',
        'root-component-html.content',
        'routes.content',
        'service-js.content',
        'styles-components.css.content',
        'styles-components.less.content',
        'styles-components.scss.content',
        'styles.css.content',
        'styles.less.content',
        'styles.scss.content',
        'vendor-imports.content',
        'webpack-config.css.content',
        'webpack-config.less.content',
        'webpack-config.scss.content',
        'webpack-server-config.content'
    ];

    it('should count all contents files', () => {
        expect(filesList.length).to.be.equal(listOfContents.length);
    });

    filesList.forEach((fileName) => {
        it(`should contain ${fileName}`, () => {
            expect(listOfContents.indexOf(fileName)).to.be.greaterThan(-1);
        });
    });
});
