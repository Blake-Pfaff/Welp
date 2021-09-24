import React from "react";
import { useState } from "react";
import ErrorMessage from "../components/ui/ErrorMessage.js";
import SearchBar from "../components/ui/SearchBar.js";
import { API } from "../services/api.js";
import { Link } from "react-router-dom";

const BusinessSearch = () => {
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
    console.log("data fetched...");
  };

  return (
    <div className="m-4 text-center">
      <h2 className="text-lg mb-8">Welp</h2>
      <SearchBar
        value={searchTerm}
        onChange={handleSearchTermChange}
        onSubmit={handleSearchSubmit}
      />

      {apiData.businesses.map((item) => (
        <Link
          to={`/businesses/${item.id}`}
          className="p-2 mt-4 bg-gray-300 block"
          key={item.id}
        >
          {item.name}
        </Link>
      ))}

      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export default BusinessSearch;
