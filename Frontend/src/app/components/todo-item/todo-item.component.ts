import { Component, Input, OnInit } from '@angular/core';

import { Task } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
	@Input() task: Task;
	editingMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
	}
	
	editMode(state: boolean): void {
		this.editingMode = state;
	}

	confirmChanges(title: string, project: string): void {
		this.task.title = title;
		this.task.project = project;

		this.editMode(false);
	}

	isCompleted(state: boolean) {
		this.task.done = state;
	}

	deleteTask(): void {
		this.task.deleted = true;
	}
}