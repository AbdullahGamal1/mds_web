import React from 'react';

export enum ModelType {
  FLASH = 'gemini-2.5-flash-image', // Nano banana
  PRO = 'gemini-3-pro-image-preview' // Nano banana pro
}

export enum AspectRatio {
  SQUARE = '1:1',
  PORTRAIT = '3:4',
  LANDSCAPE = '4:3',
  WIDESCREEN = '16:9',
  MOBILE = '9:16'
}

export enum ImageResolution {
  ONE_K = '1K',
  TWO_K = '2K',
  FOUR_K = '4K'
}

export interface GeneratedImage {
  url: string;
  timestamp: number;
  prompt: string;
}

export interface ProductTemplate {
  id: string;
  name: string;
  icon: React.ReactNode;
  defaultPrompt: string;
}