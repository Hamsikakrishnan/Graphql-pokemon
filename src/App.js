import './App.css';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import { PokemonContainer } from './containers/PokemonContainer';
function App() {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://graphql-pokemon2.vercel.app/',
    }),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
