import { TrustMetric, CaseStudy, Service, ProcessStep, ToolItem, BlogArticle, FAQItem } from './types';

export const trustMetrics: TrustMetric[] = [
  { value: '1.2M+', label: 'Organic Views', sublabel: 'Generated across social platforms' },
  { value: '387K+', label: 'Ad Impressions', sublabel: 'Targeted and optimized views' },
  { value: '99.5%', label: 'Non-Follower Reach', sublabel: 'Average virality optimization' },
  { value: '28 Days', label: 'Average Growth', sublabel: 'Time to see consistent traction' }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'organic-social-growth',
    title: 'Organic Social Growth Campaign',
    industry: 'Local Brand / Service Business',
    challenge: 'A prominent local business suffered from stagnant social media accounts, near-zero engagement, and absolute dependency on high-budget paid ads for lead generation. Their existing feed consisted of dry, generic stock graphics and highly erratic posting schedules.',
    strategy: 'We completely overhauled the content approach by transitioning to high-value, authority-building, vertical video content (Instagram Reels & Facebook Videos). Implemented a structured social outreach system and optimized the profile for search (Instagram SEO). We prioritized authentic behind-the-scenes content that humanized the brand and direct-to-camera educational reels addressing common local customer pain points.',
    results: 'The profile achieved a staggering 320% increase in monthly reach. More importantly, it established a high-converting inbound pipeline generating over 150+ highly qualified organic leads within 90 days without a single dollar spent on ads.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=600',
    overview: 'This campaign was focused on unlocking the hidden, compounding potential of organic reach. By changing how the brand communicates, we turned passive scrolls into active inquiries.',
    goals: [
      'Increase monthly organic profile reach by 150%',
      'Create a repeatable organic lead capture mechanism',
      'Grow the active follower base by 40% with local targeted accounts',
      'Optimize profile bio, highlights, and CTAs for optimal conversion'
    ],
    audienceResearch: 'Our research revealed that local customers wanted authenticity and educational guidance, rather than aggressive promotional pitches. They highly valued expert insight into the service delivery process. We mapped out the top 10 burning questions local clients ask before hiring a provider and used them as our baseline script library.',
    contentStrategy: 'We established a "3-Pillar" Content System: 1. Authority (Expert Educational Reels), 2. Social Proof (Video Testimonials and Work Proof), 3. Relatability (Behind-the-scenes, team culture). We used bold typography overlays, high-contrast covers, and hook-heavy vertical scripting to maximize retention in the first 3 seconds.',
    postingCalendar: [
      'Monday: Problem-solving Reel (Educational Pillar)',
      'Wednesday: Client Case Study Carousel (Social Proof Pillar)',
      'Friday: Behind-the-Scenes/Process Video (Relatability Pillar)',
      'Daily: Dynamic Instagram & Facebook Stories (Engagement Polls, Daily Tips, Quick Q&A)'
    ],
    creativeExamples: [
      {
        title: 'The "Secret Checklist" Reel',
        desc: 'A 15-second vertical video showing the exact steps to evaluate local services. Built with high-contrast text and interactive overlays.',
        type: 'Reel',
        previewUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400&h=400',
        metrics: '45K+ Views | 1,200+ Saves'
      },
      {
        title: 'Interactive Q&A Session',
        desc: 'Custom-designed interactive stories with Q&A stickers and visual step-by-step guides on major client questions.',
        type: 'Story',
        previewUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400&h=400',
        metrics: '15% Interaction Rate'
      },
      {
        title: 'Before & After Result Deck',
        desc: 'A seamless, swipable carousel showcasing a client transformation project from day 1 to day 30.',
        type: 'Carousel Post',
        previewUrl: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=400&h=400',
        metrics: '8.4% Engagement Rate'
      }
    ],
    metaAdsStrategy: 'Although primarily organic, we ran a low-budget ($5/day) Profile Visit Campaign targeting past website visitors and local lookalike audiences to amplify the top-performing organic reels and capture warm leads into the funnel.',
    kpis: [
      'Organic Account Reach',
      'Inbound Direct Messages (DMs) requesting consultations',
      'Follower Growth Rate',
      'Video Average Watch Time'
    ],
    resultsDetailed: [
      { label: 'Organic Reach', value: '184,000+', desc: 'Total accounts reached organically' },
      { label: 'Inbound Leads', value: '150+', desc: 'Direct organic inquiries via DMs and profile links' },
      { label: 'Engagement Rate', value: '7.8%', desc: 'Industry-leading interaction rate on standard posts' },
      { label: 'Follower Growth', value: '+1,850', desc: 'Highly targeted local followers gained' }
    ],
    lessonsLearned: 'Authenticity always wins over polished corporate videos. A simple, raw, smartphone-recorded video showing a real person solving a real problem consistently outperformed heavy professional video productions.',
    futureOptimization: 'Double down on vertical video reply systems to comments. In future sprints, we will introduce automated DM marketing tools (such as ManyChat) to instantly deliver resources when users comment a keyword, further streamlining the conversion loop.',
    chartData: [
      { name: 'Month 1', value: 12000 },
      { name: 'Month 2', value: 38000 },
      { name: 'Month 3', value: 89000 },
      { name: 'Month 4', value: 184000 }
    ],
    chartLabel: 'Organic Reach (Impressions)'
  },
  {
    id: 'restaurant-growth-strategy',
    title: 'Restaurant Growth Strategy',
    industry: 'Gourmet Bistro & Cafe (Concept)',
    challenge: 'A high-end casual dining restaurant struggled with extremely quiet weekday lunch and dinner slots despite busy weekend crowds. They had a virtually non-existent social media footprint and were struggling to convey their premium, farm-to-table food concept to corporate workers and food enthusiasts in the surrounding metropolitan area.',
    strategy: 'Designed the "Weekday Gastronomy Loop". We proposed creating sensory, mouth-watering short-form Reels capturing the visual drama of cooking (sizzling dishes, chef plating, slow pours). To monetize this attention, we executed hyper-localized Meta Ads (geofenced to a tight 3-mile radius around the bistro), targeting corporate employees during office hours with exclusive, downloadable mid-week lunch packages and digital vouchers.',
    results: 'The campaign boosted weekday table bookings by 45%, converting offline foot-traffic into a digital customer database. The localized ad campaigns achieved an average click-through rate (CTR) of 4.2% and delivered a highly profitable 6.8x Return on Ad Spend (ROAS).',
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200&h=600',
    overview: 'This concept case study maps out a high-impact, geofenced marketing funnel tailored for brick-and-mortar hospitality brands seeking to stabilize weekday cash flows.',
    goals: [
      'Increase weekday dining bookings (Mon-Thu) by 30%',
      'Build a localized email/SMS list of 1,000+ nearby food lovers',
      'Establish a visual aesthetic on Instagram that commands premium pricing',
      'Test geofenced advertising with highly granular timing offsets'
    ],
    audienceResearch: 'Our target persona was the local "Corporate Lunch Goer" and the "Evening Food Enthusiast" residing within a 3-mile radius. Corporate workers prioritised speed, visually attractive settings for client meetings, and healthy but indulgent food options. Evening diners prioritized culinary experiences, curated wine lists, and premium presentation.',
    contentStrategy: 'We designed the content to evoke visual hunger. High-definition close-up culinary action shots, macro detail videos of signature ingredients, and casual, energetic chef-talk Reels. Colors were kept warm, rich, and highly saturated to stimulate appetite.',
    postingCalendar: [
      'Monday 10:00 AM: Monday Motivation lunch special preview (Reel)',
      'Wednesday 3:00 PM: Chef prep for weekend specials with sound design (ASMR Reel)',
      'Thursday 5:00 PM: Dynamic Weekend booking CTA with active table views (Photo Post)',
      'Daily Stories: Live look inside the kitchen, today\'s fresh ingredient arrivals, guest reaction clips'
    ],
    creativeExamples: [
      {
        title: 'The Sizzling Skillet Hook',
        desc: 'A dynamic 8-second video featuring high-definition audio of a signature steak sear. Paired with a "Get directions" button.',
        type: 'Ad Creative',
        previewUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400&h=400',
        metrics: '4.2% CTR | $0.25 Cost Per Click'
      },
      {
        title: 'Corporate Lunch Voucher Carousel',
        desc: 'A carousel post outlining the 3 express lunch menus tailored to office workers. Features direct discount-code download button.',
        type: 'Carousel Post',
        previewUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400&h=400',
        metrics: '350+ Vouchers Downloaded'
      }
    ],
    metaAdsStrategy: 'We deployed geofenced Meta Lead Generation Ads delivering direct digital wallet passes and SMS vouchers. Ad schedule was tightly restricted to Monday through Thursday, from 10:30 AM to 1:30 PM (pre-lunch decision hour) and 4:30 PM to 7:00 PM (commuter dinner decision hour).',
    kpis: [
      'Digital Voucher Downloads',
      'Table Bookings via Meta Ads custom landing pages',
      'Average Cost-Per-Booking',
      'Return on Ad Spend (ROAS)'
    ],
    resultsDetailed: [
      { label: 'Weekday Bookings', value: '+45%', desc: 'Increase in Monday-Thursday table occupancy' },
      { label: 'Return on Ad Spend', value: '6.8x', desc: 'Direct revenue tracked against advertising spend' },
      { label: 'Lead Generation', value: '1,200+', desc: 'Local subscribers captured in VIP dining database' },
      { label: 'Ad CTR', value: '4.2%', desc: 'Significantly higher than the 1.2% hospitality average' }
    ],
    lessonsLearned: 'Timing of ad delivery is everything for hospitality. Serving ads at 11:15 AM catches office workers exactly when they are discussing where to go for lunch, yielding 3x higher click rates than running ads all day.',
    futureOptimization: 'Integrate Meta Messenger automation. Allow users to tap on an Instagram story and instantly book a table or order takeout directly inside their direct messages via an automated chatbot flow.',
    chartData: [
      { name: 'Mon', value: 15, secondaryValue: 32 },
      { name: 'Tue', value: 18, secondaryValue: 35 },
      { name: 'Wed', value: 12, secondaryValue: 40 },
      { name: 'Thu', value: 20, secondaryValue: 48 },
      { name: 'Fri', value: 75, secondaryValue: 80 },
      { name: 'Sat', value: 95, secondaryValue: 98 },
      { name: 'Sun', value: 80, secondaryValue: 85 }
    ],
    chartLabel: 'Table Occupancy % (Before)',
    secondaryChartLabel: 'Table Occupancy % (After Strategy)'
  },
  {
    id: 'fashion-brand',
    title: 'D2C Apparel Scaling Campaign',
    industry: 'Sustainable Fashion & E-commerce (Concept)',
    challenge: 'A growing sustainable fashion label struggled to scale its online storefront. Their main pain points were incredibly high customer acquisition costs (CAC), low email capture rates, and heavy shopping-cart abandonment. Their social media presence was visually pretty, but lacked direct conversion triggers.',
    strategy: 'Structured a comprehensive full-funnel Meta Ads architecture. 1. Top of Funnel (TOF): Ran short-form vertical videos demonstrating product versatility, sustainable fabric sourcing, and styled lookbooks. 2. Middle of Funnel (MOF): Retargeted video viewers and social engagers with carousel ads packed with glowing user testimonials and fabric-safety highlights. 3. Bottom of Funnel (BOF): Deployed dynamic catalog ads targeting cart abandoners with an exclusive first-order incentive.',
    results: 'This integrated funnel reduced customer acquisition costs (CAC) by 38%, improved e-commerce checkout conversions by 54%, and achieved a sustained, profitable 4.5x Return on Ad Spend (ROAS) during scaling phases.',
    heroImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200&h=600',
    overview: 'An e-commerce scaling model showing how structured retargeting and distinct creative messaging at each stage of the buyer journey can dramatically lower acquisition costs.',
    goals: [
      'Scale monthly ad spend from $2,000 to $10,000 profitably',
      'Reduce average Customer Acquisition Cost (CAC) below $25',
      'Maintain an overall Meta Ads ROAS above 4.0x',
      'Improve bottom-of-funnel checkout completion rates'
    ],
    audienceResearch: 'We segmented the audience into Eco-conscious fashion shoppers, minimalist lifestyle enthusiasts, and premium apparel buyers. We researched their purchase barriers: size doubts, return policies, and pricing justification. Our creatives directly addressed these barriers with quick callouts.',
    contentStrategy: 'High-contrast studio shoots combined with low-fidelity, authentic user-generated content (UGC) showing sizing, touch, and everyday movement. We emphasized visual text overlays like "Fits True to Size" and "Made from 100% Organic Bamboo".',
    postingCalendar: [
      'Monday: New arrival launch / styled lookbook Reels',
      'Wednesday: Sustainable sourcing spotlight / behind-the-brand video',
      'Friday: Customer UGC compilation / sizing guides',
      'Stories: Real-time customer reviews, fit-checks with team members, styling polls'
    ],
    creativeExamples: [
      {
        title: 'The "3 Ways to Style" UGC Video',
        desc: 'An authentic customer-style vertical video highlighting a single dress styled for three distinct occasions. Captures high retention.',
        type: 'Ad Creative',
        previewUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=400&h=400',
        metrics: '4.5x ROAS | $18 Acquisition Cost'
      },
      {
        title: 'Material Close-Up Carousel',
        desc: 'A swipable carousel detailing bamboo thread counts, stretch capacity, and washing instructions. High conversion rates.',
        type: 'Carousel Post',
        previewUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=400&h=400',
        metrics: '3.1% Conversion Rate'
      }
    ],
    metaAdsStrategy: 'TOF utilized broad demographic targeting combined with high-budget Advantage+ shopping campaigns. Retargeting (MOF/BOF) utilized custom pixel events (Viewed Content, Added to Cart) with dynamic catalog overlays showing active reviews.',
    kpis: [
      'Customer Acquisition Cost (CAC)',
      'E-commerce Purchase Value',
      'Add-to-Cart-to-Purchase Conversion %',
      'Advantage+ Campaign Efficiency'
    ],
    resultsDetailed: [
      { label: 'CAC Reduction', value: '-38%', desc: 'Lowered the cost required to gain a purchasing customer' },
      { label: 'Scale Factor', value: '5.0x', desc: 'Successfully scaled monthly ad budgets with high profit' },
      { label: 'E-commerce Conversion', value: '+54%', desc: 'Increase in overall website purchase completion' },
      { label: 'Campaign ROAS', value: '4.5x', desc: 'Maintained excellent profitability margin' }
    ],
    lessonsLearned: 'Dynamic catalog ads (DABA/DPA) perform 2x better when styled with custom brand frames and rating stars overlaid directly onto the product imagery using Meta feeds overlays.',
    futureOptimization: 'A/B test TikTok Spark Ads and Instagram Reels boosting in parallel to identify cross-platform creative performance indicators for upcoming product launches.',
    chartData: [
      { name: 'Week 1', value: 2.1 },
      { name: 'Week 2', value: 2.9 },
      { name: 'Week 3', value: 3.8 },
      { name: 'Week 4', value: 4.5 }
    ],
    chartLabel: 'Meta Ads Return on Ad Spend (ROAS)'
  },
  {
    id: 'fitness-studio',
    title: 'Hyperlocal Member Acquisition',
    industry: 'Boutique Fitness & Wellness Studio (Concept)',
    challenge: 'A newly opened premium boutique fitness studio was suffering from slow class bookings and an empty member pipeline. They were surrounded by massive, cheap national gym chains and struggled to articulate why their high-end, personalized coaching experience justified a higher premium membership fee.',
    strategy: 'Launched an aggressive local-funnel campaign. We designed organic, relatable trainer-spotlight videos and member-progress Reels to build familiarity and community. To convert local interest, we ran highly targeted Meta Lead Ads offering a low-friction "Free 3-Day VIP VIP Experience Pass". We coupled the ad campaign with a robust SMS follow-up sequence to book trials within 5 minutes of sign-up.',
    results: 'Captured 240+ hyper-local leads within 30 days. Implementing our rapid trial-to-membership sales playbook converted 32% of trial-goers into long-term monthly active subscribers, adding 77 high-value members to the studio.',
    heroImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200&h=600',
    overview: 'This project demonstrates the impact of low-barrier introductory offers paired with instant automated lead nurturing for regional wellness and leisure spaces.',
    goals: [
      'Generate 200+ high-quality local leads in 30 days',
      'Achieve a lead-to-trial conversion rate of over 50%',
      'Acquire 60+ new active monthly club memberships',
      'Position trainers as local social media wellness authorities'
    ],
    audienceResearch: 'Our target persona was busy local professionals aged 25-45 looking to improve their health in an intimate, non-judgmental, community-driven environment. Their main fears were feeling lost in class, lack of individual coach attention, and intimidating gym atmospheres.',
    contentStrategy: 'Warm, highly inclusive, energy-boosting vertical videos. We filmed daily class snippets, coaches correcting postures in friendly ways, and direct testimonials of members talking about the positive mental changes they felt. We avoided intimidating bodybuilding visuals and focused on community, health, and vitality.',
    postingCalendar: [
      'Tuesday: "Meet the Coach" / Quick functional fitness advice (Reel)',
      'Thursday: Active class snippet / High-energy community loop (Video)',
      'Saturday: Member Transformation Story / Real testimonial (Photo Post)',
      'Daily Stories: Class availability countdowns, healthy local recipe recommendations, client shout-outs'
    ],
    creativeExamples: [
      {
        title: 'The "Gym Intimidation" Solution',
        desc: 'A friendly Reels video from the head trainer walk-through the studio and demonstrating how welcoming the first session is. Built to counter fears.',
        type: 'Reel',
        previewUrl: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400&h=400',
        metrics: '12K+ Local Views'
      },
      {
        title: 'VIP 3-Day Pass Lead Ad',
        desc: 'Meta Instant Lead Form ad featuring a high-quality video of studio perks and a simple 2-click form pre-filled with phone details.',
        type: 'Ad Creative',
        previewUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400&h=400',
        metrics: '240 leads | $4.20 per lead'
      }
    ],
    metaAdsStrategy: 'Meta Lead Ads geocentered precisely at a 5-mile radius around the studio coordinates, targeting interests in wellness, yoga, high-intensity training, and healthy lifestyles, optimized for lead volume.',
    kpis: [
      'Cost-Per-Lead (CPL)',
      'Lead-to-Trial Booking %',
      'Trial-to-Paid Member Conversion %',
      'Total Monthly Recurring Revenue (MRR) added'
    ],
    resultsDetailed: [
      { label: 'Leads Generated', value: '242', desc: 'In-market local users who registered contact details' },
      { label: 'Cost Per Lead', value: '$4.20', desc: 'Extremely efficient customer acquisition cost' },
      { label: 'Conversion Rate', value: '32%', desc: 'Trial lead to full monthly active paying member conversion' },
      { label: 'New Memberships', value: '77', desc: 'Sustained, recurring revenue contracts added' }
    ],
    lessonsLearned: 'Leads get cold incredibly fast. Reaching out via a friendly text message within 5 minutes of form completion increased trial booking rates by 2.5x compared to waiting 24 hours to email them.',
    futureOptimization: 'Incorporate automated text-scheduling systems to allow instant self-booking of physical trials directly onto the studio calendar immediately upon form submission.',
    chartData: [
      { name: 'Week 1', value: 45 },
      { name: 'Week 2', value: 102 },
      { name: 'Week 3', value: 178 },
      { name: 'Week 4', value: 242 }
    ],
    chartLabel: 'Cumulative Local Leads Recruited'
  },
  {
    id: 'real-estate',
    title: 'Premium Residential Leads Funnel',
    industry: 'Luxury Real Estate & Development (Concept)',
    challenge: 'A high-end property developer was launching a new mid-to-luxury suburban townhouse complex. Traditional property portal listings were crowded with competitors, and standard web landing page forms attracted mostly low-intent leads with fake phone numbers, causing massive delays and frustration for the sales agency.',
    strategy: 'Designed an interactive immersive lead funnel. First, we produced high-end virtual property tour video creatives for Meta feeds. Then, instead of directing users to a standard website, we designed high-intent Meta Instant Forms that required potential buyers to answer three specific screening questions regarding their purchasing timeline and active budget range, utilizing phone-number validation to ensure lead quality.',
    results: 'The high-intent screening funnel decreased cost per qualified lead by 42%. More importantly, the sales team reported a massive jump in contact rates (from 25% up to 80%) because the leads were genuinely interested and pre-qualified, leading to 4 closed property contracts in the first 45 days.',
    heroImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200&h=600',
    overview: 'This project highlights how adding conscious friction in lead forms can dramatically filter out unqualified users and supply sales teams with high-intent buyers.',
    goals: [
      'Generate leads with validated contact details and clear budgets',
      'Reduce sales agent hours spent on dead-end leads',
      'Produce premium video ad assets that establish developer prestige',
      'Lower overall cost-per-qualified-lead (CPQL)'
    ],
    audienceResearch: 'Our target buyers were affluent young families and real estate investors. We analyzed their buying factors: local school access, neighborhood safety, transport options, and luxury finishes. Our ad creatives highlight these benefits instead of just listing basic apartment sizes.',
    contentStrategy: 'Cinematic architectural walk-through videos, showing flowing natural light, high-end kitchens, and children playing in the backyard. We paired these with high-quality carousels showcasing clean, crisp renderings and interactive site floor plans.',
    postingCalendar: [
      'Monday: Cinematic walk-through video highlighting premium kitchen (Reel)',
      'Wednesday: Neighborhood guide highlighting local schools & transit (Carousel)',
      'Friday: Developer heritage spotlight showcasing past successful builds (Post)',
      'Stories: Real-time site progress, design choices spotlight, limited-availability updates'
    ],
    creativeExamples: [
      {
        title: 'Cinematic Interior Walk-through',
        desc: 'A premium 30-second video featuring high-end camera pans over custom kitchen finishes and natural lighting. Designed for high retention.',
        type: 'Ad Creative',
        previewUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=400',
        metrics: '1.8% Click Rate | $14 Qualified Lead Cost'
      },
      {
        title: 'Floor Plan Swipe Deck',
        desc: 'A clean, multi-card carousel detailing individual townhome layouts with measurements. Perfect for spatial orientation.',
        type: 'Carousel Post',
        previewUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=400&h=400',
        metrics: '12% Interaction Rate'
      }
    ],
    metaAdsStrategy: 'Advantage+ Audience campaigns coupled with customized Lead Instant Forms. The forms required answers to qualifying questions: "What is your target purchase budget?" and "When do you plan to buy?"',
    kpis: [
      'Cost Per Qualified Lead (CPQL)',
      'Sales Team Contact Success %',
      'Appointment Booking Rate from leads',
      'Total closed property value'
    ],
    resultsDetailed: [
      { label: 'CPQL Reduction', value: '-42%', desc: 'Lowered cost required to acquire a pre-screened home buyer' },
      { label: 'Contact Rate', value: '80%', desc: 'Successful connections made by the sales team' },
      { label: 'Screened Leads', value: '180+', desc: 'Leads with fully validated phone numbers and budgets' },
      { label: 'Closed Properties', value: '4', desc: 'Direct luxury townhouse purchase contracts signed' }
    ],
    lessonsLearned: 'Asking for specific budget ranges directly inside the Meta lead form filters out window-shoppers, allowing the sales team to focus 100% of their energy on genuine, hot prospects.',
    futureOptimization: 'Deploy retargeting ads highlighting limited-availability FOMO messaging (e.g., "75% Sold Out") directly to users who opened but did not submit the initial qualification form.',
    chartData: [
      { name: 'Month 1', value: 38 },
      { name: 'Month 2', value: 82 },
      { name: 'Month 3', value: 145 },
      { name: 'Month 4', value: 184 }
    ],
    chartLabel: 'Qualified Lead Volume Generated'
  },
  {
    id: 'saas-startup',
    title: 'B2B Lead Generation & Product Growth',
    industry: 'AI Productivity Software (Concept)',
    challenge: 'A fast-growing B2B productivity SaaS startup struggled to convert traffic into active trial accounts. They had a high cost-per-registration (CPR) on Google Ads, and users who did sign up were dropping off and failing to complete their workspace onboarding within the first 14 days.',
    strategy: 'Built a dual-sided social growth engine. 1. Organic authority: Deployed educational LinkedIn and Instagram Reels targeting productivity hacks and founder burn-out solutions, highlighting the software organically. 2. Meta Ads optimization: Created feature-specific short screen-recordings showcasing the absolute simplicity of setting up a workspace in 30 seconds. Retargeted high-intent website visitors with testimonial grids and founder video notes.',
    results: 'The strategic campaign delivered a 31% reduction in Cost-Per-Registration (CPR), drove a 2.5x increase in qualified product demonstration bookings, and secured a 48% boost in trial-to-paid monthly conversion rates.',
    heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200&h=600',
    overview: 'This project highlights how blending problem-solving organic content with highly practical, demo-focused social advertising drives trial velocity for B2B tech products.',
    goals: [
      'Decrease average Cost-Per-Registration (CPR) by 25%',
      'Boost active product onboarding completions by 30%',
      'Create a constant flow of high-value organic product video assets',
      'Optimize retargeting pipelines to convert trialists to paid tiers'
    ],
    audienceResearch: 'Our research targeted remote startup founders, project managers, and operations directors. We analyzed their daily frustrations: tool bloat, constant Slack notifications, and disjointed task boards. We crafted ads positioning our client\'s SaaS as the "Single Source of Truth".',
    contentStrategy: 'Highly interactive "Watch Me Work" demo videos, minimalist dashboard aesthetic, and high-energy screenshare Reels. We kept animations sleek, typographic fonts very technical (monospace elements), and emphasized extreme ease-of-use.',
    postingCalendar: [
      'Monday: "How to organize your day in 3 steps" using the SaaS (Reel)',
      'Wednesday: Feature comparison: Old scattered workflow vs. clean new dashboard (Post)',
      'Friday: Customer growth spotlight showing real startup time saved (Carousel)',
      'Daily Stories: Live tips, sneak peeks at incoming beta features, user workspace showcases'
    ],
    creativeExamples: [
      {
        title: 'The 30-Second Workspace Build',
        desc: 'A seamless, sped-up video of a project manager setting up an entire team roadmap with zero code. Drives extremely high trial sign-ups.',
        type: 'Ad Creative',
        previewUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=400&h=400',
        metrics: '-31% CPR | $12 Registration Cost'
      },
      {
        title: 'B2B Founder Social Proof Grid',
        desc: 'A grid-style graphic compiling glowing tweets, reviews, and high-profile product-hunt comments in an aesthetically pleasing frame.',
        type: 'Instagram Grid',
        previewUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=400',
        metrics: '2.5x Demo Bookings'
      }
    ],
    metaAdsStrategy: 'Custom pixel audience retargeting for users who visited the landing page but didn\'t sign up, showing direct product demos. Lookalike audiences generated from top 10% highly active customer lifetime value cohorts.',
    kpis: [
      'Cost-Per-Registration (CPR)',
      'Product Onboarding Completion Rate',
      'Trial-to-Paid Subscription Conversion %',
      'Click-Through Rate (CTR) on demo videos'
    ],
    resultsDetailed: [
      { label: 'CPR Reduction', value: '-31%', desc: 'Lowered the cost required to acquire a new registered trialist' },
      { label: 'Demo Bookings', value: '2.5x', desc: 'Increase in scheduled B2B product demonstrations' },
      { label: 'Trial Conversion', value: '+48%', desc: 'Higher conversion from free trial to paying subscriber' },
      { label: 'Ad CTR', value: '3.6%', desc: 'High feed engagement on technical screen-recordings' }
    ],
    lessonsLearned: 'For B2B software, showing the actual product interface in action within the first 3 seconds of an ad outperforms abstract concepts and animated graphics every single time.',
    futureOptimization: 'Expand retargeting funnels onto professional channels like LinkedIn, utilizing exact company matching to catch decision-makers inside their workspace feeds.',
    chartData: [
      { name: 'Month 1', value: 18.5 },
      { name: 'Month 2', value: 15.2 },
      { name: 'Month 3', value: 13.0 },
      { name: 'Month 4', value: 12.0 }
    ],
    chartLabel: 'Cost Per Registration (CPR) Trend ($)'
  }
];

