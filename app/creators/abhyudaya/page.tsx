"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 space-y-4 text-center">
      
      <h2 className="text-xl font-medium">{"Hi there, I'm Abhyudaya, 18, and an Indian."}</h2>
     <Link href="/">
      <Button size="sm">
          Return Back to the WebNote App
        </Button>
      </Link>
      <h2 className="text-base font-light"><br /> <br /> I guess I do have some true friends~ PP-A, SA-B</h2>
    </div>
  );
};

export default Error;
