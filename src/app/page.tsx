import Image from "next/image";
import { AddProduct } from "@/components/component/add-product";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <AddProduct />
    </main>
  );
}