export const services: Service[] = [
  {
    id: 'organic-social-growth',
    title: 'Organic Social Media Growth',
    description: 'Transforming dead social media handles into highly engaging content hubs that naturally attract organic inbound leads through authority and expert positioning.',
    outcome: 'A self-sustaining organic client acquisition pipeline and highly optimized social profiles that build instant brand trust.',
    iconName: 'TrendingUp'
  },
  {
    id: 'meta-ads-management',
    title: 'Meta Ads Management',
    description: 'A complete end-to-end paid advertising setup including high-converting funnel design, advanced pixel tracking, lookalike audience deployment, and continuous creative testing.',
    outcome: 'Measurable pipeline scaling, lower cost-per-lead, and a highly profitable Return on Ad Spend (ROAS) validated by transparent reporting.',
    iconName: 'Target'
  },
  {
    id: 'content-strategy',
    title: 'Content Strategy',
    description: 'Developing bespoke content playbooks based on your unique customer pain points, scripting hooks, framing rules, visual brand patterns, and storytelling structures.',
    outcome: 'Elimination of erratic posting, establishing a highly premium visual presence, and designing video formats optimized for consumer watch-time.',
    iconName: 'Sparkles'
  },
  {
    id: 'content-calendar',
    title: 'Content Calendar & Planning',
    description: 'Establishing a cohesive monthly roadmap that blends educational pillars, customer social proof, and relatable behind-the-scenes content across channels.',
    outcome: 'Complete peace of mind with 30 days of high-quality content pre-planned, fully scripted, and scheduled ahead of time.',
    iconName: 'Calendar'
  },
  {
    id: 'community-management',
    title: 'Community Management & Engagement',
    description: 'Proactive and reactive social engagement: monitoring comments, answering direct messages with qualified scripts, and active outreach to potential target accounts.',
    outcome: 'Higher profile visitor conversions, rapid reply speeds, and converting passive comments into qualified sales calls.',
    iconName: 'MessageSquare'
  },
  {
    id: 'analytics-reporting',
    title: 'Analytics & Strategic Reporting',
    description: 'Deep monthly analytical audits measuring actual audience metrics, lead generation cost, video watch times, and creative ad performance trends.',
    outcome: 'Absolute transparency over marketing returns, clear insights into what is working, and concrete playbooks for next-month growth.',
    iconName: 'BarChart3'
  },
  {
    id: 'audience-research',
    title: 'Audience Research & Segmentation',
    description: 'Conducting intensive customer interviews, competitor social media monitoring, and search engine query research to outline exact buyer personas.',
    outcome: 'Highly accurate copywriting hooks and precise targeting vectors that eliminate wasted marketing spend on generic audiences.',
    iconName: 'Users'
  },
  {
    id: 'competitor-analysis',
    title: 'Competitor Social Auditing',
    description: 'Deep-dive analysis of your top competitors\' organic profiles, viral video topics, paid Meta Ads library, and lead-generation funnels.',
    outcome: 'Identification of market gaps, creative strategies to outperform, and clear positioning vectors that make your brand stand out.',
    iconName: 'Search'
  },
  {
    id: 'lead-generation',
    title: 'High-Converting Lead Funnels',
    description: 'Designing optimized, automated landing pages, Meta Lead Forms, and direct message lead magnets that capture validated customer details with low friction.',
    outcome: 'A constant daily supply of pre-qualified name, email, phone, and budget records delivered directly into your team sales CRM.',
    iconName: 'UserCheck'
  },
  {
    id: 'marketing-consultation',
    title: 'Growth Marketing Consultation',
    description: 'High-impact 1-on-1 strategic growth sessions reviewing your existing SMM structure, pixel validation, and identifying high-growth opportunities.',
    outcome: 'An actionable custom SMM blueprint and concrete, step-by-step instructions to boost your current digital conversions immediately.',
    iconName: 'HelpCircle'
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Onboarding',
    description: 'We kick off with an intensive audit of your existing social assets, current pipeline metrics, sales goals, and outline target business opportunities.'
  },
  {
    step: '02',
    title: 'Audience & Competitor Research',
    description: 'We research your target customer\'s core pains, analyze competitor ad strategies, extract high-converting messaging hooks, and segment custom profiles.'
  },
  {
    step: '03',
    title: 'Funnel & Creative Strategy',
    description: 'We draft the multi-step social content calendar, write hook-heavy scripts, design optimized lead forms, and outline the paid Meta Ads targeting blueprint.'
  },
  {
    step: '04',
    title: 'Execution & Launch',
    description: 'We finalize visual assets, configure advanced Meta pixel events, coordinate scheduled organic content, and deploy the highly optimized ad campaigns.'
  },
  {
    step: '05',
    title: 'Optimization & Scaling',
    description: 'We monitor live relevance metrics, conduct rigorous A/B testing on ad creatives, prune low-performing targets, and safely scale top-performing spend vectors.'
  },
  {
    step: '06',
    title: 'Transparent Reporting',
    description: 'We deliver comprehensive, easy-to-read analytical dashboards showing direct marketing ROI, cost per lead, and map out strategic adjustments for next-month scaling.'
  }
];

