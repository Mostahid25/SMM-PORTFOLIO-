import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';
import { 
  Sparkles, 
  TrendingUp, 
  Users, 
  Target, 
  Layers, 
  Zap, 
  MousePointerClick, 
  CheckCircle2 
} from 'lucide-react';

interface PlatformData {
  id: string;
  name: string;
  color: string;
  glowColor: string;
  description: string;
  metric: string;
  metricLabel: string;
  growth: string;
  iconSvg: ReactNode;
  strategy: {
    objectives: string[];
    demographics: string;
    playbook: string;
  };
  chartData: { month: string; leads: number; roas: number }[];
}

export default function ManagedPlatforms() {
  const [selectedId, setSelectedId] = useState<string>('facebook');

  const platforms: PlatformData[] = [
    {
      id: 'facebook',
      name: 'Facebook',
      color: '#1877F2',
      glowColor: 'rgba(24, 119, 242, 0.15)',
      description: 'Meta Ads Manager scaling, granular pixel targeting, custom & lookalike audiences, CBO/ABO optimizations.',
      metric: '4.8x Avg ROAS',
      metricLabel: 'Return on Ad Spend',
      growth: '+38% MoM',
      iconSvg: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
      strategy: {
        objectives: ['Lead Generation Funnels', 'Pixel Retargeting', 'Catalog Sale Ads'],
        demographics: 'Ages 25–65+, High-intent Buyers, B2B Decision Makers',
        playbook: 'Leverage Advantage+ shopping campaigns combined with hand-crafted scroll-stopping lifestyle creatives for peak CTR.'
      },
      chartData: [
        { month: 'Jan', leads: 420, roas: 3.2 },
        { month: 'Feb', leads: 580, roas: 3.6 },
        { month: 'Mar', leads: 720, roas: 4.1 },
        { month: 'Apr', leads: 890, roas: 4.4 },
        { month: 'May', leads: 1100, roas: 4.6 },
        { month: 'Jun', leads: 1350, roas: 4.8 }
      ]
    },
    {
      id: 'instagram',
      name: 'Instagram',
      color: '#E1306C',
      glowColor: 'rgba(225, 48, 108, 0.15)',
      description: 'Reels scripting, story polls sequence, visual aesthetic matching, creator whitelisting integrations.',
      metric: '3.4% Avg CTR',
      metricLabel: 'Click Through Rate',
      growth: '+52% Reach',
      iconSvg: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      strategy: {
        objectives: ['Aesthetic Grid Authority', 'Reels Retargeting Loop', 'Influencer Amplification'],
        demographics: 'Ages 18–38, Mobile-First Shoppers, Trend-focused Audiences',
        playbook: 'Launch hyper-organic mobile content tailored for explore pages. Use interactive stories to qualify inbound warm leads.'
      },
      chartData: [
        { month: 'Jan', leads: 310, roas: 2.8 },
        { month: 'Feb', leads: 490, roas: 3.1 },
        { month: 'Mar', leads: 680, roas: 3.5 },
        { month: 'Apr', leads: 820, roas: 3.9 },
        { month: 'May', leads: 1050, roas: 4.2 },
        { month: 'Jun', leads: 1290, roas: 4.5 }
      ]
    },
    {
      id: 'twitter',
      name: 'Twitter / X',
      color: '#FFFFFF',
      glowColor: 'rgba(255, 255, 255, 0.1)',
      description: 'Viral thread curation, copy writing, community interactions, and industry trend authority positioning.',
      metric: '18% Eng. Rate',
      metricLabel: 'Average Engagement',
      growth: '+40% Followers',
      iconSvg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      strategy: {
        objectives: ['Thought Leadership Threads', 'Tech-Industry Authority', 'B2B Lead Outreach'],
        demographics: 'Tech founders, VC partners, digital marketers, executives',
        playbook: 'Format high-value checklists as structured long-form threads. Use real-time replies to capture niche community attention.'
      },
      chartData: [
        { month: 'Jan', leads: 120, roas: 2.1 },
        { month: 'Feb', leads: 220, roas: 2.4 },
        { month: 'Mar', leads: 340, roas: 2.9 },
        { month: 'Apr', leads: 480, roas: 3.2 },
        { month: 'May', leads: 600, roas: 3.5 },
        { month: 'Jun', leads: 780, roas: 3.8 }
      ]
    },
    {
      id: 'youtube',
      name: 'YouTube',
      color: '#FF0000',
      glowColor: 'rgba(255, 0, 0, 0.12)',
      description: 'Long-form script architecture, high-CTR thumbnail optimization, and YouTube Shorts dynamic retention editing.',
      metric: '8.4 Min Avg',
      metricLabel: 'Viewer Retention Time',
      growth: '+65% Views',
      iconSvg: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      strategy: {
        objectives: ['Long-form Conversion Funnels', 'Shorts Hook Optimization', 'High-Trust Tutorials'],
        demographics: 'Information Seekers, DIY Buyers, High-Intent Customers',
        playbook: 'Implement detailed case study reviews on long-form video. Repurpose key segments into highly interactive vertical YouTube Shorts.'
      },
      chartData: [
        { month: 'Jan', leads: 150, roas: 2.5 },
        { month: 'Feb', leads: 280, roas: 3.0 },
        { month: 'Mar', leads: 430, roas: 3.4 },
        { month: 'Apr', leads: 590, roas: 3.8 },
        { month: 'May', leads: 760, roas: 4.1 },
        { month: 'Jun', leads: 950, roas: 4.4 }
      ]
    },
    {
      id: 'pinterest',
      name: 'Pinterest',
      color: '#E60023',
      glowColor: 'rgba(230, 0, 35, 0.12)',
      description: 'E-commerce rich pins catalog layout, aesthetic infographic designs, and SEO-targeted board structures.',
      metric: '+280% Traffic',
      metricLabel: 'Inbound Blog Traffic',
      growth: '+45% Pins',
      iconSvg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.396-5.914 1.396-5.914s-.356-.715-.356-1.771c0-1.659.962-2.9 2.162-2.9 1.018 0 1.512.765 1.512 1.682 0 1.025-.653 2.558-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.243 3.756-5.479 0-2.864-2.061-4.869-5.002-4.869-3.407 0-5.405 2.556-5.405 5.193 0 1.029.397 2.134.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.164 0 7.397 2.967 7.397 6.932 0 4.136-2.607 7.464-6.227 7.464-1.215 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.62 0 11.983-5.367 11.983-11.987C24 5.367 18.637 0 12.017 0z" />
        </svg>
      ),
      strategy: {
        objectives: ['Visual Blog Referral Funnels', 'E-commerce Catalog Growth', 'Infographic Viral Saves'],
        demographics: 'Ages 22–45, Lifestyle Shoppers, Design & Home Planners',
        playbook: 'Optimize static visual guides with clear text callouts. Map SEO keywords directly to board and pin descriptions.'
      },
      chartData: [
        { month: 'Jan', leads: 80, roas: 1.8 },
        { month: 'Feb', leads: 140, roas: 2.1 },
        { month: 'Mar', leads: 220, roas: 2.5 },
        { month: 'Apr', leads: 310, roas: 2.8 },
        { month: 'May', leads: 420, roas: 3.2 },
        { month: 'Jun', leads: 550, roas: 3.6 }
      ]
    },
    {
      id: 'reddit',
      name: 'Reddit',
      color: '#FF4500',
      glowColor: 'rgba(255, 69, 0, 0.12)',
      description: 'Native subreddit authority outreach, non-promotional value guides, and Reddit Ads niche targeting.',
      metric: '0.8% Ads CTR',
      metricLabel: 'Extremely Low CPC',
      growth: '+70% Click Rate',
      iconSvg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-1.071 3.213a.75.75 0 0 0 1.139.845l3.582-2.15C8.423 23.468 10.158 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.547 2.597c.563.308 1.18.491 1.831.547a2.25 2.25 0 1 1-4.048 1.453c0-.125.01-.248.028-.369a4.846 4.846 0 0 1-1.921-.77c-.636.568-1.468.914-2.383.914-.908 0-1.735-.341-2.368-.901-.634.56-1.462.901-2.37.901-1.243 0-2.25-1.007-2.25-2.25 0-.583.224-1.113.589-1.512a2.24 2.24 0 0 1-.089-.619c0-1.243 1.007-2.25 2.25-2.25.688 0 1.25.562 1.25 1.25 0 .285-.096.547-.257.759a4.85 4.85 0 0 1 1.954.75c.621-.557 1.436-.897 2.336-.897s1.715.34 2.336.897a4.849 4.849 0 0 1 1.954-.75 1.253 1.253 0 0 1-.257-.759zm-7.51 10.506c-.754 0-1.36-.606-1.36-1.36 0-.754.606-1.36 1.36-1.36.754 0 1.36.606 1.36 1.36 0 .754-.606 1.36-1.36 1.36zm5 0c-.754 0-1.36-.606-1.36-1.36 0-.754.606-1.36 1.36-1.36.754 0 1.36.606 1.36 1.36 0 .754-.606 1.36-1.36 1.36z" />
        </svg>
      ),
      strategy: {
        objectives: ['Native Subreddit Value-Drops', 'Niche Interest Lead Funnel', 'Low-CPC Banner Campaigns'],
        demographics: 'Tech Enthusiasts, Developers, Niche Hobbyists, Highly Skeptical Buyers',
        playbook: 'Format promotional updates purely as self-deprecating or ultra-transparent educational essays. Subreddit community alignment is key.'
      },
      chartData: [
        { month: 'Jan', leads: 60, roas: 1.5 },
        { month: 'Feb', leads: 110, roas: 1.9 },
        { month: 'Mar', leads: 180, roas: 2.3 },
        { month: 'Apr', leads: 260, roas: 2.7 },
        { month: 'May', leads: 370, roas: 3.1 },
        { month: 'Jun', leads: 490, roas: 3.4 }
      ]
    },
    {
      id: 'discord',
      name: 'Discord',
      color: '#5865F2',
      glowColor: 'rgba(88, 101, 242, 0.15)',
      description: 'Private community layout, custom onboarding bot sequences, daily engagement events, and premium server structure.',
      metric: '44% Retention',
      metricLabel: 'Daily Active Members',
      growth: '+85% Members',
      iconSvg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 1-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
        </svg>
      ),
      strategy: {
        objectives: ['Paid Mastermind Funnels', 'Real-Time Customer Retention', 'Community Growth Events'],
        demographics: 'Web3 & Tech Communities, Gamers, Dev Teams, Digital Students',
        playbook: 'Construct premium visual onboarding paths. Program automated custom bots to tag and greet incoming high-value customers.'
      },
      chartData: [
        { month: 'Jan', leads: 90, roas: 2.0 },
        { month: 'Feb', leads: 150, roas: 2.4 },
        { month: 'Mar', leads: 240, roas: 2.8 },
        { month: 'Apr', leads: 380, roas: 3.3 },
        { month: 'May', leads: 560, roas: 3.7 },
        { month: 'Jun', leads: 720, roas: 4.1 }
      ]
    },
    {
      id: 'telegram',
      name: 'Telegram',
      color: '#24A1DE',
      glowColor: 'rgba(36, 161, 222, 0.15)',
      description: 'Instant marketing channels, highly targeted announcement broadcasts, interactive polls, and automated funnel bots.',
      metric: '68% Open Rate',
      metricLabel: 'Average Broadcast Read',
      growth: '+110% Broadcasts',
      iconSvg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0C5.344 0 0 5.344 0 12c0 6.656 5.344 12 11.944 12 6.656 0 12-5.344 12-12 0-6.656-5.344-12-12-12zm5.882 8.246c-.18.894-.972 5.568-1.378 7.747-.172.922-.511 1.23-.84 1.261-.715.067-1.258-.47-1.95-.923-1.082-.709-1.693-1.15-2.742-1.841-1.213-.799-.427-1.24.265-1.957.181-.187 3.328-3.052 3.389-3.314.008-.034.014-.162-.062-.23-.076-.067-.189-.044-.27-.026-.115.026-1.944 1.233-5.485 3.619-.518.356-.985.531-1.399.521-.457-.01-1.336-.259-1.99-.472-.801-.26-1.439-.398-1.383-.84.029-.23.346-.467.951-.71 3.716-1.616 6.195-2.684 7.437-3.203 3.535-1.48 4.269-1.737 4.748-1.746.105-.002.34.024.492.148.128.104.163.249.171.353.008.104.018.331.009.489z" />
        </svg>
      ),
      strategy: {
        objectives: ['Instant Alert Pipelines', 'Daily Signal Casts', 'Onboarding Funnel Webhooks'],
        demographics: 'Crypto Investors, Tech Traders, Instant News Seekers, Modern Consumers',
        playbook: 'Format clean broadcast posts using dynamic rich media previews. Push exclusive conversion links only to warm leads.'
      },
      chartData: [
        { month: 'Jan', leads: 200, roas: 3.0 },
        { month: 'Feb', leads: 350, roas: 3.4 },
        { month: 'Mar', leads: 520, roas: 3.8 },
        { month: 'Apr', leads: 710, roas: 4.1 },
        { month: 'May', leads: 950, roas: 4.4 },
        { month: 'Jun', leads: 1250, roas: 4.7 }
      ]
    },
    {
      id: 'threads',
      name: 'Threads',
      color: '#FFFFFF',
      glowColor: 'rgba(255, 255, 255, 0.12)',
      description: 'Conversational marketing, casual direct interactions, cross-platform Instagram audience scaling, organic algorithmic loops.',
      metric: '25% Growth',
      metricLabel: 'Week-over-Week Traffic',
      growth: '+120% Engagement',
      iconSvg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 4.1c-1.895 0-3.435.53-4.524 1.554C6.41 6.648 5.9 8.04 5.9 9.8c0 1.76.51 3.152 1.576 4.146C8.565 14.936 10.105 15.462 12 15.462c1.47 0 2.65-.333 3.468-.973l.03-.024.03-.024c.05-.044.131-.132.18-.184l-.845-.845a2.535 2.535 0 0 1-.184.184c-.615.485-1.52.742-2.679.742-1.42 0-2.505-.39-3.26-.145.753-.147 1.144-.822 1.144-1.956V9.8c0-1.134.39-1.811 1.144-1.958.755-.145 1.84-.145 3.26-.145 1.159 0 2.064.257 2.679.742.053.052.134.14.184.184l.845-.845c-.049-.052-.13-.14-.18-.184-.818-.64-1.998-.973-3.468-.973z" />
        </svg>
      ),
      strategy: {
        objectives: ['Casual Conversational Authority', 'Rapid Engagement Hacking', 'Direct Message Conversion'],
        demographics: 'Young Professionals, Brand loyalists, Creative Executives',
        playbook: 'Adopt a highly personal, behind-the-scenes writing tone. Publish rapid opinion queries to provoke friendly dialogue.'
      },
      chartData: [
        { month: 'Jan', leads: 50, roas: 1.6 },
        { month: 'Feb', leads: 95, roas: 2.0 },
        { month: 'Mar', leads: 160, roas: 2.4 },
        { month: 'Apr', leads: 240, roas: 2.8 },
        { month: 'May', leads: 350, roas: 3.2 },
        { month: 'Jun', leads: 480, roas: 3.5 }
      ]
    },
    {
      id: 'quora',
      name: 'Quora',
      color: '#B92B27',
      glowColor: 'rgba(185, 43, 39, 0.15)',
      description: 'High-intent answers optimizing long-tail organic search, native Quora Ads targeting highly specific topic tags.',
      metric: '2.8x Quality',
      metricLabel: 'Higher Lead Intent',
      growth: '+32% Search Rank',
      iconSvg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.396-5.914 1.396-5.914s-.356-.715-.356-1.771c0-1.659.962-2.9 2.162-2.9 1.018 0 1.512.765 1.512 1.682 0 1.025-.653 2.558-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.243 3.756-5.479 0-2.864-2.061-4.869-5.002-4.869-3.407 0-5.405 2.556-5.405 5.193 0 1.029.397 2.134.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.164 0 7.397 2.967 7.397 6.932 0 4.136-2.607 7.464-6.227 7.464-1.215 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146" />
        </svg>
      ),
      strategy: {
        objectives: ['Long-tail Google Search Traffic', 'Detailed Answer Authority', 'Inbound B2B Inquiries'],
        demographics: 'Professionals seeking specific answers, Academic buyers, Decision Makers',
        playbook: 'Author highly detailed answers targeting top Google search phrases. Embed non-intrusive value case-study links.'
      },
      chartData: [
        { month: 'Jan', leads: 40, roas: 1.4 },
        { month: 'Feb', leads: 75, roas: 1.8 },
        { month: 'Mar', leads: 120, roas: 2.2 },
        { month: 'Apr', leads: 180, roas: 2.6 },
        { month: 'May', leads: 260, roas: 3.0 },
        { month: 'Jun', leads: 350, roas: 3.3 }
      ]
    }
  ];

  const selectedPlatform = platforms.find(p => p.id === selectedId) || platforms[0];

  return (
    <section id="managed-platforms" className="py-24 bg-[#111111] relative overflow-hidden border-t border-b border-white/5">
      {/* Dynamic light streak behind selected monitor */}
      <div 
        className="absolute top-1/2 right-10 -translate-y-1/2 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none transition-all duration-700"
        style={{ backgroundColor: `${selectedPlatform.color}05` }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Multi-Channel Dominance</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
            The Platforms I Manage
          </h2>
          <p className="text-gray-400 mt-4 text-base leading-relaxed">
            I design platform-native copy, configure algorithmic ad structures, and monitor scaling parameters across 10 vital social acquisition networks.
          </p>
        </div>

        {/* Master layout Split screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Grid: Platform Selectors */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-2 gap-3.5">
            {platforms.map((platform) => {
              const isActive = platform.id === selectedId;
              return (
                <button
                  key={platform.id}
                  onClick={() => setSelectedId(platform.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                    isActive 
                      ? 'bg-[#161616] border-white/20 shadow-lg' 
                      : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.01]'
                  }`}
                  style={{
                    boxShadow: isActive ? `0 10px 20px -10px ${platform.color}20` : undefined
                  }}
                >
                  {/* Subtle top indicator bar */}
                  {isActive && (
                    <motion.div 
                      layoutId="active-indicator-bar"
                      className="absolute top-0 left-0 right-0 h-[2.5px]"
                      style={{ backgroundColor: platform.color }}
                    />
                  )}

                  <div className="flex items-center justify-between">
                    <div 
                      className="p-2 rounded-xl transition-colors shrink-0"
                      style={{ 
                        backgroundColor: isActive ? `${platform.color}15` : 'rgba(255,255,255,0.02)',
                        color: isActive ? platform.color : '#888888'
                      }}
                    >
                      {platform.iconSvg}
                    </div>
                    <span 
                      className="text-[10px] font-mono font-bold tracking-wider rounded-full px-2.5 py-0.5 bg-white/5"
                      style={{ color: isActive ? platform.color : '#666666' }}
                    >
                      {platform.growth}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-sm font-bold text-white tracking-tight">{platform.name}</h3>
                    <p className="text-[10px] text-gray-500 font-mono mt-0.5 truncate">{platform.metric}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Live interactive Workspace Monitor */}
          <div className="lg:col-span-7">
            <div className="bg-[#161616] border border-white/5 rounded-3xl p-6 md:p-8 relative shadow-2xl overflow-hidden min-h-[500px]">
              {/* Sleek platform brand accent bar */}
              <div 
                className="absolute top-0 left-0 w-full h-[3px] transition-all duration-500"
                style={{ backgroundColor: selectedPlatform.color }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPlatform.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Header of Active Monitor */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-5">
                    <div className="flex items-center gap-3.5">
                      <div 
                        className="p-3.5 rounded-2xl text-white shadow-lg"
                        style={{ 
                          backgroundColor: `${selectedPlatform.color}15`,
                          color: selectedPlatform.color,
                          boxShadow: `0 8px 16px -4px ${selectedPlatform.color}30`
                        }}
                      >
                        {selectedPlatform.iconSvg}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-bold text-white font-sans">{selectedPlatform.name} Strategy Suite</h4>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        </div>
                        <p className="text-[10px] text-gray-500 font-mono mt-0.5 uppercase tracking-widest">Active Campaign Workspace</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-bold text-white font-mono" style={{ color: selectedPlatform.color }}>
                        {selectedPlatform.metric}
                      </p>
                      <p className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">{selectedPlatform.metricLabel}</p>
                    </div>
                  </div>

                  {/* High level description */}
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-sans">
                    {selectedPlatform.description}
                  </p>

                  {/* Recharts Conversion Growth Chart */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                      <span className="flex items-center gap-1"><TrendingUp className="w-3.5 h-3.5" /> Direct Conversion Scale</span>
                      <span>Target Optimization Curve</span>
                    </div>

                    <div className="h-44 w-full bg-[#1c1c1c] border border-white/5 rounded-2xl p-3 flex items-center justify-center relative">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={selectedPlatform.chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                          <defs>
                            <linearGradient id={`gradient-${selectedPlatform.id}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor={selectedPlatform.color} stopOpacity={0.2}/>
                              <stop offset="95%" stopColor={selectedPlatform.color} stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <XAxis 
                            dataKey="month" 
                            stroke="#555" 
                            fontSize={10} 
                            tickLine={false} 
                            axisLine={false} 
                          />
                          <YAxis 
                            stroke="#555" 
                            fontSize={10} 
                            tickLine={false} 
                            axisLine={false} 
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#111', 
                              borderColor: 'rgba(255,255,255,0.1)', 
                              borderRadius: '12px',
                              fontSize: '11px'
                            }} 
                            labelStyle={{ color: '#aaa', fontWeight: 'bold' }}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="leads" 
                            name="Conversions"
                            stroke={selectedPlatform.color} 
                            strokeWidth={2} 
                            fillOpacity={1} 
                            fill={`url(#gradient-${selectedPlatform.id})`} 
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Core Strategy Parameters */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    
                    {/* Objectives list */}
                    <div className="bg-[#1c1c1c] border border-white/5 rounded-2xl p-4.5">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-3">
                        <Target className="w-3.5 h-3.5 text-blue-400" />
                        <span>KPI Benchmarks</span>
                      </div>
                      <ul className="space-y-2 text-xs text-gray-300 font-sans">
                        {selectedPlatform.strategy.objectives.map((obj, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Active Playbook */}
                    <div className="bg-[#1c1c1c] border border-white/5 rounded-2xl p-4.5">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-3">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        <span>Execution Playbook</span>
                      </div>
                      <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
                        {selectedPlatform.strategy.playbook}
                      </p>
                    </div>

                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
