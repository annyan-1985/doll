import { Environment, Network, RecordSource, Store } from 'relay-runtime';

function fetchQuery(operation, variables) {
    return fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text, // Relay-specific: the GraphQL query string
            variables,
        }),
    }).then(response => {
        return response.json();
    });
}

const environment = new Environment({
    network: Network.create(fetchQuery), // Configuring the network layer with fetchQuery function
    store: new Store(new RecordSource()), // Setting up a store for caching
});

export default environment;