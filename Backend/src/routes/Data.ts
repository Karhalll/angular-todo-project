import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

interface Task {
	title: string;
	project: string;
	done: boolean;
	deleted: boolean;
	details?: string;
}

let todos: Task[] = [
	{
		title: 'Todo A',
		project: 'Project A',
		done: false,
		deleted: false,
		details: 'First project needs to ...'
	},
	{
		title: 'Todo B',
		project: 'Project B',
		done: true,
		deleted: false,
		details: 'Second project needs to ...'
	},
	{
		title: 'Todo C',
		project: 'Project C',
		done: false,
		deleted: false,
		details: 'Third project needs to ...'
	}
]

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {
    return res.status(OK).json({todos});
});

export default router;