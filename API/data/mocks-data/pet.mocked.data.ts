export const petPOST = [
  {
    httpRequest: {
      path: '/pet',
      method: 'POST'
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
        photoUrls: 'https://someUrl',
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
