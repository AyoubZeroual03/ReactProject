import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListProductsBuy } from "./pages/productsBuy";
import { Detail } from "./pages/Detail/Detail";
import { Home } from "./pages/Home/Home"
import { LoginPage } from "./pages/loginPage";
import { Register } from "./pages/register";
import { Category } from "./pages/Home/Category";
import PrivateRoute from "./components/private-route";
import { Admin } from "./pages/admin";
import { Profile } from "./pages/Profile";
import NotFoundPage from "./error";


function App() {
  return (


    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Detail/:id" element={<Detail />} />
        <Route path="Login" element={<LoginPage />} />
        <Route path="Register" element={<Register />} />
        <Route path="ListProductsBuy" element={
          <PrivateRoute>
            <ListProductsBuy />
          </PrivateRoute>} />
        <Route path="Category/:cg" element={<Category />} />
        <Route path="Admin" element={<Admin /> } />
        <Route path="Profile" element={<Profile /> } />
        <Route path="*" element={<NotFoundPage />} />




      </Routes>
    </Router>


  );
}

export default App;

