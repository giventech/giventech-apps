import { Express } from 'express';
import {Priority} from '../models'

interface Todo {
  title: string;
}

const priorities  : Priority[] = [{WSJF:1231,businessValue:"12",
criticality:"urgent"}];

// Route for rest API calls 
export function getPriorities(app: Express) {
  app.get('/api/priorities', (req, resp) => resp.send(priorities));
  app.post('/api/priority', (req, resp) => {
    let todos:Priority [];
    const priority = {
      WSJF:1231,
      businessValue:"12",
      criticality:"urgent"
    } as Priority;
    todos.push(priority);
    resp.send(todos);
  });
}
