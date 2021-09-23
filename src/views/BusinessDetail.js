import { useState, useEffect } from "react";
import { API } from "../services/api.js";
import { useParams } from "react-router-dom";

const BusinessDetail = () => {
  const [business, setBusiness] = useState({});

  let { id } = useParams();

  useEffect(() => {
    getBusiness(id);
  }, [id]);

  const getBusiness = async (id) => {
    const data = await API.getBusiness(id);
    setBusiness(data);
  };
  // console.log(business.name);

  if (business.id) {
    return (
      <div className="m-4 text-center">
        <div>Name: {business.name}</div>
        <div>Phone number: {business.display_phone}</div>
        <div>Address: {business.location.display_address}</div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default BusinessDetail;
