import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
	{ 
		path: "", 
		component: AppComponent, 
		children: [
			{ path: "", redirectTo: "todoList", pathMatch: "full" },
			{ path: "todoList", component: TodoListComponent }
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }