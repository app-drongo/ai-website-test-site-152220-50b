'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  logoUrl:
    'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop&crop=center',
  logoAlt: 'Company Logo',
  badge: 'New Release',
  title: 'Build the Future with Modern Technology',
  subtitle:
    'Streamline your workflow with our cutting-edge platform designed for developers, teams, and enterprises.',
  ctaText: 'Get Started',
  ctaHref: '/signup',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  heroImageUrl:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center',
  heroImageAlt: 'Modern tech workspace',
  stats: [
    { icon: 'Users', value: '10K+', label: 'Active Users' },
    { icon: 'Star', value: '4.9', label: 'Rating' },
    { icon: 'Zap', value: '99.9%', label: 'Uptime' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    setIsVideoPlaying(true);
    navigate(config.secondaryCtaHref);
  };

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Star':
        return <Star className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section id="hero" className="bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Logo */}
        <div className="pt-8 pb-4">
          <div className="flex items-center justify-center sm:justify-start">
            <Image
              src={config.logoUrl}
              alt={config.logoAlt}
              width={120}
              height={40}
              className="h-10 w-auto"
              data-editable-src="logoUrl"
            />
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="py-20 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="mb-6">
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  <span data-editable="badge">{config.badge}</span>
                </Badge>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span data-editable="title">{config.title}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button
                  size="lg"
                  onClick={handlePrimaryClick}
                  data-editable-href="ctaHref"
                  data-href={config.ctaHref}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
                >
                  <span data-editable="ctaText">{config.ctaText}</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleSecondaryClick}
                  data-editable-href="secondaryCtaHref"
                  data-href={config.secondaryCtaHref}
                  className="border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 group"
                >
                  <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                {config.stats.map((stat, idx) => (
                  <div key={idx} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-2 text-primary">
                      {getStatIcon(stat.icon)}
                    </div>
                    <div className="font-bold text-2xl text-foreground">
                      <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-muted/50 backdrop-blur-sm border border-border">
                <Image
                  src={config.heroImageUrl}
                  alt={config.heroImageAlt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  data-editable-src="heroImageUrl"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />

                {/* Floating elements for visual interest */}
                <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-card-foreground">Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
