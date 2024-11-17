import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

const removeData = async (key) => {
  try {
    const value = await AsyncStorage.removeItem(key);
  } catch (e) {
    // error reading value
  }
};

export default {
  storeData,
  getData,
  removeData,
};
