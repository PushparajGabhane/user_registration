import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import UserForm from "./components/userform/userform";
import Users from "./components/users/users";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
