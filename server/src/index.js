const {ApolloServer} = require("apollo-server");
const {typeDefs} = require("../schema/type-defs");
const {resolvers} = require("../schema/resolvers");
const {WhoIsRecord} = require("./WhoIsRecord");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            WhoIsRecord: new WhoIsRecord()
        }
    }
});

const port = process.env.PORT || 3001;
server.listen(port).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});
