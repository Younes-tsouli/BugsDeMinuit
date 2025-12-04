'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useOffline } from '@/hooks/use-offline';
import { useUserProgress } from '@/hooks/use-user-progress';

export function Header() {
  const pathname = usePathname();
  const isOffline = useOffline();
  const { progress } = useUserProgress();

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/reconditionne', label: 'Reconditionne' },
    { href: '/ressources', label: 'Ressources' },
    { href: '/defis', label: 'Défis' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌱</span>
            <span className="font-bold text-xl hidden sm:inline-block">NIRD</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? 'default' : 'ghost'}
                asChild
                size="sm"
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {isOffline && (
            <Badge variant="outline" className="hidden sm:flex">
              📡 Hors-ligne
            </Badge>
          )}
          
          {progress && (
            <div className="hidden sm:flex items-center gap-2">
              <Badge variant="secondary">
                Niv. {progress.level}
              </Badge>
              <Badge variant="outline">
                {progress.points} pts
              </Badge>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex items-center justify-around border-t py-2">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant={pathname === item.href ? 'default' : 'ghost'}
            asChild
            size="sm"
          >
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
      </nav>
    </header>
  );
}
