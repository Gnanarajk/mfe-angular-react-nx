import { registerRemotes } from '@module-federation/enhanced/runtime';

fetch('/module-federation.manifest.json')
  .then((res) => res.json())
  .then((remotes: Record<string, string>) => {
    // Convert your manifest to the expected format
    const formattedRemotes = Object.entries(remotes).map(([name, entry]) => ({
      name,
      entry,
    }));

    // Use registerRemotes instead of init
    return registerRemotes(formattedRemotes);
  })
  .then(() => import('./bootstrap'))
  .catch((err) => console.error('Federation loading failed:', err));
