import User from "./User";
import "./User.css";
import USerClass from "./UserClass";

function About() {
  return (
    <div>
      <h1>THis is About Us Page</h1>
      <h1>What About you ?</h1>
      <User />
      <USerClass name="Vishu class component" />
    </div>
  );
}

export default About;