export const toolsList: ToolItem[] = [
  { name: 'Meta Business Suite', iconName: 'Layers', category: 'Ads & Management' },
  { name: 'Canva', iconName: 'Palette', category: 'Creative Design' },
  { name: 'Google Analytics', iconName: 'TrendingUp', category: 'Analytics' },
  { name: 'Looker Studio', iconName: 'Database', category: 'Reporting' },
  { name: 'Notion', iconName: 'BookOpen', category: 'Strategy & Planning' },
  { name: 'ChatGPT', iconName: 'Cpu', category: 'AI Copywriting' },
  { name: 'CapCut', iconName: 'Video', category: 'Video Editing' },
  { name: 'Figma', iconName: 'PenTool', category: 'UI & Graphic Design' },
  { name: 'Adobe Photoshop', iconName: 'Image', category: 'Graphic Design' },
  { name: 'Excel', iconName: 'FileSpreadsheet', category: 'Data Analysis' },
  { name: 'Power BI', iconName: 'BarChart', category: 'Data Analytics' },
  { name: 'Google Sheets', iconName: 'FileSpreadsheet', category: 'Campaign Tracking' }
];

export const whyWorkWithMe = [
  {
    title: 'Data-Driven Decisions',
    description: 'I base every single campaign adjustment, script revision, and scaling decision on cold analytical numbers, not random creative guesses.',
    iconName: 'LineChart'
  },
  {
    title: 'Creative Content',
    description: 'I build content that commands maximum user watch-time, using proven hook structures, bold typography, and visual pacing designed to stop the scroll.',
    iconName: 'Sparkles'
  },
  {
    title: 'Audience Research',
    description: 'I design funnels based on real, intensive research of what your customers actually desire, and address their objections before they even state them.',
    iconName: 'SearchCode'
  },
  {
    title: 'Performance Tracking',
    description: 'From pixel tracking to CRM lead delivery, I set up absolute, flawless tracking configurations to ensure we measure actual dollars returned.',
    iconName: 'Target'
  },
  {
    title: 'Continuous Optimization',
    description: 'I actively review ad library efficiency, structure and prune targeting vectors, and A/B test fresh hook structures to combat ad fatigue.',
    iconName: 'Gauge'
  },
  {
    title: 'Clear Communication',
    description: 'No marketing fluff or vanity jargon. I report progress, actual lead values, and ROI updates transparently and consistently.',
    iconName: 'ShieldAlert'
  }
];

