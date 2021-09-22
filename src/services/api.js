const BASE_URL =
  "https://thingproxy.freeboard.io/fetch/https://api.yelp.com/v3/businesses/search";
const BASE_CITY = "Naperville";

export const API = {
  getBusinesses: async (searchTerm) => {
    const url = new URL(BASE_URL);
    url.searchParams.append("location", BASE_CITY);
    url.searchParams.append("term", searchTerm);

    const apiKey = `Bearer ${process.env.REACT_APP_YELP_API_KEY}`;

    const req = await fetch(url.href, {
      headers: {
        Authorization: apiKey,
      },
    });
    const payload = await req.json();

    return payload;
  },
};

export default API;
