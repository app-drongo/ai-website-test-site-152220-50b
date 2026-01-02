'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  logoUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop&q=80',
  logoAlt: 'Company Logo',
  brandName: 'TestFlow',
  brandHref: '#hero',
  showLogo: true,
  showBrandName: true,
  navItems: [{ label: 'Home', href: '#hero' }],
  ctaText: 'Get Started',
  ctaHref: '#hero',
  showCta: true,
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleBrandClick = () => {
    navigate(config.brandHref);
  };

  const handleCtaClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="navigation" className="bg-background text-foreground border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Button
              variant="ghost"
              className="flex items-center gap-3 text-xl font-bold text-foreground hover:text-primary p-2 h-auto"
              onClick={handleBrandClick}
              data-editable-href="brandHref"
              data-href={config.brandHref}
            >
              {config.showLogo && (
                <Image
                  src={config.logoUrl}
                  alt={config.logoAlt}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                  data-editable-src="logoUrl"
                />
              )}
              {config.showBrandName && <span data-editable="brandName">{config.brandName}</span>}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {config.navItems.map((item, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  className="text-foreground hover:text-primary hover:bg-accent px-3 py-2 text-sm font-medium transition-colors"
                  onClick={() => handleNavClick(item.href)}
                  data-editable-href={`navItems[${idx}].href`}
                  data-href={item.href}
                >
                  <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          {config.showCta && (
            <div className="hidden md:block">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                onClick={handleCtaClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
              >
                <span data-editable="ctaText">{config.ctaText}</span>
              </Button>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:text-primary hover:bg-accent"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Brand */}
                  <div className="pb-4 border-b border-border">
                    <Button
                      variant="ghost"
                      className="flex items-center gap-3 text-xl font-bold text-foreground hover:text-primary p-0 h-auto"
                      onClick={handleBrandClick}
                      data-editable-href="brandHref"
                      data-href={config.brandHref}
                    >
                      {config.showLogo && (
                        <Image
                          src={config.logoUrl}
                          alt={config.logoAlt}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain"
                          data-editable-src="logoUrl"
                        />
                      )}
                      {config.showBrandName && (
                        <span data-editable="brandName">{config.brandName}</span>
                      )}
                    </Button>
                  </div>

                  {/* Mobile Navigation Items */}
                  <div className="flex flex-col space-y-4">
                    {config.navItems.map((item, idx) => (
                      <Button
                        key={idx}
                        variant="ghost"
                        className="justify-start text-foreground hover:text-primary hover:bg-accent px-0 py-3 text-base font-medium"
                        onClick={() => handleNavClick(item.href)}
                        data-editable-href={`navItems[${idx}].href`}
                        data-href={item.href}
                      >
                        <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                      </Button>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  {config.showCta && (
                    <div className="pt-4 border-t border-border">
                      <Button
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                        onClick={handleCtaClick}
                        data-editable-href="ctaHref"
                        data-href={config.ctaHref}
                      >
                        <span data-editable="ctaText">{config.ctaText}</span>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </section>
  );
}
