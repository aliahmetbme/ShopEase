import React from 'react';
import { View, StyleSheet ,SafeAreaView, Image,Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons"
import { RFPercentage } from 'react-native-responsive-fontsize';
const GradientExample = () => {
    const [source] = React.useState( "https://images.pexels.com/photos/5506141/pexels-photo-5506141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['pink', 'black']} // Burada kullanmak istediğiniz renkleri belirtin
        style={styles.gradient}
      >
        <SafeAreaView style={styles.infoPart}>
             <Icon name="home-sharp" size={50} color="black" onPress={() => navigation.navigate("MainPage")}></Icon>
                    <View style={styles.profileDesPart}>
                        <Image source={{ uri: source }} style={styles.Image}></Image>
                        <Text style={styles.name}>Name Surname</Text>
                        <Text style={[styles.name, { fontWeight: "600", marginTop: 1, fontSize: RFPercentage(2) }]}>Email</Text>
                    </View>
                    <Icon name="log-out" size={50} color="black" onPress={() => {}}></Icon>
                </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GradientExample;
