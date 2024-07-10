import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Project from './pages/Project.tsx'
import Blog from './pages/Blog.tsx'
import NotFound from './pages/NotFound.tsx'

const App = () => {
	return (
		<Routes>
			<Route path={'/'} element={ <Home /> }  />
			<Route path={'/work'} element={ <Project /> } />
			<Route path={'/posts'} element={ <Blog /> } />
			<Route path={'*'} element={<NotFound />} />
		</Routes>
	)
}

export default App;
