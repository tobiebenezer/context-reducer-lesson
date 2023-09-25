import "./App.css";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import NotfoundPage from "./pages/NotfoundPage";
import LayoutPage from "./pages/LayoutPage";
import TodoPage from "./pages/TodoPage";
import { UserProvider } from "./store/context/UserContext";
import UserPage from "./pages/UserPage";
import { TodoProvider } from "./store/context/TodoContext";
function App() {
 
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="blog" element={<BlogPage />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />

          <Route
            path="/todo"
            element={
              <TodoProvider>
                <TodoPage />
              </TodoProvider>
            }
          />

          <Route path="user" element={<UserPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
