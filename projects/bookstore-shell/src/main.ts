import { loadManifest } from '@angular-architects/module-federation';
import { environment } from './environments/environment.development';

console.log(environment);
loadManifest(environment.manifestSrc, true)
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
