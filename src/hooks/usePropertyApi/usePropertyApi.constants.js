const token = 'dde70fd6-b600-43cd-b1d9-33250337b31a';

export const propertiesApiBaseUrl = 'https://talent.ender.com/fe-challenge/properties';

export const config = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ token }),
};
