import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/app.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
	@Input() todos: Task[];

  constructor() { }

  ngOnInit(): void {
  }

}
