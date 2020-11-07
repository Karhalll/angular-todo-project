import { Injectable } from '@angular/core';

export interface Task {
	id: number,
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
			id: 1,
			title: 'Todo A',
			project: 'Project A',
			done: false,
			details: 'First project needs to ...'
		},
		{
			id: 2,
			title: 'Todo B',
			project: 'Project B',
			done: true,
			details: 'Second project needs to ...'
		},
		{
			id: 3,
			title: 'Todo C',
			project: 'Project C',
			done: false,
			details: 'Third project needs to ...'
		}
	]

	constructor() {}

}
