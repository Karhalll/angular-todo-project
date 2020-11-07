import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Task, TaskService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
	taskForm: FormGroup;

  constructor(
		private _taskService: TaskService,
		private _formBuilder: FormBuilder
		) {
		this.taskForm = this._formBuilder.group({
			title: '',
			project: '',
			done: false, 
			deleted: false
		});
	 }

  ngOnInit(): void {
	}
	
	onSubmit() {
		const newTask: Task = this.taskForm.value;
		this._taskService.addTask(newTask);

		this.taskForm.reset();
	}
}
