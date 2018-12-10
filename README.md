
# AngularJS CLI  

***AngularJS CLI*** is a command line interface for AngularJS.

## Prerequisites
- Node.js
- yarn
    
## Installation  
  
```shell  
npm install -g angularjs-cli  
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
| Name           | Available values    | Default | Description                                                                  | Example                                      |
|----------------|---------------------|---------|------------------------------------------------------------------------------|----------------------------------------------|
| `dependencies` | `true` `false`      | `true`  | Determines whether project's dependencies should be installed on your new project init | `ajs new my-new-project -dependencies=false` |
| `style`        | `css` `less` `scss` | `css`   | Sets styles extension in your new project                                    | `ajs new my-new-project -style=scss`         |

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
| Name          | Available values    | Default | Description                                                                             | Example                             | Comments                                                                                                                                                                                              |
|---------------|---------------------|---------|-----------------------------------------------------------------------------------------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `style`       | `css` `less` `scss` | `css`   | Determines style extension of your new files schema                                     | `ajs g component -style=scss`       | - Works only with `component`; - If you are generating new component inside your AngularJS CLI project directory and you already declared style extension on project init, this option will not work; |
| `skip-import` | `true` `false`      | `false` | Determines whether created files will be imported to the files prepared for compilation | `ajs g component -skip-import=true` | - Import works only inside projects generated with AngularJS CLI;                                                                                                                                     |

## Credits  
  
- Inspired by AngularCLI: [https://cli.angular.io/](https://cli.angular.io/)  
  
  
## TODO  
  
- Unit tests  

## LICENSE  
  
This project is licensed under the MIT license. [LICENSE](https://github.com/marzetz/angularjs-cli/blob/master/LICENSE)
  
