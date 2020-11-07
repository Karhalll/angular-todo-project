import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { EditIconComponent } from './components/icons/edit-icon/edit-icon.component';
import { DeletIconComponent } from './components/icons/delet-icon/delet-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
		CreateTodoComponent,
		EditIconComponent,
		DeletIconComponent,
  ],
  imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		ReactiveFormsModule,
		MatIconModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
