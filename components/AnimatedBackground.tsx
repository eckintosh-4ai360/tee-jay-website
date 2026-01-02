'use client';

import { 
  Camera, 
  Video, 
  Printer, 
  Image, 
  Film, 
  Aperture,
  Layout,
  Palette
} from 'lucide-react';

/**
 * Animated Background Component
 * Adds floating elements, gradient orbs, and geometric shapes
 * to create a dynamic background effect across all pages
 */
export default function AnimatedBackground() {
  const floatingIcons = [
    { Icon: Camera, delay: '0s', duration: '20s' },
    { Icon: Video, delay: '2s', duration: '25s' },
    { Icon: Printer, delay: '4s', duration: '22s' },
    { Icon: Image, delay: '1s', duration: '23s' },
    { Icon: Film, delay: '3s', duration: '21s' },
    { Icon: Aperture, delay: '5s', duration: '24s' },
    { Icon: Layout, delay: '2.5s', duration: '26s' },
    { Icon: Palette, delay: '4.5s', duration: '19s' },
  ];

  return (
    <>
      {/* Animated Gradient Orbs */}
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Floating Design Elements */}
      <div className="floating-elements">
        {floatingIcons.map((item, index) => {
          const { Icon } = item;
          return (
            <div 
              key={index}
              className="float-item"
              style={{
                '--delay': item.delay,
                '--duration': item.duration,
              } as React.CSSProperties}
            >
              <Icon size={48} strokeWidth={2} />
            </div>
          );
        })}
      </div>

      {/* Geometric Shapes */}
      <div className="geometric-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
      </div>
    </>
  );
}

