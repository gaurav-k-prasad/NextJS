import React from "react";
import Hello from "../components/hello";

export default function Home() {
  console.log("Where am I? I will be visible in the browser console and in the terminal(primary)");
  
  return (
    <div>
      <h1 className="text-3xl">Welcome to next js</h1>
      <Hello />
    </div>
  );
}
