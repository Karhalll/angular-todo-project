import { Injectable } from '@angular/core';

export interface Task {
	title: string;
	project: string;
	done: boolean;
	details?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
	todos: Task[] = [
		{
			title: 'Todo A',
			project: 'Project A',
			done: false,
			details: 'First project needs to ...'
		},
		{
				title: 'Todo B',
				project: 'Project B',
				done: true,
				details: 'Second project needs to ...'
		},
		{
				title: 'Todo C',
				project: 'Project C',
				done: false,
				details: 'Third project needs to ...'
		}
	]

  constructor() { }
}
