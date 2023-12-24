"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 space-y-4 text-center">
      
      <h2 className="text-xl font-medium">{"hahaha I'm SA-B hahahaha hehehehe hohohoho"} </h2>
          
<Link href="/creators/abhyudaya">
      <Button size="sm">
          <h2 className="text-base font-medium">Contributor~ ADV-A <br/></h2>
        </Button>
      </Link>
    
      <Link href="/">
      <Button size="sm">
          Return Back to ADV Note
        </Button>
      </Link>
   </div>
  );
};

export default Error;
