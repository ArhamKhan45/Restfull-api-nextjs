"use client";

import { useParams } from "next/navigation";

// import { useParams } from "next/navigation";

function page() {
  const name = useParams();
  console.log(name);
  return (
    <div>
      <h1>contact</h1>
    </div>
  );
}

export default page;
