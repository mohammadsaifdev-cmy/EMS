import React, { useEffect, useState } from "react";

const AllTask = () => {

  const [employees, setEmployees] = useState([]);


  const getEmployees = () => {

    const data =
      JSON.parse(localStorage.getItem("employees")) || [];

    setEmployees(data);

  };


  useEffect(() => {

    getEmployees();

  }, []);


  return (
    <div
      id="tasklist"
      className="h-50 p-6 rounded-xl mt-5 space-y-2"
    >

      <div className="bg-emerald-600 text-lg py-3 px-5 flex justify-between items-center rounded-lg text-white font-semibold">

        <h2 className="w-1/5">
          Employee Name
        </h2>

        <h3 className="w-1/5 text-center">
          New Task
        </h3>

        <h4 className="w-1/5 text-right">
          Active Task
        </h4>

        <h4 className="w-1/5 text-right">
          Completed
        </h4>

        <h4 className="w-1/5 text-right">
          Failed
        </h4>

      </div>


      <div className="mt-3 space-y-2">

        {employees.map((elem) => (

          <div
            key={elem.id}
            className="bg-gray-800 py-3 px-5 flex justify-between items-center rounded-lg text-white font-semibold"
          >

            <h2 className="w-1/5 text-lg">
              {elem.firstName}
            </h2>

            <h3 className="w-1/5 text-lg text-center">
              {elem.taskCount.newTask}
            </h3>

            <h4 className="w-1/5 text-lg text-right">
              {elem.taskCount.active}
            </h4>

            <h4 className="w-1/5 text-lg text-right">
              {elem.taskCount.completed}
            </h4>

            <h4 className="w-1/5 text-lg text-right">
              {elem.taskCount.failed}
            </h4>

          </div>

        ))}

      </div>

    </div>
  );
};

export default AllTask;