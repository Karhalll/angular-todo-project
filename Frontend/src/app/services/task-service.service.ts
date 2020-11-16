import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Task {
	id: number;
	title: string;
	project: string;
	done: boolean;
	deleted: boolean;
	details?: string;
}

interface TasksResponse {
	todos: Task[];
}

@Injectable({
	providedIn: 'root'
})
export class TaskService {
	private todos: Task[];
	private apiPath: string = 'http://localhost:3000/api/data'

	constructor(private _httpClient: HttpClient) {
		this._getTasks().subscribe(response => {
			this.todos = response.todos;
		});
	}

	private _getTasks(): Observable<TasksResponse> {
		return this._httpClient.get(this.apiPath + '/all') as Observable<TasksResponse>;
	}

	public getTasks(): Task[] {
		return this.todos;
	}

	public addTask(taskToAdd: Task): void {
		this.todos.unshift(taskToAdd);
	}
}
