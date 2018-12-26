import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionComponent } from './conversion/conversion.component';
import { TextCompareComponent } from './text-compare/text-compare.component';

const routes: Routes = [{
	path: 'conversion',
	component: ConversionComponent
}, {
	path: 'text-compare',
	component: TextCompareComponent
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }
