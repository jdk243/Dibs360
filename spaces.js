export const home = {
  foyer: {
    assetName: 'home/homeFoyer.jpg',
    links: [
      {
        link: 'kitchen',
        position: [1, 0, -1],
      },
      {
        link: 'stair',
        position: [0, 2, -2],
      },
    ],
  },
  kitchen: {
    assetName: 'home/homeKitchen.jpg',
    links: [
      {
        link: 'hall',
        position: [1, 0, 1],
      },
      {
        link: 'foyer',
        position: [1, 0, -1],
      },
    ],
  },
  hall: {
    assetName: 'home/homeHall.jpg',
    links: [
      {
        link: 'kitchen',
        position: [-2, 0, 0],
      },
    ],
  },
  stair: {
    assetName: 'home/homeStairs.jpg',
    links: [
      {
        link: 'foyer',
        position: [0, -2, 2],
      },
      {
        link: 'livingRoom1',
        position: [-1, 2, 2],
      },
    ],
  },
  livingRoom1: {
    assetName: 'home/homeLivingRoom1.jpg',
    links: [
      {
        link: 'stair',
        position: [2, -2, -1],
      },
      {
        link: 'livingRoom2',
        position: [-3, 0, 2],
      },
    ],
  },
  livingRoom2: {
    assetName: 'home/homeLivingRoom2.jpg',
    links: [
      {
        link: 'livingRoom1',
        position: [-1, 0, -3],
      },
    ],
  },
};

export const office = {
  australia: {
    assetName: 'office/office1.jpg',
    links: [
      {
        link: 'walkway',
        positon: [3, 0, -1],
      },
    ],
  },
  walkway: {
    assetName: 'office/office2.jpg',
    links: [
      {
        link: 'australia',
        positon: [-3, 0, 0],
      },
      {
        link: 'bulgari',
        positon: [4, 0, 1],
      },
    ],
  },
  bulgari: {
    assetName: 'office/office3.jpg',
    links: [
      {
        link: 'walkway',
        positon: [1, 0, -3],
      },
    ],
  },
};
