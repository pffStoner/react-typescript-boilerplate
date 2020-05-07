import React from 'react'
import ReactDom from 'react-dom'

export default function App(): JSX.Element {
	const arr1 = [1]
	const arr2 = [666, ...arr1, {...arr1}]
const sum = (f: number, s:number): number => f+s
	return (
		<h1>
			{sum(1,2)}
			Hi
		</h1>
	)
}

const root = document.getElementById('app-root')

ReactDom.render(<App />, root)