// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location } from 'react-360-web';
import { hans } from './spaces';

const initialLocation = 'hans3';
function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // r360.renderToLocation(
  //   r360.createRoot('Dibs3603D', {
  //     /* initial props */
  //   }),
  //   new Location([0, -1, -0.125])
  // );

  r360.renderToLocation(
    r360.createRoot('Tour', {
      location: initialLocation,
    }),
    r360.getDefaultLocation()
  );

  // Load the initial environment
  r360.compositor.setBackground(
    r360.getAssetURL(hans[initialLocation].assetName)
  );
}

window.React360 = { init };
