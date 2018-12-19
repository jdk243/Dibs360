// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location } from 'react-360-web';
import get from 'lodash.get';
import { spaces } from './spaces';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  r360.renderToLocation(
    r360.createRoot('Dibs3603D'),
    r360.getDefaultLocation()
  );

  r360.renderToLocation(
    r360.createRoot('Location', {
      location: 'hans.hans1',
    }),
    r360.getDefaultLocation()
  );

  // Load the initial environment
  r360.compositor.setBackground(
    r360.getAssetURL(get(spaces, 'hans.hans1.assetName'))
  );
}

window.React360 = { init };
