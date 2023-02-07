import { useContext, useState } from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import SignInPage from "./components/SignInPage/SignInPage";
import Home from "./components/Home/Home";
import { AuthContext } from "./context/authContext";

function App() {
  const { state, dispatch } = useContext(AuthContext);

  console.log(`"hello"  ${state.currentUser}`);

  const ProtectedRoute = ({ children }) => {
    if (!state.currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
        ),

      children: [
        {
          path: "/home",
          element: (
              <Home />
          ),
        },
      ],
    },

    {
      path: "/login",
      element: <SignInPage />,
    },
  ]);

  return (
    <div className="App">
      {/* <Layout /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
