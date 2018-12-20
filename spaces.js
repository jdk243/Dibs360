export const hans = {
  hans1: {
    assetName: 'hans/hans1.jpg',
    links: [
      {
        link: 'hans2',
        translate: { translate: [-2.3, -1.4, -0.3] },
      },
      {
        link: 'hans3',
        translate: { translate: [-1, -1.4, -4.3] },
      },
    ],
  },
  hans2: {
    assetName: 'hans/hans2.jpg',
    links: [
      {
        link: 'hans1',
        translate: { translate: [2.3, -1.4, 0.3] },
      },
      {
        link: 'hans3',
        translate: { translate: [1.3, -1.4, -4] },
      },
    ],
  },
  hans3: {
    assetName: 'hans/hans3.jpg',
    links: [
      {
        link: 'hans1',
        translate: { translate: [1, -1.4, 4.3] },
      },
      {
        link: 'hans2',
        translate: { translate: [-1.3, -1.4, 4] },
      },
    ],
  },
};
