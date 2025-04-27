import { Incident } from './types';

export const mockIncidents: Incident[] = [
  {
    id: '1',
    title: 'AI Model Bias in Hiring System',
    description: 'An AI-powered hiring system was found to be biased against certain demographic groups, leading to unfair hiring practices.',
    severity: 'high',
    reportedDate: '2024-03-15T10:30:00Z'
  },
  {
    id: '2',
    title: 'Chatbot Providing Harmful Advice',
    description: 'A customer service chatbot was found to be providing potentially harmful medical advice to users.',
    severity: 'medium',
    reportedDate: '2024-03-14T15:45:00Z'
  },
  {
    id: '3',
    title: 'Data Privacy Concern in AI Assistant',
    description: 'An AI assistant was found to be storing sensitive user conversations without proper encryption.',
    severity: 'medium',
    reportedDate: '2024-03-13T09:20:00Z'
  },
  {
    id: '4',
    title: 'Minor UI Glitch in Recommendation System',
    description: 'A recommendation system occasionally shows incorrect product images in the user interface.',
    severity: 'low',
    reportedDate: '2024-03-12T14:10:00Z'
  }
]; 