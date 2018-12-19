export const spaces = {
  hans: {
      hans1: {
          assetName: 'hans/hans1.jpg'
          links: [
              {
                  link: 'hans.hans2',
                  translations: [],
              },
              {
                  link: 'hans.hans3',
                  translations: [],
              },
          ],
      },
      hans2: {
          assetName: 'hans/hans2.jpg'
          links: [
              {
                  link: 'hans.hans1',
                  translations: [],
              },
              {
                  link: 'hans.hans3',
                  translations: [],
              },
          ],
      },
      hans3: {
          assetName: 'hans/hans3.jpg'
          links: [
              {
                  link: 'hans.hans1',
                  translations: [],
              },
              {
                  link: 'hans.hans2',
                  translations: [],
              },
          ],
      }
  },

  office: {
    australia: {
      assetName: 'office/office1.jpg',
      links: [
        {
          link: 'office.walkway',
          translation: [
            { translateX: 0.5 },
            { translateY: -4 },
            { translateZ: 20 },
          ],
        },
        {
          link: 'office.bulgari',
          translation: [
            { translateX: -27 },
            { translateY: -4 },
            { translateZ: 30 },
          ],
        },
      ],
    },
    walkway: {
      assetName: 'office/office2.jpg',
      links: [
        {
          link: 'office.australia',
          translation: [
            { translateX: -3 },
            { translateY: -4 },
            { translateZ: 20 },
          ],
        },
        {
          link: 'office.bulgari',
          translation: [
            { translateX: 20 },
            { translateY: -4 },
            { translateZ: 1 },
          ],
        },
      ],
    },
    bulgari: {
      assetName: 'office/office3.jpg',
      links: [
        {
          link: 'office.walkway',
          translation: [
            { translateX: 1 },
            { translateY: -4 },
            { translateZ: -20 },
          ],
        },
        {
          link: 'office.australia',
          translation: [
            { translateX: -20 },
            { translateY: -4 },
            { translateZ: -24 },
          ],
        },
      ],
    },
  },
};
