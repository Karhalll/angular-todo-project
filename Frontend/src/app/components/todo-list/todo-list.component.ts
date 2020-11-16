import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';

import { Task, TaskService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

	constructor(public _taskService: TaskService) {}
}