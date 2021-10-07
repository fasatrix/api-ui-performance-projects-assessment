export const petPOST = [
  {
    httpRequest: {
      method: 'POST',
      path: '/pet'
    },
    httpResponse: {
      statusCode: 200,
      body: {
        id: 6,
        category: {
          id: 6,
          name: 'BlueWhale'
        },
        name: 'BlueWhale',
        photoUrls: ['https://someUrl'],
        tags: [
          {
            id: 6,
            name: 'BlueWhale'
          }
        ],
        status: 'sold'
      }
    }
  }
];
export const createADog = [
  {
    httpRequest: {
      method: 'POST',
      path: '/pet',
      body: {
        id: 7,
        category: {
          id: 7,
          name: 'Dog'
        },
        name: 'Wally',
        photoUrls: ['https://someUrl'],
        tags: [
          {
            id: 7,
            name: 'Wally'
          }
        ],
        status: 'available'
      }
    },
    httpResponse: {
      statusCode: 200,
      body: {
        id: 7,
        category: {
          id: 7,
          name: 'Dog'
        },
        name: 'Wally',
        photoUrls: ['https://someUrl'],
        tags: [
          {
            id: 7,
            name: 'Wally'
          }
        ],
        status: 'available'
      }
    }
  }
];
export const createACat = [
  {
    httpRequest: {
      method: 'POST',
      path: '/pet',
      body: {
        type: 'JSON',
        values: {
          id: 8,
          category: {
            id: 8,
            name: 'Cat'
          },
          name: 'Tiddle',
          photoUrls: ['https://someUrl'],
          tags: [
            {
              id: 8,
              name: 'Tiddle'
            }
          ],
          status: 'available'
        }
      }
    },
    httpResponse: {
      statusCode: 200,
      body: {
        id: 8,
        category: {
          id: 8,
          name: 'Cat'
        },
        name: 'Tiddle',
        photoUrls: ['https://someUrl'],
        tags: [
          {
            id: 8,
            name: 'Tiddle'
          }
        ],
        status: 'available'
      }
    }
  }
];
