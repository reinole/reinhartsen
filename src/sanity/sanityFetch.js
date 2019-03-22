import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'ysw97nhl',
  dataset: 'production'
});

export default client;
