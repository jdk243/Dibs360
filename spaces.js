export const spaces = {
  hans: {
      hans1: {
          assetName: 'hans/hans1.jpg',
          links: [
              {
                  link: 'hans.hans2',
                  translations: [{
                      translateX: -2,
                      XranslateY: 0,
                      translateZ: 0,
                  }],
              },
              {
                  link: 'hans.hans3',
                  translations: [{
                      translateX: -0.5,
                      XranslateY: 0,
                      translateZ: -3,
                  }],
              },
          ],
      },
      hans2: {
          assetName: 'hans/hans2.jpg',
          links: [
              {
                  link: 'hans.hans1',
                  translations: [{
                      translateX: 2,
                      XranslateY: 0,
                      translateZ: 0,
                  }],
              },
              {
                  link: 'hans.hans3',
                  translations: [{
                      translateX: 1.5,
                      XranslateY: 0,
                      translateZ: -3,
                  }],
              },
          ],
      },
      hans3: {
          assetName: 'hans/hans3.jpg',
          links: [
              {
                  link: 'hans.hans1',
                  translations: [{
                      translateX: 0.5,
                      XranslateY: 0,
                      translateZ: -3,
                  }],
              },
              {
                  link: 'hans.hans2',
                  translations: [{
                      translateX: -1.5,
                      XranslateY: 0,
                      translateZ: -3,
                  }],
              },
          ],
      }
  },
};
