
import React from 'react';
import { Link } from 'react-router-dom';
import { Plant } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PlantUsageChart from './PlantUsageChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PlantUsageSectionProps {
  medicinalUses: string[];
  plantId: string;
}

const PlantUsageSection: React.FC<PlantUsageSectionProps> = ({ medicinalUses, plantId }) => {
  return (
    <Card className="mt-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl">Medicinal Uses & Effectiveness</CardTitle>
        <Link to={`/cultivation`} state={{ selectedPlantId: plantId }}>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Plant size={16} />
            <span>Cultivation Guide</span>
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <PlantUsageChart medicinalUses={medicinalUses} />
      </CardContent>
    </Card>
  );
};

export default PlantUsageSection;
