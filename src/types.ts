export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  strategy: string;
  results: string;
  heroImage: string;
  overview: string;
  goals: string[];
  audienceResearch: string;
  contentStrategy: string;
  postingCalendar: string[];
  creativeExamples: {
    title: string;
    desc: string;
    type: 'Instagram Grid' | 'Facebook Post' | 'Carousel Post' | 'Story' | 'Reel' | 'Ad Creative';
    previewUrl: string;
    metrics?: string;
  }[];
  metaAdsStrategy: string;
  kpis: string[];
  resultsDetailed: {
    label: string;
    value: string;
    desc: string;
  }[];
  lessonsLearned: string;
  futureOptimization: string;
  chartData: {
    name: string;
    value: number;
    secondaryValue?: number;
  }[];
  chartLabel: string;
  secondaryChartLabel?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  outcome: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ToolItem {
  name: string;
  iconName: string;
  category: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TrustMetric {
  value: string;
  label: string;
  sublabel: string;
}
