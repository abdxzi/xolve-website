import Logo from "./logo";
import Image from "next/image";
// import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
        </div>
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>&copy; 2024 Xolve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
