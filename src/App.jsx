import { useEffect, useState } from "react";
import Login from "./components/Auth/Login.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider.jsx";

function App() {

  const [user, setUser] = useState("");
  const authData = useContext(AuthContext);

  const [loggedInUserData, setLoggedInUserData] = useState(null);


  
  useEffect(() => {

    const loggedInUser =
      localStorage.getItem("loggedInUser");

    if (loggedInUser) {

      const userData =
        JSON.parse(loggedInUser);


      setUser(userData.role);


      
      if (userData.role === "Employee") {

        const employees =
          JSON.parse(
            localStorage.getItem("employees")
          ) || [];


       
        const employee =
          employees.find(
            (emp) => emp.id === userData.data.id
          );


        if (employee) {
          setLoggedInUserData(employee);
        }

      }

    }

  }, []);


  const handleLogin = (email, password) => {


   
    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {

      setUser("Admin");

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "Admin"
        })
      );

      return;
    }


  
    if (authData) {

      const employee =
        authData.employees.find(
          (e) =>
            e.email === email &&
            e.password === password
        );


      if (employee) {

        
        const employees =
          JSON.parse(
            localStorage.getItem("employees")
          ) || [];


        const latestEmployee =
          employees.find(
            (emp) => emp.id === employee.id
          );


        setUser("Employee");

        setLoggedInUserData(latestEmployee);


        
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            role: "Employee",
            data: {
              id: employee.id
            }
          })
        );

      } else {

        console.log("Invalid Email or Password");

      }

    }

  };


  return (
    <>

      {!user ? (

        <Login
          handleLogin={handleLogin}
        />

      ) : user === "Admin" ? (

        <AdminDashboard
          changeUser={setUser}
        />

      ) : (

        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
        />

      )}

    </>
  );
}

export default App;