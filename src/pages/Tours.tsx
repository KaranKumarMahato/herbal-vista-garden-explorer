
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { tours } from '@/data/plantData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Tours = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <header className="bg-herb-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Guided Virtual Tours</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Explore curated collections of medicinal plants grouped by health benefits and traditional uses.
          </p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tours.map((tour) => (
            <Link
              to={`/tours/${tour.id}`}
              key={tour.id}
              className="relative overflow-hidden rounded-lg group shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
              <img 
                src={tour.image} 
                alt={tour.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 z-20 p-6 w-full">
                <h2 className="text-2xl font-bold text-white mb-2">{tour.title}</h2>
                <p className="text-white/90 mb-4 line-clamp-2">{tour.description}</p>
                <div className="flex items-center text-herb-cream font-medium group-hover:underline transition-all">
                  Begin tour <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Info Section */}
        <div className="mt-16 bg-herb-cream/30 rounded-lg p-8 leaf-bg-pattern">
          <h2 className="text-2xl font-bold mb-4">About Our Guided Tours</h2>
          <p className="text-muted-foreground mb-4">
            Our curated virtual tours offer an immersive journey through groups of medicinal plants that share similar properties or benefits. Each tour provides in-depth information about traditional uses, cultivation methods, and scientific research.
          </p>
          <p className="text-muted-foreground">
            These tours are designed to be educational resources for students, practitioners, and enthusiasts of traditional medicine, offering a structured way to explore our virtual herbal garden.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Tours;
