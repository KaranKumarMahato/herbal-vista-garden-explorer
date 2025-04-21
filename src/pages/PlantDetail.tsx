
import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Heart, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { getPlantById, plants } from '@/data/plantData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const PlantDetail = () => {
  const { plantId } = useParams<{ plantId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const plant = plantId ? getPlantById(plantId) : null;
  
  if (!plant) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Plant not found</h1>
            <Button onClick={() => navigate('/catalog')} variant="outline">
              Back to Catalog
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleSavePlant = () => {
    toast({
      title: "Plant saved",
      description: `${plant.name} has been added to your favorites.`,
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: plant.name,
        text: `Check out ${plant.name} in the Virtual Herbal Garden`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      toast({
        title: "Link copied",
        description: "Plant link copied to clipboard!",
      });
      navigator.clipboard.writeText(window.location.href);
    }
  };
  
  // Find similar plants based on categories
  const similarPlants = plants
    .filter(p => 
      p.id !== plant.id && 
      p.categories.some(cat => plant.categories.includes(cat))
    )
    .slice(0, 3);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            className="flex items-center text-muted-foreground hover:text-foreground" 
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} className="mr-2" />
            Back
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Plant Images */}
          <div>
            <div className="plant-detail-image-container mb-4 h-96 border rounded-lg shadow-sm">
              <img 
                src={plant.gallery[currentImageIndex]}
                alt={plant.name}
                className="plant-detail-image w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {plant.gallery.map((image, index) => (
                <div 
                  key={index}
                  className={`w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 ${
                    index === currentImageIndex ? 'border-primary' : 'border-transparent'
                  }`}
                  onClick={() => handleImageChange(index)}
                >
                  <img 
                    src={image}
                    alt={`${plant.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Plant Information */}
          <div>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{plant.name}</h1>
                <p className="text-lg text-muted-foreground italic mb-4">{plant.botanicalName}</p>
                {plant.commonNames.length > 0 && (
                  <div className="mb-4">
                    <span className="text-sm font-medium">Also known as: </span>
                    <span className="text-sm">{plant.commonNames.join(', ')}</span>
                  </div>
                )}
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={handleSavePlant}
                >
                  <Heart size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={handleShare}
                >
                  <Share size={20} />
                </Button>
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <MapPin size={16} className="text-muted-foreground mr-1" />
              <span className="text-muted-foreground text-sm">Native to {plant.regions.join(', ')}</span>
            </div>
            
            <Separator className="my-6" />
            
            <Tabs defaultValue="overview">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="medicinal">Medicinal Uses</TabsTrigger>
                <TabsTrigger value="cultivation">Cultivation</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">{plant.description}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Habitat</h3>
                    <p className="text-muted-foreground">{plant.habitat}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {plant.categories.map((category) => (
                        <span 
                          key={category} 
                          className="bg-herb-cream px-3 py-1 rounded-full text-sm"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="medicinal">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-2">Medicinal Properties</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {plant.medicinalUses.map((use, index) => (
                      <li key={index} className="text-muted-foreground">{use}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="cultivation">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-2">Growing Information</h3>
                  <p className="text-muted-foreground">{plant.cultivation}</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Similar Plants */}
        {similarPlants.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Similar Plants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarPlants.map((similarPlant) => (
                <Link to={`/plants/${similarPlant.id}`} key={similarPlant.id} className="plant-card">
                  <div className="overflow-hidden">
                    <img 
                      src={similarPlant.imageSrc} 
                      alt={similarPlant.imageAlt} 
                      className="plant-card-image"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-1">{similarPlant.name}</h3>
                    <p className="text-sm text-muted-foreground italic mb-2">{similarPlant.botanicalName}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default PlantDetail;
