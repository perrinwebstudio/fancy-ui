import React from "react";
import { environment } from "../../../environments/environment";

const TeamMembers = () => {
  return (
    <>
      <h2>Sample page 2 {environment.testing}</h2>
      <p>You can kick start your app</p>
    </>
  );
};

export default TeamMembers;
