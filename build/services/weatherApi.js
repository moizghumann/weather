import { USER_AGENT } from "../constants/constant.js";
export const makeWeatherAPICall = async (url) => {
    const headers = {
        "USER-AGENT": USER_AGENT,
        Accept: "application/geo+json",
    };
    try {
        const res = await fetch(url, { headers });
        if (!res.ok) {
            throw new Error(`http error: ${res.status}`);
        }
        return res.json();
    }
    catch (error) {
        console.log(error);
        return null;
    }
};
