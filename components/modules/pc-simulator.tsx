'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { PCComponent } from '@/types';
import { PC_COMPONENTS } from '@/data/content';

const COMPONENT_TYPES = [
  { type: 'motherboard', label: 'Carte-mère', icon: '🔌', order: 1 },
  { type: 'cpu', label: 'Processeur', icon: '🧠', order: 2 },
  { type: 'ram', label: 'RAM', icon: '💾', order: 3 },
  { type: 'storage', label: 'Stockage', icon: '💿', order: 4 },
] as const;

export function PCSimulator() {
  const [selectedComponents, setSelectedComponents] = useState<Record<string, PCComponent>>({});
  const [currentStep, setCurrentStep] = useState(0);

  const currentType = COMPONENT_TYPES[currentStep];
  const availableComponents = PC_COMPONENTS.filter(c => c.type === currentType.type);

  const selectComponent = (component: PCComponent) => {
    setSelectedComponents(prev => ({
      ...prev,
      [component.type]: component,
    }));

    if (currentStep < COMPONENT_TYPES.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const isCompatible = (component: PCComponent): boolean => {
    if (currentStep === 0) return true;

    const motherboard = selectedComponents.motherboard;
    if (!motherboard) return true;

    return component.compatible.includes(motherboard.id);
  };

  const calculateScore = () => {
    const components = Object.values(selectedComponents);
    const avgPerformance = components.reduce((sum, c) => sum + c.performance, 0) / components.length;
    const avgEcoScore = components.reduce((sum, c) => sum + c.eco_score, 0) / components.length;
    
    return {
      performance: Math.round(avgPerformance * 10),
      eco: Math.round(avgEcoScore * 10),
    };
  };

  const isComplete = Object.keys(selectedComponents).length === COMPONENT_TYPES.length;
  const progress = (Object.keys(selectedComponents).length / COMPONENT_TYPES.length) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">Simulateur PC Virtuel</h3>
          <p className="text-muted-foreground">
            Monte ton PC en choisissant des composants compatibles
          </p>
        </div>
        <Badge variant="outline" className="text-lg px-4 py-2">
          {Object.keys(selectedComponents).length}/{COMPONENT_TYPES.length}
        </Badge>
      </div>

      <Progress value={progress} className="h-3" />

      {!isComplete ? (
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
            <span className="text-4xl">{currentType.icon}</span>
            <div>
              <h4 className="font-semibold text-lg">Étape {currentStep + 1}: {currentType.label}</h4>
              <p className="text-sm text-muted-foreground">
                Choisis un composant compatible
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableComponents.map((component) => {
              const compatible = isCompatible(component);
              
              return (
                <Card 
                  key={component.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    !compatible ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={() => compatible && selectComponent(component)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{component.name}</CardTitle>
                      <Badge 
                        variant={
                          component.price_range === 'gratuit' ? 'default' :
                          component.price_range === 'peu-cher' ? 'secondary' : 'outline'
                        }
                      >
                        {component.price_range}
                      </Badge>
                    </div>
                    <CardDescription>{component.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Performance:</span>
                        <div className="flex gap-1">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-4 rounded-sm ${
                                i < component.performance ? 'bg-blue-500' : 'bg-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Éco-score:</span>
                        <div className="flex gap-1">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-4 rounded-sm ${
                                i < component.eco_score ? 'bg-green-500' : 'bg-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    {!compatible && (
                      <p className="text-xs text-red-500 mt-2">
                        ⚠️ Non compatible avec ta carte-mère
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      ) : (
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
          <CardHeader>
            <CardTitle className="text-2xl">🎉 PC Assemblé avec succès !</CardTitle>
            <CardDescription>Voici les caractéristiques de ta configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-3xl font-bold text-blue-600">
                  {calculateScore().performance}%
                </div>
                <div className="text-sm text-muted-foreground">Performance</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-3xl font-bold text-green-600">
                  {calculateScore().eco}%
                </div>
                <div className="text-sm text-muted-foreground">Éco-score</div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Composants sélectionnés:</h4>
              {Object.values(selectedComponents).map((component) => (
                <div key={component.id} className="flex items-center justify-between p-2 bg-background rounded">
                  <span className="text-sm">{component.name}</span>
                  <Badge variant="outline">{component.type}</Badge>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button onClick={() => {
                setSelectedComponents({});
                setCurrentStep(0);
              }}>
                🔄 Recommencer
              </Button>
              <Button variant="outline" asChild>
                <a href="#guide">📖 Voir le guide pratique</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation pour revenir en arrière */}
      {currentStep > 0 && !isComplete && (
        <Button 
          variant="outline" 
          onClick={() => setCurrentStep(prev => prev - 1)}
        >
          ← Étape précédente
        </Button>
      )}
    </div>
  );
}
