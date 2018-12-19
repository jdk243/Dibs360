export const spaces = {
  office: {
    a: {
      assetName: 'office/office1.jpg',
      links: [
        {
          link: 'office.b',
          translation: [
            { translateX: -2 },
            { translateY: -1 },
            { translateZ: 0 },
          ],
        },
        {
          link: 'office.c',
          translation: [
            { translateX: -0.5 },
            { translateY: -1 },
            { translateZ: -3 },
          ],
        },
      ],
    },
    b: {
      assetName: 'office/office2.jpg',
      links: [
        {
          link: 'office.a',
          translation: [
            { translateX: 2 },
            { translateY: -1 },
            { translateZ: 0 },
          ],
        },
        {
          link: 'office.c',
          translation: [
            { translateX: 1.5 },
            { translateY: -1 },
            { translateZ: -3 },
          ],
        },
      ],
    },
    c: {
      assetName: 'office/office3.jpg',
      links: [
        {
          link: 'office.b',
          translation: [
            { translateX: -1.5 },
            { translateY: -1 },
            { translateZ: 3 },
          ],
        },
        {
          link: 'office.a',
          translation: [
            { translateX: 0.5 },
            { translateY: -1 },
            { translateZ: 3 },
          ],
        },
      ],
    },
  },
};
