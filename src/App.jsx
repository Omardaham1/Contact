import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import ContactRow from "./components/ContactRow";


export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>
          <selectedContactId/>
          <setSelectedContactId/>
          </div>
      ) : (
        <ContactList />
      )}
    </>
  );
}


