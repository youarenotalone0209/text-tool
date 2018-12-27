import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextToolComponent } from './text-tool/text-tool.component';

@NgModule({
	declarations: [
		AppComponent,
		TextToolComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		DemoMaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
