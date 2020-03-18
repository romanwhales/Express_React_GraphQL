import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});
const Root = () => {
  return (
    <ApolloProvider client={client}>
      {/* <div>Lyrical</div> */}
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="/songs/new" component={SongCreate} />
          <Route path="/song/:id" component={SongDetail} />
        </Route>
      </Router>
      {/* <SongList /> */}
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