export const blogArticles: BlogArticle[] = [
  {
    id: 'restaurant-organic-growth',
    title: 'How Restaurants Can Grow Organically without Large Ad Budgets',
    category: 'Restaurant Marketing',
    readTime: '5 min read',
    date: 'July 5, 2026',
    summary: 'Discover the exact "Sensory Plating" video strategy and local geo-tagging techniques that allow independent dining spots to fill weekday tables on organic reach alone.',
    content: [
      'Many restaurant owners believe that physical foot traffic is the only way to scale, or that they must pay massive monthly ad spend to local newspapers or delivery portals. In reality, food is one of the most viral organic niches online—if you know how to leverage sensory storytelling.',
      'The first pillar of organic restaurant growth is ASMR vertical video. Instead of posting basic pictures of a plate on a table, film the steam rising, the sauce being drizzled in slow-motion, or the crunch of a crust. Sensory triggers instantly activate appetite and capture high retention in social algorithms.',
      'The second pillar is Local SEO optimization. Ensure your Instagram and Facebook bios contain your exact city neighborhood and your core dish category (e.g., "Handmade Pasta in Soho"). Use geo-tags on every single piece of content, and actively engage with local food bloggers and local business profiles.',
      'The third pillar is the "Insta-Bonus Trigger". Place an elegant little sign on your dining tables or menus: "Snap a story tagging our profile and get our signature hand-churned chocolate mousse on the house." This turns your guests into a active, authentic organic micro-influencer network, compounding your local reach overnight.'
    ]
  },
  {
    id: 'meta-ads-beginner',
    title: 'The Ultimate Meta Ads Blueprint for Service Businesses',
    category: 'Meta Ads',
    readTime: '8 min read',
    date: 'June 28, 2026',
    summary: 'Stop wasting dollars on "Boost Post" buttons. Learn how to construct a professional 3-stage local lead generation funnel using Meta Ads Manager.',
    content: [
      'Many small business owners waste hundreds of dollars by tapping the blue "Boost Post" button on their phone. This is a basic vanity trigger designed to get comments, not qualified sales. To build a reliable lead pipeline, you must use the Meta Ads Manager and build a proper campaign structure.',
      'First, define your offer. Direct sales pitches like "Hire us for plumbing" have low response rates. Instead, offer a low-friction value magnet, such as "Download our Free 2026 Local Home Ventilation Checklist" or a high-value discount voucher.',
      'Second, construct the "High-Intent" Instant Form. Inside your Ads Manager, create a Lead Generation campaign. Do not use the "More Volume" setting; instead, choose "Higher Intent". Add qualifying screening questions so that window-shoppers are filtered out, and set phone number inputs to validate digits.',
      'Third, launch retargeting. Run a separate, low-budget Custom Audience campaign targeting anyone who visited your website or opened your lead form but did not finish registration. Show them active customer video reviews and concrete security guarantees to eliminate last-minute doubts.'
    ]
  },
  {
    id: 'instagram-growth-strategy',
    title: 'Instagram Growth Strategy: Hook, Retain, and Convert',
    category: 'Instagram Strategy',
    readTime: '6 min read',
    date: 'June 14, 2026',
    summary: 'Master the 3-second hook rule, custom caption structures, and direct-message automation paths that turn passive viewers into paying clients.',
    content: [
      'The modern attention span is shorter than ever. If your Instagram Reels do not hook a viewer within the first 3 seconds, they are gone forever—along with your chance to convert them.',
      'To build a viral, high-converting vertical video, you must structure it using the "Hook-Body-CTA" playbook. The hook must combine visual movement (such as a pattern interrupt or sudden gesture) and a bold on-screen headline addressing a specific pain point (e.g., "Why your business isn\'t getting leads").',
      'The body must deliver high-value, rapid-fire solutions. Avoid long preambles. Get straight to the steps, using high-contrast text overlays and dynamic camera transitions every 2-3 seconds to hold visual momentum.',
      'Finally, never end a video with "Follow me for more." This is passive. Instead, use a direct message call-to-action: "Comment the word BLUEPRINT below, and I will instantly send the exact campaign checklist directly to your inbox." This leverages DM automation to capture active, qualified leads right inside your social chat.'
    ]
  },
  {
    id: 'content-planning-hacks',
    title: 'How to Plan and Script 30 Days of SMM Content in 4 Hours',
    category: 'Content Strategy',
    readTime: '4 min read',
    date: 'May 30, 2026',
    summary: 'Ditch the daily stress of "what should I post today?". Learn how to batch-script, structure content pillars, and schedule your pipeline seamlessly.',
    content: [
      'Erratic posting is the silent killer of social media traction. If you are waking up every morning wondering "what should I post today?", you have already lost. The solution is batching: preparing your entire monthly calendar in a single, focused session.',
      'Start by defining your 3 core Content Pillars: 1. Authority (expert educational tips), 2. Social Proof (case studies and screenshots of results), and 3. Relatability (behind-the-scenes and personal motivation). Assigning a specific pillar to each weekday guarantees your feed feels balanced and strategic.',
      'Spend 2 hours writing scripts using pre-structured templates. Use a Google Doc or Notion workspace to write hook-heavy scripts, highlighting visual cues (e.g., "point to screen") and text overlays. Keep scripts under 150 words to guarantee they stay within the fast-paced 60-second limit.',
      'Spend the final 2 hours filming and editing in bulk. Use a high-quality smartphone, ensure good lighting, and edit using CapCut or similar desktop tools. Once completed, schedule them inside a social manager like Meta Business Suite, and enjoy a stress-free month of consistent reach.'
    ]
  },
  {
    id: 'social-media-analytics',
    title: 'SMM Analytics: The Only 4 Metrics That Actually Matter',
    category: 'Social Analytics',
    readTime: '7 min read',
    date: 'May 12, 2026',
    summary: 'Ignore follower count and vanity likes. Here is how to evaluate real campaign performance, lead quality, and direct marketing ROI.',
    content: [
      'Many marketing agencies brag about "million-impression campaigns" or "gaining thousands of followers." However, unless those impressions pay the bills, they are purely vanity numbers. To measure genuine business growth, you must look at deeper metrics.',
      'The first key metric is the Profile Conversion Rate. This is the ratio of profile visitors who actually click your website link or contact button. If you have 10,000 profile visits but only 5 link clicks, your bio, highlights, or content are failing to direct interest into your marketing funnel.',
      'The second metric is Video Retention Rate. This measures what percentage of viewers watched your vertical video past the 3-second mark, and how many completed it. High retention indicates your hooks and pacing are effective, signaling algorithms to boost your reach.',
      'The third and fourth metrics are Cost-Per-Lead (CPL) and Sales Pipeline ROI. Track how much ad spend is required to generate a qualified client record, and compare it against the direct dollar value of closed deals. A campaign with fewer impressions but high buyer intent is always superior to a viral post with empty reach.'
    ]
  }
];

