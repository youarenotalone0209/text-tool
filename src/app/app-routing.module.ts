import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextToolComponent } from './text-tool/text-tool.component';

const routes: Routes = [{
	path: '',
	component: TextToolComponent
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }
