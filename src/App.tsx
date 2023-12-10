import Layout from "./components/Layout/Layout.tsx";
import ListOfNotes from "./containers/ListOfNotes/ListOfNotes.tsx";
import NewNote from "./containers/NewNote/NewNote.tsx";
import EditNote from "./containers/EditNote/EditNote.tsx";
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <Layout>
        <Routes>
          <Route  path="/" element={(
              <ListOfNotes/>
          )}/>
          <Route path="/new-note" element={(
              <NewNote/>
          )}/>
          <Route path="/edit-note/:id" element={(
              <EditNote/>
          )}/>
        </Routes>
      </Layout>
  );
};

export default App
