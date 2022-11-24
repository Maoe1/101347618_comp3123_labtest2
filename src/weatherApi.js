import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'eae446c68bb6ce3cdd29fa8a88ef7ad3';

export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;
    }catch(error) {
        throw error;
    }
}