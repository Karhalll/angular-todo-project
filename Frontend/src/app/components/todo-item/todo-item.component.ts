import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

import { Task } from 'src/app/services/task-service.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
	styleUrls: ['./todo-item.component.scss'],
	animations: [
		trigger('fade', [
			state('void', style({ opacity: 0})),
			transition(':enter, :leave', [
				animate(3000)
			])
		])
	]
})
export class TodoItemComponent {
	@Input() task: Task;
	
	editMode: boolean = false;
	
	setEditMode(state: boolean): void {
		this.editMode = state;
	}

	confirmChanges(title: string, project: string): void {
		this.task.title = title;
		this.task.project = project;

		this.setEditMode(false);
	}

	setCompleted(state: boolean) {
		this.task.done = state;
	}

	toggleCompleted() {
		this.task.done = !this.task.done;
	}

	deleteTask(): void {
		this.task.deleted = true;
	}
}
