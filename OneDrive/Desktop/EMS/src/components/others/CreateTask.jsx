import { useState } from "react";

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };


    const employees =
      JSON.parse(localStorage.getItem("employees")) || [];


    
    const employee = employees.find(
      (emp) => emp.id === Number(assignTo)
    );


    if (!employee) {
      alert("Employee not found");
      return;
    }


    employee.tasks.push(task);


    employee.taskCount.newTask += 1;
    employee.taskCount.total += 1;


    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );


   
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");

    alert("Task assigned successfully!");
  };


  
  const employees =
    JSON.parse(localStorage.getItem("employees")) || [];


  return (
    <div className="mt-4 flex flex-col">

      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full gap-4 bg-gray-800 p-5 rounded-xl shrink-0"
      >

        
        <div className="w-full md:w-[48%]">

          
          <div className="mb-3">

            <h3 className="mb-1 text-sm font-medium text-gray-200">
              Task Title
            </h3>

            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              required
              className="w-full rounded-lg bg-gray-700 border border-gray-600 px-4 py-2.5 text-white placeholder-gray-400 outline-none focus:border-emerald-500"
            />

          </div>


          
          <div className="mb-3">

            <h3 className="mb-1 text-sm font-medium text-gray-200">
              Date
            </h3>

            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              required
              className="w-full rounded-lg bg-gray-700 border border-gray-600 px-4 py-2.5 text-white outline-none focus:border-emerald-500"
            />

          </div>


          
          <div className="mb-3">

            <h3 className="mb-1 text-sm font-medium text-gray-200">
              Assign To
            </h3>

            <select
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              required
              className="w-full rounded-lg bg-gray-700 border border-gray-600 px-4 py-2.5 text-white outline-none focus:border-emerald-500"
            >

              <option value="">
                Select Employee
              </option>

              {employees.map((employee) => (

                <option
                  key={employee.id}
                  value={employee.id}
                >
                  {employee.firstName}
                </option>

              ))}

            </select>

          </div>


        
          <div>

            <h3 className="mb-1 text-sm font-medium text-gray-200">
              Category
            </h3>

            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Design, Development, etc..."
              required
              className="w-full rounded-lg bg-gray-700 border border-gray-600 px-4 py-2.5 text-white placeholder-gray-400 outline-none focus:border-emerald-500"
            />

          </div>

        </div>


        
        <div className="w-full md:w-[48%]">

          <h3 className="mb-1 text-sm font-medium text-gray-200">
            Description
          </h3>

          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Write task description..."
            required
            className="w-full h-[220px] rounded-lg bg-gray-700 border border-gray-600 px-4 py-3 text-white placeholder-gray-400 outline-none resize-none focus:border-emerald-500"
          ></textarea>

        </div>


        {/* Button */}
        <div className="w-full">

          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-7 py-2.5 rounded-lg transition duration-200"
          >
            Create Task
          </button>

        </div>

      </form>

    </div>
  );
};

export default CreateTask;