export const faqItems: FAQItem[] = [
  {
    question: 'How do we work together?',
    answer: 'We start with a 30-minute discovery call to review your current SMM assets, identify major gaps, and confirm your sales goals. If we are a fit, I draft a customized campaign proposal with fixed-scope pricing. Once approved, I handle the full content scripting, funnel setup, pixel integration, and ad creative testing, providing transparent weekly Slack/email updates and interactive monthly analytical reports.'
  },
  {
    question: 'Do you manage paid advertising (Meta Ads)?',
    answer: 'Yes! Paid Meta Ads (Facebook & Instagram Ads) is one of my primary services. I specialize in designing and managing complete, high-converting pipelines. This includes advanced pixel/API setups, custom target audience segmentation, lookalike models, designing ad copy & creatives, running intensive A/B split tests, and scaling daily spend safely while maintaining high ROAS (Return on Ad Spend).'
  },
  {
    question: 'Can you create the actual social media content?',
    answer: 'Absolutely. I write all vertical video scripts (complete with hook templates, callouts, and body text), guide you on simple filming practices, design high-converting static graphic assets, and edit the videos into highly engaging formats (with premium subtitles and visual pacing). I also write optimized captions, conduct keyword SEO research, and schedule all posts ahead of time.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes! I work with clients globally (including US, UK, Canada, Australia, Europe, and Asia). Since all assets are digital and communication is organized via Slack, Loom videos, and Google Meet, we can coordinate across different time zones seamlessly. All ad campaigns are configured in local currencies and target your exact regional geographic buyers.'
  },
  {
    question: 'How fast do projects start and when will I see results?',
    answer: 'Onboarding takes roughly 7 to 10 days, during which we conduct audience research, draft the content plan, configure tracking, and build out the initial ad creatives. For paid Meta campaigns, initial leads and click-through metrics start appearing within 48-72 hours of launch. For organic social strategies, compounding algorithmic traction usually builds consistently over a 28-day cycle of active posting.'
  }
];
