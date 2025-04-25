
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Flower, TreePine } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { plants } from '@/data/plantData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Cultivation = () => {
  const location = useLocation();
  const initialPlantId = location.state?.selectedPlantId || "";
  const [selectedPlant, setSelectedPlant] = useState(initialPlantId);
  
  const handlePlantSelect = (plantId: string) => {
    setSelectedPlant(plantId);
  };
  
  const selectedPlantData = plants.find(plant => plant.id === selectedPlant);
  
  const renderCultivationTips = () => {
    if (!selectedPlant) {
      return (
        <div className="text-center p-8">
          <TreePine size={48} className="mx-auto mb-4 text-herb-green-dark opacity-50" />
          <h3 className="text-xl font-medium mb-2">Select a plant to view cultivation information</h3>
          <p className="text-muted-foreground">Learn how to grow and care for medicinal herbs in your own garden.</p>
        </div>
      );
    }
    
    if (!selectedPlantData) return null;
    
    return (
      <div>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-1/3">
            <div className="rounded-lg overflow-hidden border">
              <img 
                src={selectedPlantData.imageSrc} 
                alt={selectedPlantData.name} 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{selectedPlantData.name}</h3>
              <p className="text-sm text-muted-foreground italic">{selectedPlantData.botanicalName}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {selectedPlantData.regions.map(region => (
                  <span key={region} className="text-xs bg-herb-cream px-2 py-1 rounded-full">
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Cultivation Guide</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-md font-medium mb-2">Growing Information</h4>
                <p className="text-muted-foreground">{selectedPlantData.cultivation}</p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-md font-medium mb-2">Natural Habitat</h4>
                <p className="text-muted-foreground">{selectedPlantData.habitat}</p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-md font-medium mb-2">Growing Tips</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {getGrowingTips(selectedPlantData.id).map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-md font-medium mb-2">Harvesting</h4>
                <p className="text-muted-foreground">{getHarvestingInfo(selectedPlantData.id)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
              <Flower className="text-herb-green-dark" />
              Plant Cultivation Guide
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn how to grow and care for medicinal herbs in your home garden. 
              Select a plant to view detailed cultivation information.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Find Cultivation Information</CardTitle>
              <CardDescription>
                Select a plant from our catalog to view detailed growing instructions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Select value={selectedPlant} onValueChange={handlePlantSelect}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Select a medicinal plant" />
                  </SelectTrigger>
                  <SelectContent>
                    {plants.map((plant) => (
                      <SelectItem key={plant.id} value={plant.id}>
                        {plant.name} ({plant.botanicalName})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Cultivation Guide</CardTitle>
            </CardHeader>
            <CardContent>
              {renderCultivationTips()}
            </CardContent>
          </Card>
          
          {/* General Cultivation Tips */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Soil Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most medicinal herbs prefer well-draining soil rich in organic matter. 
                  Consider adding compost to improve soil structure and nutrient content.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Watering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Different herbs have different water needs. Generally, allow the soil to 
                  dry between waterings and avoid overwatering which can lead to root rot.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pest Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Many medicinal herbs naturally repel pests. Consider companion planting 
                  and natural remedies before resorting to chemical treatments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// Helper functions to provide additional cultivation information
const getGrowingTips = (plantId: string): string[] => {
  switch (plantId) {
    case "tulsi":
      return [
        "Grow in full sun with afternoon shade in hot climates",
        "Water deeply but infrequently",
        "Pinch off flower buds to encourage bushy growth",
        "Space plants 1-2 feet apart",
        "Can be grown indoors in a sunny window"
      ];
    case "ashwagandha":
      return [
        "Prefers full sun exposure",
        "Very drought tolerant once established",
        "Space plants 2 feet apart",
        "Avoid over-fertilizing - prefers poor to moderate soil",
        "Takes about 150-180 days to mature"
      ];
    case "ginger":
      return [
        "Plant in spring after last frost",
        "Prefers partial shade in hot climates",
        "Keep soil consistently moist but not waterlogged",
        "Plant rhizomes 2-4 inches deep, with growth buds facing up",
        "Benefits from rich, well-draining soil with regular organic fertilizer"
      ];
    case "aloe-vera":
      return [
        "Plant in cactus potting soil or well-draining soil mixture",
        "Water thoroughly but allow soil to dry completely between watering",
        "Prefers bright, indirect sunlight",
        "Can be propagated easily via offsets (pups)",
        "Best grown in pots that can be moved indoors during cold winter"
      ];
    case "turmeric":
      return [
        "Prefers warm, humid conditions",
        "Plant rhizomes 2 inches deep with growth buds facing up",
        "Mulch heavily to retain soil moisture",
        "Tolerates partial shade but produces best in full sun",
        "Needs 8-10 months of frost-free conditions to mature"
      ];
    case "neem":
      return [
        "Grows best in temperatures between 70-100°F (21-38°C)",
        "Water young plants regularly until established",
        "Very drought tolerant once mature",
        "Can grow quite large (up to 50 feet) - allow adequate space",
        "Benefits from occasional deep watering during dry seasons"
      ];
    default:
      return [
        "Ensure proper drainage to prevent root rot",
        "Follow specific spacing recommendations for each plant",
        "Most medicinal herbs prefer full sun exposure",
        "Apply organic mulch to retain moisture and suppress weeds",
        "Harvest sustainably to ensure continued growth"
      ];
  }
};

const getHarvestingInfo = (plantId: string): string => {
  switch (plantId) {
    case "tulsi":
      return "Harvest young leaves in the morning after dew has dried but before the heat of the day. Regular harvesting encourages bushy growth. For seeds, allow flower heads to dry on the plant before collecting.";
    case "ashwagandha":
      return "The medicinal part is primarily the root, harvested when plants are 150-180 days old. Carefully dig around the plant to expose and extract roots. The berries and leaves also have medicinal properties and can be harvested as needed.";
    case "ginger":
      return "Roots can be harvested 8-10 months after planting when the leaves start to yellow and die back. For younger, less fibrous ginger, partial harvests can begin after 4-6 months.";
    case "aloe-vera":
      return "Harvest outer leaves as needed by cutting at the base. Only harvest leaves that are at least 8 inches long and relatively thick. Each plant should retain at least 12-15 leaves to remain healthy.";
    case "turmeric":
      return "Harvest 8-10 months after planting when the leaves and stem start to turn brown and dry. Carefully dig up the entire plant and separate the rhizomes for use or replanting.";
    case "neem":
      return "Leaves can be harvested year-round as needed. For medicinal oil extraction, seeds are collected when they turn yellowish and fall from the tree. Bark is typically harvested sustainably from mature trees.";
    default:
      return "Harvest methods vary by plant part used and specific species. Generally, harvest leaves and flowers in the morning after dew has dried for highest essential oil content. Always harvest sustainably, taking no more than one-third of the plant at one time.";
  }
};

export default Cultivation;
