"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 space-y-4 text-center">
      
      <h2 className="text-xl font-medium">{"Hi there, I'm Abhyudaya, 18, and an Indian."} </h2>
          <Link href="/creators/sab">
      <Button variant="secondary" size="sm">
          <h2 className="text-base font-medium">Contributor~ SA-B <br/></h2>
        </Button>
      </Link>
      <br/>
      <Link href="/">
      <Button size="sm">
          Return Back to ADV Note
        </Button>
      </Link>
   </div>
  );
};

export default Error;
