import AsyncStorage from "@react-native-async-storage/async-storage";
import { ENV } from "../utils/constans";

const setToken = async (token) => {
    await AsyncStorage.setItem(ENV.STORANGE.TOKEN, token);
}

const getToken = async () => {
    return await AsyncStorage.getItem(ENV.STORANGE.TOKEN);
}

const removeToken = async () => {
    return await AsyncStorage.removeItem(ENV.STORANGE.TOKEN);
}

export const storage = {
    setToken,
    getToken,
    removeToken
}




