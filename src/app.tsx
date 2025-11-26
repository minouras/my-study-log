import { Router, Route, LocationProvider } from 'preact-iso';
import Header from './components/Header';
import Home from './pages/Home';
import Post from './pages/Post';

export default function App() {
  return (
    <div class="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main class="p-4">
        <LocationProvider>
          <Router>
            <Route path="my-study-log/" component={Home} />
            <Route path="my-study-log/post/:id" component={Post} />
          </Router>
        </LocationProvider>
      </main>
    </div>
  );
}
