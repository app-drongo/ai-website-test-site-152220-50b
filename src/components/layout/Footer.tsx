'use client';

import { Separator } from '@/components/ui/separator';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  companyName: 'TestFlow',
  tagline: 'Streamlined testing solutions for developers who value simplicity and efficiency.',
  copyright: '© 2024 TestFlow. All rights reserved.',
  productLinks: [
    { label: 'Testing Suite', href: '/testing-suite' },
    { label: 'API Testing', href: '/api-testing' },
  ],
  companyLinks: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
  ],
  developerLinks: [
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    navigate(href);
  };

  return (
    <footer id="footer" className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">
              <span data-editable="companyName">{config.companyName}</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span data-editable="tagline">{config.tagline}</span>
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-foreground">Product</h4>
            <ul className="space-y-3">
              {config.productLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    data-editable-href={`productLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`productLinks[${idx}].label`}>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-foreground">Company</h4>
            <ul className="space-y-3">
              {config.companyLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    data-editable-href={`companyLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Resources */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-foreground">Developers</h4>
            <ul className="space-y-3">
              {config.developerLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    data-editable-href={`developerLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`developerLinks[${idx}].label`}>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            <span data-editable="copyright">{config.copyright}</span>
          </p>

          {/* Legal Links */}
          <div className="flex gap-6">
            {config.legalLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-editable-href={`legalLinks[${idx}].href`}
                data-href={link.href}
              >
                <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
