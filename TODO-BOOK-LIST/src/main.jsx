import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { Input } from './components/ToDoList/Input/Input';
import { Notebook } from './components/NotebookList/Notebook/Notebook';
import { ErrorPage404 } from './components/Error/ErrorPage404';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Input />,
    errorElement: <ErrorPage404 />,
    
	},
  {
    path: "Notebook",
    element: <Notebook />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);