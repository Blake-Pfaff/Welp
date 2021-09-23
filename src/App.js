import { useState } from "react";
import SearchBar from "./components/ui/SearchBar.js";
import ErrorMessage from "./components/ui/ErrorMessage.js";
import { API } from "./services/api.js";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [apiData, setApiData] = useState({
    businesses: [],
    total: null,
    region: {},
  });

  const getBusinesses = async (searchTerm) => {
    setErrorMessage(null);
    const data = await API.getBusinesses(searchTerm);
    setApiData(data);
    console.log(data.businesses.length);
    if (data.total === 0) {
      setErrorMessage("no results found");
    }
  };

  const handleSearchTermChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleSearchSubmit = async () => {
    console.log("fetching data...");
    await getBusinesses(searchTerm);
    console.log(apiData.businesses);
    console.log("data fetched...");
  };

  return (
    <div className="m-4 text-center">
      <div className="text-lg mb-8">Welp</div>
      <SearchBar
        value={searchTerm}
        onChange={handleSearchTermChange}
        onSubmit={handleSearchSubmit}
      />
      {/* <pre>{JSON.stringify(businesses, null, 2)}</pre> */}
      {apiData.businesses.map((item) => (
        <div className="p-2 mt-4 bg-gray-300" key={item.id}>
          {item.name}
        </div>
      ))}
      <ErrorMessage message={errorMessage} />
    </div>
  );
}

export default App;
