import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { Input, loader as inputLoader } from './components/ToDoList/Input/Input';
import { Notebook, loader as noteLoader } from './components/NotebookList/Notebook/Notebook';
import { ErrorPage404 } from './components/Error/ErrorPage404';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Input />,
		errorElement: <ErrorPage404 />,
		loader: inputLoader,
	},
	{
		path: "Notebook",
		element: <Notebook />,
		loader: noteLoader,
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);