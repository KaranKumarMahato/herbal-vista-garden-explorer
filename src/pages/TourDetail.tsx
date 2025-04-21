
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getTourById, getPlantsByTourId } from '@/data/plantData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TourDetail = () => {
  const { tourId } = useParams<{ tourId: string }>();
  const navigate = useNavigate();
  
  const tour = tourId ? getTourById(tourId) : null;
  const plants = tourId ? getPlantsByTourId(tourId) : [];
  
  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Tour not found</h1>
            <Button onClick={() => navigate('/tours')} variant="outline">
              Back to Tours
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-80">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('${tour.image}')`,
            filter: 'brightness(0.7)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="container mx-auto px-4 relative h-full flex flex-col justify-end pb-10">
          <Button 
            variant="ghost" 
            className="text-white mb-4 self-start hover:bg-white/10" 
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Tours
          </Button>
          
          <h1 className="text-4xl font-bold text-white mb-3">{tour.title}</h1>
          <p className="text-white/90 max-w-2xl text-lg">{tour.description}</p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Plants in this Tour</h2>
          <p className="text-muted-foreground mb-8">
            Explore the medicinal plants featured in our {tour.title} tour, each with unique properties and traditional uses.
          </p>
          
          <div className="space-y-8">
            {plants.map((plant, index) => (
              <div 
                key={plant.id}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border-b border-border pb-8 mb-8 last:border-b-0 last:pb-0 last:mb-0"
              >
                <div className="md:col-span-1">
                  <Link to={`/plants/${plant.id}`} className="block overflow-hidden rounded-lg hover:opacity-90 transition-opacity">
                    <img 
                      src={plant.imageSrc}
                      alt={plant.name}
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                </div>
                
                <div className="md:col-span-2">
                  <span className="text-herb-purple font-medium mb-2 inline-block">{`Plant ${index + 1} of ${plants.length}`}</span>
                  <h3 className="text-2xl font-bold mb-2">
                    <Link to={`/plants/${plant.id}`} className="hover:text-herb-purple transition-colors">
                      {plant.name}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground italic mb-3">{plant.botanicalName}</p>
                  <p className="text-muted-foreground mb-4">{plant.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Medicinal Uses:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {plant.medicinalUses.slice(0, 3).map((use, idx) => (
                        <li key={idx}>{use}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild variant="outline" className="mt-2">
                    <Link to={`/plants/${plant.id}`}>Learn more about {plant.name}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Related Tours */}
        <div className="mt-16 bg-herb-cream/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Continue Exploring</h2>
          <p className="mb-6">
            Ready to discover more medicinal plants and their traditional uses? Check out our other guided tours or browse our complete plant catalog.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-herb-green-dark hover:bg-herb-green-dark/90">
              <Link to="/tours">More Guided Tours</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/catalog">Browse Plant Catalog</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TourDetail;
