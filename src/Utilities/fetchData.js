export const exerciceOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e536836e03msh2b206bc009603cep1a8c96jsn85cf478a536c',
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_KEY
  }
};




export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data

}