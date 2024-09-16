import Image from "next/image";
import Link from "next/link";

export default function LogoDashboard() {
  return (
    <Link
      href="/"
      className="flex items-center h-20 gap-2 border-b cursor-pointer 
  min-h-20 px-6"
    >
      <Image
        src="/Logo.jpg"
        alt="logoDashboard"
        width={65}
        height={65}
        priority
      ></Image>
      <h1 className="text-xl font-bold">Klakem Srl.</h1>
    </Link>
  );
}
