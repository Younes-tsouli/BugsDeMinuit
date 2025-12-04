import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="w-full border-t bg-background mt-auto">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌱</span>
              <span className="font-bold text-lg">NIRD</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Numérique Inclusif, Responsable et Durable
            </p>
            <p className="text-xs text-muted-foreground">
              Reconditionnement • Sobriété • Partage
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Modules</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/reconditionne" className="text-muted-foreground hover:text-foreground transition-colors">
                  Reconditionne-ton-ordi
                </Link>
              </li>
              <li>
                <Link href="/ressources" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ressources Éducatives
                </Link>
              </li>
              <li>
                <Link href="/defis" className="text-muted-foreground hover:text-foreground transition-colors">
                  Défis & Missions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Valeurs</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>🤝 Inclusion numérique</li>
              <li>♻️ Reconditionnement</li>
              <li>🌿 Sobriété énergétique</li>
              <li>🔓 Logiciels libres</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Projet</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Code source
                </a>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contribuer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} NIRD - Licence libre{' '}
            <a 
              href="https://www.gnu.org/licenses/agpl-3.0.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              AGPL-3.0
            </a>
          </p>
          <p className="text-xs">
            Conçu avec sobriété • Compatible matériel ancien • Respect de la vie privée
          </p>
        </div>
      </div>
    </footer>
  );
}
