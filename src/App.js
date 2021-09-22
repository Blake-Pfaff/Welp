import { useState } from "react";
import { API } from "./services/api.js";
import "./App.css";

function App() {
  const [businesses, setBusinesses] = useState({});

  const getBusinesses = async (searchTerm) => {
    const data = await API.getBusinesses(searchTerm);
    setBusinesses(data);
    console.log(businesses);
  };

  return (
    <div>
      <div>App</div>
      <button type="button" onClick={() => getBusinesses("pizza")}>
        Get Pizza Businesses
      </button>
      <pre>{JSON.stringify(businesses, null, 2)}</pre>
    </div>
  );
}

export default App;
