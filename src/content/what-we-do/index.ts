import type { ContentPage } from '../../types/ContentPage.types';
import { automation } from './automation';
import { modernWorkplace } from './modern-workplace';

export const whatWeDoPages: Record<string, ContentPage> = {
  automation,
  'modern-workplace': modernWorkplace,
};