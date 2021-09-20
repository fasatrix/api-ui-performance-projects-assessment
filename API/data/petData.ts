export enum status {
  available = 'available',
  pending = 'pending',
  sold = 'sold'
}

export const invalidIds415Response = [''];
export const invalidIds404Response = [
  '000000000000000000000000000000000000000',
  null,
  '5739095773',
  't'
];
export const invalidIds400Response = ['$%'];
export const invalidBody = [
  {
    scenarios: {
      description: 'Invalid photoUrls structure(not an array)',
      body: {
        id: 5,
        category: {
          id: 5,
          name: 'Home'
        },
        name: 'giraffe',
        photoUrls: 'https://someurl.com',
        tags: [
          {
            id: 5,
            name: 'quadrupedes'
          }
        ],
        status: 'available'
      }
    }
  }
];
