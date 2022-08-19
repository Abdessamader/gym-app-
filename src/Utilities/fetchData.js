export const exerciceOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e536836e03msh2b206bc009603cep1a8c96jsn85cf478a536c',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};




export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data

}