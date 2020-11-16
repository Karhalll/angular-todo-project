import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

const router = Router();
const { OK } = StatusCodes;

interface Task {
	id: number;
	title: string;
	project: string;
	done: boolean;
	deleted: boolean;
	details?: string;
}

let todos: Task[] = [
	{
		id: 1,
		title: 'Todo A',
		project: 'Project A',
		done: false,
		deleted: false,
		details: 'First project needs to ...'
	},
	{
		id: 2,
		title: 'Todo B',
		project: 'Project B',
		done: true,
		deleted: false,
		details: 'Second project needs to ...'
	},
	{
		id: 3,
		title: 'Todo C',
		project: 'Project C',
		done: false,
		deleted: false,
		details: 'Third project needs to ...'
	}
]

/******************************************************************************
 *                      Data - "/api/data"
 ******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {
  return res.status(OK).json({todos});
});

router.post('/edit/:id', async (req: Request, res: Response) => {
	const id = req.params;
	console.log(id);
	return res.status(OK).json({todos});
});

export default router;