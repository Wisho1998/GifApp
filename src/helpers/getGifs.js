const getGifs =  async (category) =>{
    const BASE_URL = "http://api.giphy.com/v1/gifs/search";
    const API_KEY = "n7Sz3G7v32WC9j4nuNkE7sXrAHLBfECO";

    let search_text = category;
    let limit = "8";
    const request = `${BASE_URL}?q=${search_text}&&limit=${limit}&&api_key=${API_KEY}`;
    const resp = await fetch(request);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
      id : img.id,
      title: img.title || "none" ,
      url: img.images?.downsized_medium.url
    }));
    return gifs
  }

export default getGifs