module.exports = {
  client: {
    includes: ['./**/*.ts', './**/*.tsx'],
    excludes: ['./node_modules/**/*'],
    service: {
      name: 'sick-fits-backend',
      url: 'http://localhost:3000/api/graphql',
    },
  },
};
