"use client";
import { useParams } from "next/navigation";
import React from "react";
function page() {
  const para = useParams();
  console.log(para);
  return (
    <div>
      <h1>main page</h1>
    </div>
  );
}

export default page;
