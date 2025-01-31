import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">interview.online</h3>
          <p className="text-gray-400">
            Revolutionizing the online interview experience.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2023 interview.online. All rights reserved.</p>
      </div>
    </footer>
  );
}
