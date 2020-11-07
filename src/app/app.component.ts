import { Component } from '@angular/core';

export interface Task {
	title: string;
	project: string;
	done: boolean;
	details?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
				done: false,
				details: 'Second project needs to ...'
		},
		{
				title: 'Todo C',
				project: 'Project C',
				done: false,
				details: 'Third project needs to ...'
		}
	]


}
