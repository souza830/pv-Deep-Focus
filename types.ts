// Fix: Added React import to provide the React namespace for React.ReactNode
import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum FocusArchetype {
  SCATTERBRAIN = 'Disperso Digital',
  PERFECTIONIST = 'Perfeccionista Paralisado',
  BURNOUT = 'Executante Exausto',
  REACTIVE = 'Reator Constante'
}

export interface DiagnosticResult {
  archetype: FocusArchetype;
  description: string;
  advice: string;
}