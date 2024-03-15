"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ link }: any) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      className={`rounded p-1 ${
        pathName === link.url && "bg-black text-orange-600 duration-75"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default Navlink;
