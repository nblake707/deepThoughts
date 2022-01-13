import React from "react";
import { useQuery } from "@apollo/client"; // allows access to apollo server
import { QUERY_THOUGHTS } from "../Utils/queries";
import ThoughtList from "../components/ThoughtList";

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  /* optional chaining - negates the need to check if an object exists before accessing its properties
     if data exists then store it in the thoughts constant / if undefined save an empty array to thoughts
   */
  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
