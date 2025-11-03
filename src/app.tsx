import { h } from 'preact'
import { Router } from 'preact-router'
import Header from './components/Header'
import Home from './pages/Home'
import Post from './pages/Post'


export default function App() {
  return (
    <div class="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main class="p-4">
        <Router>
          <Home path="my-study-log/" />
          <Post path="my-study-log/post/:id" />
        </Router>
      </main>
    </div>
  )
}