
import React from 'react';
import PlantUsageChart from './PlantUsageChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PlantUsageSectionProps {
  medicinalUses: string[];
}

const PlantUsageSection: React.FC<PlantUsageSectionProps> = ({ medicinalUses }) => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-2xl">Medicinal Uses & Effectiveness</CardTitle>
      </CardHeader>
      <CardContent>
        <PlantUsageChart medicinalUses={medicinalUses} />
      </CardContent>
    </Card>
  );
};

export default PlantUsageSection;
