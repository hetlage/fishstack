const resolvers = {
    Query: {
        getRecord: async (_, { domain }, { dataSources }) => {
            return dataSources.WhoIsRecord.getRecord(domain);
        },
    },
};

module.exports = { resolvers };