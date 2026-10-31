export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MetricItem {
  label: string;
  value: string;
  change?: string;
}

export interface ProjectMetadata {
  name: string;
  version: string;
  author: string;
  repository?: string;
}
