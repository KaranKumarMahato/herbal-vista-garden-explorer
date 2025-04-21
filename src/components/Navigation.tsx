
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-herb-green-dark text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-herb-cream flex items-center justify-center">
            <span className="text-herb-green-dark text-2xl font-playfair font-bold">H</span>
          </div>
          <span className="font-playfair font-semibold text-xl">Herbal Vista</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/catalog" className="hover:text-herb-cream transition-colors">Plant Catalog</Link>
          <Link to="/tours" className="hover:text-herb-cream transition-colors">Guided Tours</Link>
          <Link to="/about" className="hover:text-herb-cream transition-colors">About</Link>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-herb-green-dark">
            <Search size={18} className="mr-2" />
            Search
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-herb-green-dark py-4 px-4 absolute w-full animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/catalog" 
              className="text-white hover:text-herb-cream transition-colors py-2 border-b border-herb-green-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Plant Catalog
            </Link>
            <Link 
              to="/tours" 
              className="text-white hover:text-herb-cream transition-colors py-2 border-b border-herb-green-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Guided Tours
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-herb-cream transition-colors py-2 border-b border-herb-green-light"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-2">
              <Button 
                variant="outline" 
                className="w-full bg-transparent border-white text-white hover:bg-white hover:text-herb-green-dark"
              >
                <Search size={18} className="mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
