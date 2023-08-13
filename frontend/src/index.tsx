import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider,
} from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import {
  SignInPage,
  SignUpPage,
} from './views/auth';
import { CurrentUserProvider } from './context'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const router = createBrowserRouter([
  {
    id: 'SignIn',
    path: "/sign_in",
    element: <SignInPage />,
  },
  {
    id: 'SignUp',
    path: "/sign_up",
    element: <SignUpPage />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ApolloProvider client={client}>
        <CurrentUserProvider>
          <RouterProvider router={router} />
        </CurrentUserProvider>
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
);
