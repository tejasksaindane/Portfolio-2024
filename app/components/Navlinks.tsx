"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ link }: any) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      className={`p-3 z-50${
        pathName === link.url &&
        " text-[#915eff] duration-75 font-semibold z-50 "
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default Navlink;
