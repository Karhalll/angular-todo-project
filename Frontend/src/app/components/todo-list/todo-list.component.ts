import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Task, TaskService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
	@Input() todos: Task[];

  constructor(private _taskService: TaskService) { }

  ngOnInit(): void {
		this.todos = this._taskService.todos;
	}
}
