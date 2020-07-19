import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
    uri:"http://192.168.159.1:4000"
})

export default client;