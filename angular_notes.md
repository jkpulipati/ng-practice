## Angular:

## Introduction
What is Angular
How is Angular different from AngularJS (1.6)
Angular basic's architecture (modules, components, directives, pipes, services, DI)

`Angular` is a single page application (SPA) framwork which was built on top of TypeScript.
Misko Hevery and Adam Abrons are started it
Which is maintained by GOOGLE
It has huge community and developer support in stack overflow


## Angular CLI

ng new app_name

## components:

angular is a component based architecture, which means that whatever you see in browser is a component
component consists of the following parts
A typescript class is called component class
A html file is called template of the component
an optional css file for the styling of the component

Modules
Components
Services
Directives
Pipes
DI

## creating a component:

	ng generate component component_name
	
	ng g c product

	import { Component, OnInit } from '@angular/core';

	@Component({
		selector: 'app-prouct',
		//templateUrl: './product.component.html',
		template: `
			<div></div>
		`
		styleUrls: ['./product.component.css']
	})
	export class ProductComponent implements OnInit {
		constructor() {}

		ngOnInit() {}
	}

	
## component metadata:

	@Component is a decorator which gives more information to angular compiler saying that this is a component
	please provide the features of it.

	The most reused properties are as follows

	template
	templateUrl
	styles
	styleUrls
	providers
	selector
	encapsulation
	changeDetection
	animations



## Data Binding:

    `one way DB`/Interpolation Binding
        ts - html {{name}}

    `two way DB`/property binding
        ts - html [name]="jk"



## Directives
   
   `structural Directives` -- *ngIf, *ngFor, *ngSwitch
   `attribute Directives`
