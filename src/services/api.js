const BASE_URL =
  "https://thingproxy.freeboard.io/fetch/https://api.yelp.com/v3/businesses";
const BASE_CITY = "Naperville";
const TOKEN = `Bearer ${process.env.REACT_APP_YELP_API_KEY}`;

export const API = {
  getBusinesses: async (searchTerm) => {
    const url = new URL(`${BASE_URL}/search`);
    url.searchParams.append("location", BASE_CITY);
    url.searchParams.append("term", searchTerm);

    const req = await fetch(url.href, {
      headers: {
        Authorization: TOKEN,
      },
    });
    const payload = await req.json();
    return payload;
  },
  getBusiness: async (id) => {
    const req = await fetch(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: TOKEN,
      },
    });
    const payload = await req.json();
    return payload;
  },
};

export default API;
