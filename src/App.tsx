import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./Layout/Layout.tsx";
import ListOfNotes from "./ListOfNotes/ListOfNotes.tsx";
import EditNote from "./EditNote/EditNote.tsx";
import NewNote from "./NewNote/NewNote.tsx";
import './App.css';

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
