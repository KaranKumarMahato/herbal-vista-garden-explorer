
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { plants, categories, regions } from '@/data/plantData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Plant } from '@/data/plantData';

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('name');
  const [filteredPlants, setFilteredPlants] = useState(plants);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Apply filters when any filter criteria changes
  useEffect(() => {
    let results = plants;
    
    // Apply search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      results = results.filter(plant => 
        plant.name.toLowerCase().includes(query) || 
        plant.botanicalName.toLowerCase().includes(query) ||
        plant.commonNames.some(name => name.toLowerCase().includes(query))
      );
    }
    
    // Apply category filters
    if (selectedCategories.length > 0) {
      results = results.filter(plant => 
        selectedCategories.some(category => plant.categories.includes(category))
      );
    }
    
    // Apply region filters
    if (selectedRegions.length > 0) {
      results = results.filter(plant => 
        selectedRegions.some(region => plant.regions.includes(region))
      );
    }
    
    // Apply sorting
    results = [...results].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'nameDesc') {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });
    
    setFilteredPlants(results);
  }, [searchQuery, selectedCategories, selectedRegions, sortBy]);
  
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(item => item !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  const handleRegionToggle = (region: string) => {
    setSelectedRegions(prev => {
      if (prev.includes(region)) {
        return prev.filter(item => item !== region);
      } else {
        return [...prev, region];
      }
    });
  };
  
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedRegions([]);
    setSortBy('name');
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <header className="bg-herb-green-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Medicinal Plant Catalog</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Explore our comprehensive collection of medicinal plants and herbs used in traditional healing practices around the world.
          </p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="text"
              placeholder="Search plants by name..."
              className="pl-10 pr-4 py-2 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="nameDesc">Name (Z-A)</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2 md:hidden"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={18} />
              Filters
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className={`md:w-64 md:block ${isFilterOpen ? 'block' : 'hidden'}`}>
            <div className="bg-card p-4 rounded-lg shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground text-sm"
                  onClick={clearFilters}
                >
                  Clear all
                </Button>
              </div>
              
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="categories">
                  <AccordionTrigger>Medicinal Uses</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => handleCategoryToggle(category)}
                          />
                          <label
                            htmlFor={`category-${category}`}
                            className="text-sm cursor-pointer"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="regions">
                  <AccordionTrigger>Regions</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {regions.map((region) => (
                        <div key={region} className="flex items-center space-x-2">
                          <Checkbox
                            id={`region-${region}`}
                            checked={selectedRegions.includes(region)}
                            onCheckedChange={() => handleRegionToggle(region)}
                          />
                          <label
                            htmlFor={`region-${region}`}
                            className="text-sm cursor-pointer"
                          >
                            {region}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          {/* Plant Grid */}
          <div className="flex-grow">
            {filteredPlants.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No plants found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
                <Button onClick={clearFilters} className="mt-4">Clear all filters</Button>
              </div>
            ) : (
              <>
                <p className="mb-4 text-muted-foreground">Showing {filteredPlants.length} plants</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPlants.map((plant) => (
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
              </>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Catalog;
