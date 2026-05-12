import { businessInfo } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-transparent text-gray-400 text-center px-6 pt-4 pb-10 text-sm">
      <p className="font-medium tracking-wide">{businessInfo.name}</p>
      <p className="mt-2">© 2026</p>
    </footer>
  );
}