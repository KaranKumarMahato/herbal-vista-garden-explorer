
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-herb-green-dark text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Herbal Vista</h3>
            <p className="text-herb-cream opacity-80 mb-4">
              Explore the world of medicinal plants and traditional healing practices through our
              virtual herbal garden.
            </p>
            <p className="text-sm opacity-70">© {currentYear} Herbal Vista. All rights reserved.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Plant Catalog
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Guided Tours
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Stay Connected</h4>
            <p className="text-herb-cream opacity-80 mb-4">
              Subscribe to our newsletter for updates on new plants and healing practices.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-l-md w-full focus:outline-none text-herb-green-dark"
              />
              <button className="bg-herb-purple text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
