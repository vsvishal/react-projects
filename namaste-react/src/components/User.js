import { useEffect } from "react";

const User = () => {
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       console.log("useEffect setInterval() inside User.js");
  //     }, 1000);
  //     console.log("useEffect inside User.js");

  //     return () => {
  //       clearInterval(timer);
  //       console.log("useEffect unmount Return");
  //     };
  //   }, []);

  return (
    <div className="user-card">
      <h2>Name: Vishal</h2>
      <h3>Location: Pune</h3>
      <h4>Contact: @vishal11</h4>
    </div>
  );
};

export default User;
