import logo from './logo.svg';
import './App.css';
import server from './server'
import { Express } from 'express'
import { useCallback, useEffect, useState } from 'react';
import { Server } from 'http'
// import { ipcRenderer } from 'electron'
const { ipcRenderer } = window.require('electron')

function App() {

	const [isOnline, setIsOnline] = useState(false)

	const [port, setPort] = useState(5000)
	const [serverInstance, setServerInstance] = useState<Server>()

	useEffect(() => {

	}, [])

	function startServer() {

		ipcRenderer.invoke('server-start').then((error: any) => {
			if (error) return console.log(error)
			setIsOnline(true)
		})
	}

	function stopServer() {

		ipcRenderer.invoke('server-stop').then((error: any) => {
			if (error) return console.log(error)
			setIsOnline(false)
		})
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>This is a Reactron-express server instance.</p>
				<p>Click on the button below to {isOnline ? 'stop' : 'start'} the server</p>
				<a
					className="App-link"
					onClick={isOnline ? stopServer : startServer}
					style={{ cursor: 'pointer' }}
				>
					{isOnline ? 'Stop server' : 'Start server'}
				</a>
				<p>{isOnline ? 'Server online: go to http://localhost:5000 to see it in action' : 'Server is currently offline'}</p>
			</header>
		</div>
	)
}

export default App;
