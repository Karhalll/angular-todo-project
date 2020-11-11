import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
	{ path: "", redirectTo: "todoList", pathMatch: "full"},
	{ path: "todoList", component: TodoListComponent },
	{ path: "createTodo", component: CreateTodoComponent }	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }