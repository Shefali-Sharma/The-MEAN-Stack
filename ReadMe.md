# The MEAN Stack

## Installation:
### Installing NodeJs:
Download and Install NodeJs:
```
https://nodejs.org/en/download/
```

### Installing Angular:
```
sudo npm install -g @angular/cli

ng new <app_name>

cd <app_name>

ng serve
```
* ```-g```: this flag is used to indicate that we want to install angular for the entire system.
* ```<app_name>```: Name of the app that you want to give
* ```serve```: Launch the angular app (single page) to localhost. 

### Installing IDE

Download Visual Studio Code from ```code.visualstudio.com``` and install it. 

### Visual Studio - Extentions

* Open your project.
* Under 'View' open 'Extentions'
* Search for 'Angular Essentials' and install the extention

### ngModel
- It is a 2-way binding feature which binds an object such that it can directly accessed/referenced using that value.

### Installing Angular Materials

```ng add @angular/material```
#### Documentation: 
* Go to: ```https://material.angular.io/```
* Click on ```Components``` tab

#### Themes and Updates
This command adds a field in ```package.json``` for the added angular materials. It also adds ```styles``` in angular.json. 

By default the pre-built theme is ```indigo-pink.css```. But this can be updated.
To see the available pre-built-themes, go to:
* node_modules/@angular/material/prebuilt-themes

