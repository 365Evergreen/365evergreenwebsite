export interface NavigationItem {
  id: string;
  label: string;
  slug: string;
  parent: string;
}

export interface NavigationData {
  schemaVersion: number;
  generatedAt: string;
  count: number;
  items: NavigationItem[];
}