import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout/Layout.tsx";
import ListOfNotes from "./containers/ListOfNotes/ListOfNotes.tsx";
import NewNote from "./containers/NewNote/NewNote.tsx";
import EditNote from "./containers/EditNote/EditNote.tsx";

const App = () => {
  return (
      <Layout>
        <Router>
          <Route  path="/" element={(
              <ListOfNotes/>
          )}/>
          <Route path="/new-note" element={(
              <NewNote/>
          )}/>
          <Route path="/edit-note/:id" element={(
              <EditNote/>
          )}/>
        </Router>
      </Layout>
  );
};

export default App
