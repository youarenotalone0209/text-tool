import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConversionComponent } from './conversion/conversion.component';
import { TextCompareComponent } from './text-compare/text-compare.component';

@NgModule({
	declarations: [
		AppComponent,
		ConversionComponent,
		TextCompareComponent
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
