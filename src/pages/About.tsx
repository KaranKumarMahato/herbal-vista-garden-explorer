
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Leaf, BookOpen, Search, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-herb-green-dark text-white">
        <div className="leaf-bg-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Herbal Vista</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Exploring the world of medicinal plants and traditional healing practices through an interactive virtual garden.
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        {/* Mission Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Herbal Vista aims to bridge the gap between ancient herbal wisdom and modern technology by creating an accessible, educational platform for exploring medicinal plants.
          </p>
          <p className="text-lg text-muted-foreground">
            We're committed to preserving and sharing traditional healing knowledge from various cultures around the world, making this valuable information available to students, practitioners, and enthusiasts alike.
          </p>
        </div>
        
        {/* Features Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold mb-12 text-center">Features of Our Virtual Garden</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-herb-green-light flex items-center justify-center">
                  <Leaf className="text-herb-green-dark" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Comprehensive Plant Database</h3>
                <p className="text-muted-foreground">
                  Our extensive collection features detailed information about medicinal plants, including botanical details, traditional uses, cultivation methods, and scientific research.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-herb-purple-light flex items-center justify-center">
                  <Search className="text-herb-purple" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Advanced Search & Filtering</h3>
                <p className="text-muted-foreground">
                  Find specific plants based on medicinal properties, regions of origin, or health benefits with our intuitive search and filtering system.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-herb-cream flex items-center justify-center">
                  <BookOpen className="text-herb-green-dark" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Guided Virtual Tours</h3>
                <p className="text-muted-foreground">
                  Explore curated collections of plants grouped by traditional uses, health benefits, or cultural significance through our themed virtual tours.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-herb-beige flex items-center justify-center">
                  <MapPin className="text-herb-green-dark" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
                <p className="text-muted-foreground">
                  Discover medicinal plants and healing traditions from diverse cultures around the world, highlighting the global nature of herbal knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Educational Purpose */}
        <div className="bg-herb-cream/30 rounded-lg p-8 leaf-bg-pattern my-12">
          <h2 className="text-2xl font-bold mb-4">Educational Purpose</h2>
          <p className="text-muted-foreground mb-4">
            Herbal Vista is designed as an educational resource to promote understanding and appreciation of traditional herbal medicine. Our content is carefully researched and presented to provide accurate information about medicinal plants and their traditional uses.
          </p>
          <p className="text-muted-foreground font-medium">
            <strong>Disclaimer:</strong> The information provided in this virtual garden is for educational purposes only and is not intended to replace professional medical advice. Always consult qualified healthcare practitioners before using any herbal remedies.
          </p>
        </div>
        
        {/* Future Development */}
        <div className="max-w-3xl mx-auto my-16">
          <h2 className="text-3xl font-bold mb-6">Future Development</h2>
          <p className="text-lg text-muted-foreground mb-4">
            We're continuously working to enhance the Herbal Vista experience with new features and expanded content:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Integration of full 3D plant models for immersive exploration</li>
            <li>User accounts with personalized collections and notes</li>
            <li>Community features for sharing knowledge and experiences</li>
            <li>Mobile applications for on-the-go learning</li>
            <li>Expanded database covering more plants and healing traditions</li>
          </ul>
        </div>
      </div>
      
      {/* Call to Action */}
      <section className="py-16 bg-herb-purple text-white mt-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Exploring Today</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Dive into our virtual herbal garden and discover the rich world of traditional healing plants.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="/catalog" 
              className="px-6 py-3 bg-white text-herb-purple rounded-md font-medium hover:bg-herb-cream transition-colors"
            >
              Browse Plant Catalog
            </a>
            <a 
              href="/tours" 
              className="px-6 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Take a Guided Tour
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
