import React from "react";
import Image from "next/image";
import NotFound from "/public/404.gif";
import { useRouter } from "next/router";
import { useEffect } from "react";
function PageNotFount() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <div className="error-page container">
      <Image fill={false} src={NotFound} alt="404 page not Found" />
    </div>
  );
}

export default PageNotFount;
