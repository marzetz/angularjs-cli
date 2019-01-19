
# AngularJS CLI  

***AngularJS CLI*** is a command line interface for AngularJS.

## Prerequisites
- Node.js
- yarn
    
## Installation  
  
```shell  
npm install -g ajs-cli  
```  
  
## Creating new project  
  
  Type
  ```shell
  ajs new my-new-project
  ```
  and hit enter.
  That's it, your new AngularJS project is ready!

If you want to serve your new project:
```shell
cd my-new-project
yarn start
```

***Additional options:***

<table class="tg">
  <tr>
    <th class="tg-xldj">Name</th>
    <th class="tg-xldj">Alias</th>
    <th class="tg-xldj">Available values</th>
    <th class="tg-xldj">Default</th>
    <th class="tg-0pky">Description</th>
    <th class="tg-0pky">Example</th>
  </tr>
  <tr>
    <td class="tg-xldj"><i>style</i></td>
    <td class="tg-xldj"><i>-</i></td>
    <td class="tg-xldj"><i>css</i><br><i>less</i><br><i>scss</i></td>
    <td class="tg-xldj"><i>css</i></td>
    <td class="tg-0pky">Determines style extension of your new files schema</td>
    <td class="tg-0pky"><i>ajs g component --style scss</i></td>
  </tr>
  <tr>
    <td class="tg-xldj"><i>dependencies</i></td>
    <td class="tg-xldj"><i>d</i></td>
    <td class="tg-xldj"><i>true</i><br><i>false</i></td>
    <td class="tg-xldj"><i>true</i></td>
    <td class="tg-0pky">Determines whether project's dependencies should be installed on your new project init</td>
    <td class="tg-0pky"><i>ajs new my-new-project --dependencies false</i><br><br><i>ajs new my-new-project -d</i></td>
  </tr>
</table>

## Creating new files schema

When you are creating new files schema inside your project directory, all necessary files are imported to the files prepared for compilation (webpack). 
You can also use this command anywhere outside the project generated with AngularJS CLI, but your files will neither be imported nor compiled.

### Component
```shell
ajs generate component my-new-component
```
or 
```shell
ajs g component my-new-component
```

### Directive
```shell
ajs generate directive my-new-directive
```
or
```shell
ajs g directive my-new-directive
```

### Filter
```shell
ajs generate filter my-new-filter
```
or
```shell
ajs g filter my-new-filter
```

### Constant
```shell
ajs generate constant my-new-constant
```
or
```shell
ajs g constant my-new-constant
```

### Service
```shell
ajs generate service my-new-service
```
or
```shell
ajs g service my-new-service
```

### Provider
```shell
ajs generate provider my-new-provider
```
or
```shell
ajs g provider my-new-provider
```

### Factory
```shell
ajs generate factory my-new-factory
```
or
```shell
ajs g factory my-new-factory
```


***Additional options:***

<table class="tg">
  <tr>
    <th class="tg-xldj">Name</th>
    <th class="tg-xldj">Alias</th>
    <th class="tg-xldj">Available values</th>
    <th class="tg-xldj">Default</th>
    <th class="tg-0pky">Description</th>
    <th class="tg-0pky">Example</th>
    <th class="tg-0pky">Comments</th>
  </tr>
  <tr>
    <td class="tg-xldj"><i>style</i></td>
    <td class="tg-xldj"><i>-</i></td>
    <td class="tg-xldj"><i>css</i><br><i>less</i><br><i>scss</i></td>
    <td class="tg-xldj"><i>css</i></td>
    <td class="tg-0pky">Determines style extension of your new files schema</td>
    <td class="tg-0pky"><i>ajs g component --style scss</i></td>
    <td class="tg-0pky">- Works only with <i>component</i>;<br>- If you are generating new component inside your AngularJS CLI project directory and you already declared style extension on project init, this option will not work;</td>
  </tr>
  <tr>
    <td class="tg-xldj"><i>skip-import</i></td>
    <td class="tg-xldj"><i>s</i></td>
    <td class="tg-xldj"><i>true</i><br><i>false</i></td>
    <td class="tg-xldj"><i>false</i></td>
    <td class="tg-0pky">Determines whether created files will be imported to the files prepared for compilation</td>
    <td class="tg-0pky"><i>ajs g component --skip-import true</i><br><br><i>ajs g component -s</i></td>
    <td class="tg-0pky">- Import works only inside projects generated with AngularJS CLI;</td>
  </tr>
</table>

## Credits  
  
- Inspired by AngularCLI: [https://cli.angular.io/](https://cli.angular.io/)  
  
  
## TODO  
  
- Unit tests  

## LICENSE  
  
This project is licensed under the MIT license. [LICENSE](https://github.com/marzetz/angularjs-cli/blob/master/LICENSE)
