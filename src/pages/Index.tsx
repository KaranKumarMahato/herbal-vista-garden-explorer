
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Plant, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { plants, tours } from '@/data/plantData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  // Fade in effect on page load
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'translateY(0)';
    });
  }, []);

  const featuredPlants = plants.slice(0, 3);
  const featuredTours = tours.slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843')`,
            filter: 'brightness(0.7)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-herb-green-dark/80 to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl text-white animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 1s ease' }}>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">Virtual Herbal Garden</h1>
            <p className="text-xl mb-8">Explore the healing powers of medicinal plants and traditional practices from around the world.</p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                className="bg-herb-green-light text-herb-green-dark hover:bg-herb-green-dark hover:text-white"
                size="lg"
              >
                <Link to="/catalog">Explore Plants</Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-herb-green-dark"
                size="lg"
              >
                <Link to="/tours">Take a Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-herb-cream/30 leaf-bg-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Discover Our Virtual Garden</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 1s ease 0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-herb-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plant size={32} className="text-herb-green-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Interactive Plant Catalog</h3>
                <p className="text-muted-foreground">Explore detailed 3D models and comprehensive information about medicinal plants from around the world.</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 1s ease 0.4s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-herb-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf size={32} className="text-herb-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Medicinal Properties</h3>
                <p className="text-muted-foreground">Learn about traditional uses, healing properties, and scientific research behind each plant.</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 1s ease 0.6s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-herb-cream rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen size={32} className="text-herb-green-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Guided Virtual Tours</h3>
                <p className="text-muted-foreground">Take thematic tours exploring plants for specific health concerns or traditional healing systems.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Featured Plants Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Medicinal Plants</h2>
            <Button 
              asChild
              variant="ghost" 
              className="text-herb-purple hover:text-herb-purple hover:bg-herb-purple-light flex items-center gap-1"
            >
              <Link to="/catalog">
                View all <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPlants.map((plant) => (
              <Link to={`/plants/${plant.id}`} key={plant.id} className="plant-card">
                <div className="overflow-hidden">
                  <img 
                    src={plant.imageSrc} 
                    alt={plant.imageAlt} 
                    className="plant-card-image"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-1">{plant.name}</h3>
                  <p className="text-sm text-muted-foreground italic mb-2">{plant.botanicalName}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {plant.categories.slice(0, 2).map((category) => (
                      <span key={category} className="bg-herb-cream px-2 py-1 rounded-full text-xs">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tours Section */}
      <section className="py-16 bg-herb-green-light/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Guided Tours</h2>
            <Button 
              asChild
              variant="ghost" 
              className="text-herb-purple hover:text-herb-purple hover:bg-herb-purple-light flex items-center gap-1"
            >
              <Link to="/tours">
                All tours <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <Link to={`/tours/${tour.id}`} key={tour.id} className="plant-card">
                <div className="overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="plant-card-image"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-1">{tour.title}</h3>
                  <p className="text-muted-foreground line-clamp-2">{tour.description}</p>
                  <div className="mt-4">
                    <span className="text-herb-green-dark font-medium flex items-center">
                      Start tour <ArrowRight size={16} className="ml-2" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-herb-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to explore healing traditions?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Discover the profound knowledge of traditional herbal medicine through our interactive virtual garden.</p>
          <Button 
            asChild
            size="lg" 
            className="bg-white text-herb-purple hover:bg-herb-cream"
          >
            <Link to="/catalog">Start Exploring Now</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
