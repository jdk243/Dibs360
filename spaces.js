export const spaces = {
  apartment: {
    foyer: {
      assetName: 'home/homeFoyer.jpg',
      links: [
        {
          link: 'apartment.kitchen',
          translation: [
            { translateX: 1 },
            { translateY: 0 },
            { translateZ: -1 },
          ],
        },
        {
          link: 'apartment.stair',
          translation: [
            { translateX: 0 },
            { translateY: 2 },
            { translateZ: -2 },
          ],
        },
      ],
    },
    kitchen: {
      assetName: 'home/homeKitchen.jpg',
      links: [
        {
          link: 'apartment.hall',
          translation: [
            { translateX: 1 },
            { translateY: 0 },
            { translateZ: 1 },
          ],
        },
        {
          link: 'apartment.foyer',
          translation: [
            { translateX: 1 },
            { translateY: 0 },
            { translateZ: -1 },
          ],
        },
      ],
    },
    hall: {
      assetName: 'home/homeHall.jpg',
      links: [
        {
          link: 'apartment.kitchen',
          translation: [
            { translateX: -2 },
            { translateY: 0 },
            { translateZ: 0 },
          ],
        },
      ],
    },
    stair: {
      assetName: 'home/homeStairs.jpg',
      links: [
        {
          link: 'apartment.foyer',
          translation: [
            { translateX: 0 },
            { translateY: -2 },
            { translateZ: 2 },
          ],
        },
        {
          link: 'apartment.livingRoom1',
          translation: [
            { translateX: -1 },
            { translateY: 2 },
            { translateZ: 2 },
          ],
        },
      ],
    },
    livingRoom1: {
      assetName: 'home/homeLivingRoom1.jpg',
      links: [
        {
          link: 'apartment.stair',
          translation: [
            { translateX: 2 },
            { translateY: -2 },
            { translateZ: -1 },
          ],
        },
        {
          link: 'apartment.livingRoom2',
          translation: [
            { translateX: -3 },
            { translateY: 0 },
            { translateZ: 2 },
          ],
        },
      ],
    },
    livingRoom2: {
      assetName: 'home/homeLivingRoom2.jpg',
      links: [
        {
          link: 'apartment.livingRoom1',
          translation: [
            { translateX: -1 },
            { translateY: 0 },
            { translateZ: -3 },
          ],
        },
      ],
    },
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
