import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { SyncLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import CompletedTaskCard from "./CompletedTaskCard";

const CompletedTask = () => {
  const { user } = useContext(AuthContext);

  // Loading all completed tasks
  const {
    isLoading,
    error,
    data:completedTasks =[],
    refetch,
  } = useQuery({
    queryKey: [user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/completeTasks?email=${user?.email}`)
      .then((res) =>
        res.json()
      ),
  });



  if(isLoading){
    <div className="z-20 absolute top-[40%] left-[50%] ">
          <SyncLoader color="red" size={20} className="text-center" />
        </div> 
}

  return (
    <div className="min-h-screen">

      <h2 className="text-myYellow text-2xl md:text-3xl lg:text-4xl text-center mt-10">
        Completed Tasks
      </h2>

        {
            completedTasks?.length < 1 && <p className="text-xl md:text-2xl font-medium text-center text-white mt-12">You Have Not Completed Any Task Yet</p>
        }


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-11/12 mx-auto gap-6 mt-10'>
            {
                completedTasks?.map(ctTask => <CompletedTaskCard key={ctTask._id} completeTask={ctTask}
                    refetch={refetch} />)
            }

        </div>

    </div>
  );
};

export default CompletedTask;
