import { Router, Route, LocationProvider } from 'preact-iso';
import Header from './components/base/Header';
import Home from './pages/Home';
import Post from './pages/Home/Post';

export default function App() {
  return (
    <div class="min-h-screen">
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
