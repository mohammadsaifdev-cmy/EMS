
const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@gmail.com",
    password: "123",
    taskMember: "Frontend Team",

    taskCount: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1,
      total: 5
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page for the EMS application.",
        taskDate: "2026-09-12",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Fix the alignment and responsive issues in the navigation bar.",
        taskDate: "2026-09-13",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Dashboard UI",
        taskDescription: "Build the basic employee dashboard interface.",
        taskDate: "2026-09-10",
        category: "UI Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect the employee dashboard with the task API.",
        taskDate: "2026-09-08",
        category: "Development"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Write unit tests for the login functionality.",
        taskDate: "2026-09-14",
        category: "Testing"
      }
    ]
  },

  {
    id: 2,
    firstName: "Aman",
    email: "employee2@gmail.com",
    password: "456",
    taskMember: "Backend Team",

    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1,
      total: 5
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Employee Profile",
        taskDescription: "Create a profile page where employees can view their information.",
        taskDate: "2026-09-12",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup React Router",
        taskDescription: "Configure routes for login, dashboard and profile pages.",
        taskDate: "2026-09-09",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Task Card",
        taskDescription: "Design reusable task cards for displaying employee tasks.",
        taskDate: "2026-09-13",
        category: "UI Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Testing",
        taskDescription: "Test employee data insertion and retrieval from the database.",
        taskDate: "2026-09-07",
        category: "Testing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Task Form",
        taskDescription: "Build a form for admins to create new employee tasks.",
        taskDate: "2026-09-15",
        category: "Development"
      }
    ]
  },

  {
    id: 3,
    firstName: "Arjun",
    email: "employee3@gmail.com",
    password: "789",
    taskMember: "Authentication Team",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0,
      total: 5
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Authentication",
        taskDescription: "Implement employee and admin authentication functionality.",
        taskDate: "2026-09-12",
        category: "Authentication"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Login Form",
        taskDescription: "Create the login form with email and password fields.",
        taskDate: "2026-09-08",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Logout Feature",
        taskDescription: "Implement logout functionality for employees and admins.",
        taskDate: "2026-09-13",
        category: "Authentication"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Context API",
        taskDescription: "Create authentication context using React Context API.",
        taskDate: "2026-09-10",
        category: "React"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Authentication Bug",
        taskDescription: "Fix the issue where users are redirected to the wrong dashboard.",
        taskDate: "2026-09-14",
        category: "Bug Fix"
      }
    ]
  },

  {
    id: 4,
    firstName: "Vikram",
    email: "employee4@gmail.com",
    password: "234",
    taskMember: "Admin Support Team",

    taskCount: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1,
      total: 5
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Admin Dashboard",
        taskDescription: "Build the admin dashboard for managing employees and tasks.",
        taskDate: "2026-09-12",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Employee List",
        taskDescription: "Display all employees in a table with their current status.",
        taskDate: "2026-09-13",
        category: "UI Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Employee Form",
        taskDescription: "Create a form for adding new employees to the system.",
        taskDate: "2026-09-09",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Responsive Dashboard",
        taskDescription: "Make the admin dashboard responsive for mobile devices.",
        taskDate: "2026-09-08",
        category: "UI Design"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Task Assignment",
        taskDescription: "Implement functionality for assigning tasks to employees.",
        taskDate: "2026-09-15",
        category: "Development"
      }
    ]
  },

  {
    id: 5,
    firstName: "Rohit",
    email: "employee5@gmail.com",
    password: "567",
    taskMember: "React Team",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1,
      total: 5
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Task Dashboard",
        taskDescription: "Create a dashboard showing active, completed and failed tasks.",
        taskDate: "2026-09-12",
        category: "React"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Task Counter",
        taskDescription: "Display the total number of tasks assigned to an employee.",
        taskDate: "2026-09-09",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Task Status Update",
        taskDescription: "Allow employees to update the status of their assigned tasks.",
        taskDate: "2026-09-13",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Statistics",
        taskDescription: "Show task statistics using cards on the dashboard.",
        taskDate: "2026-09-10",
        category: "UI Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Task Filter",
        taskDescription: "Fix filtering issues when displaying completed and failed tasks.",
        taskDate: "2026-09-08",
        category: "Bug Fix"
      }
    ]
  }
];


const admin=[
    {
        "id":1,
        "email":"admin@gmail.com",
        "password":"admin123"

    }
];

export const setLocalStorage = () =>{
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}


export const getLocalStorage = () => {
  return {
    employees: JSON.parse(localStorage.getItem("employees")),
    admin: JSON.parse(localStorage.getItem("admin"))
  }
}