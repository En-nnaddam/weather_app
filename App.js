import axios from 'axios';
import { API_BASE_URL, API_KEY } from "@env"
import { useState, useEffect } from 'react'
import { StyleSheet, ImageBackground, Text, View, StatusBar } from 'react-native';
import SearchInput from './components/SearchInput';

export default function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("Rabat")

  const onSearch = ({ nativeEvent: { text } }) => {
    setCity(currCity => text)
  }

  useEffect(() => {
    getWeather(city)
  }, [city])

  const getWeather = async (city) => {
    try {
      const { data } = await axios(`${API_BASE_URL}/current.json?key=${API_KEY}&q=${city}`)
      setWeather(data)
    } catch (error) {
      console.log("Error:", error.message)
    }
  }

  if (!weather) return null

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/london.jpg")}
        style={styles.imageBackground}
      >
        <View style={styles.weatherContent}>
          <Text style={[styles.text, styles.mediumSize, styles.city]}>{city}</Text>
          <Text style={[styles.text, styles.mediumSize]}>{weather.current.temp_c}°c</Text>
          <SearchInput
            placeholder={'input any city'}
            onSearch={onSearch}
          />
        </View>
      </ImageBackground>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle='light-content'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  weatherContent: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
    alignItems: 'center',
    justifyContent: 'center',
  },
  city: {
    textTransform: "capitalize",
  },
  text: {
    color: "white",
  },
  mediumSize: {
    fontSize: 24
  }
});
