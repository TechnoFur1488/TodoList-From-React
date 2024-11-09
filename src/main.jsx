import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { ErrorPage404 } from './components/Error/ErrorPage404';
import { Input, loader as inputLoader } from './components/ToDoList2/Input/Input';
import { NoteBookInput, loader as noteLoader } from './components/NoteBook/NoteBookInput/NoteBookInput';


const router = createBrowserRouter([
	{
		path: "/",
		element: <Input />,
		errorElement: <ErrorPage404 />,
		loader: inputLoader,
	},
	{
		path: "Notebook",
		element: <NoteBookInput />,
		errorElement: <ErrorPage404 />,
		loader: noteLoader,
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);