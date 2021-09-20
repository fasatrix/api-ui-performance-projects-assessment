export const Pet = {
  type: 'object',
  required: ['name', 'photoUrls'],
  properties: {
    id: {
      type: 'number'
    },
    category: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        name: {
          type: 'string'
        }
      }
    },
    name: {
      type: 'string'
    },
    photoUrls: {
      type: 'array',
      items: [
        {
          type: 'string'
        }
      ]
    },
    tags: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'number'
          },
          name: {
            type: 'string'
          }
        }
      }
    },
    status: {
      type: 'string',
      enum: ['available', 'pending', 'sold']
    },
    additionalProperties: false
  }
};
export const Pets = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      type: Pet
    }
  }
};

export const apiRes = {
  type: 'object',
  properties: {
    code: {
      type: 'number'
    },
    type: {
      type: 'string'
    },
    message: {
      type: 'string'
    }
  },
  additionalProperties: false
};
