import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, StatusBar, Dimensions, FlatList } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { useDispatch } from 'react-redux'
import auth from "@react-native-firebase/auth"
import { RFPercentage } from 'react-native-responsive-fontsize'
import ProfileSectionsPart from '../Components/ProfileSectionsPart'
import GradientExample from '../Assests/Gradient'
const Profile = ({ navigation }) => {
    function generateGradientColor(color1, color2, steps) {
        const hexToRgb = (hex) => {
          const bigint = parseInt(hex.slice(1), 16);
          const r = (bigint >> 16) & 255;
          const g = (bigint >> 8) & 255;
          const b = bigint & 255;
          return [r, g, b];
        };
      
        const rgb1 = hexToRgb(color1);
        const rgb2 = hexToRgb(color2);
      
        const stepFactor = 1 / (steps - 1);
        const gradientColors = [];
      
        for (let i = 0; i < steps; i++) {
          const r = Math.round(rgb1[0] + (rgb2[0] - rgb1[0]) * i * stepFactor);
          const g = Math.round(rgb1[1] + (rgb2[1] - rgb1[1]) * i * stepFactor);
          const b = Math.round(rgb1[2] + (rgb2[2] - rgb1[2]) * i * stepFactor);
      
          gradientColors.push(`rgb(${r}, ${g}, ${b})`);
        }
      
        return gradientColors;
      }
      
      // Koyu mavi (#1A237E) ve turuncu (#FF5722) renkler arasında 5 adet renk üret
      const gradientColors = generateGradientColor("#1A237E", "#FF5722", 5);

    const [source] = React.useState( "https://images.pexels.com/photos/5506141/pexels-photo-5506141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

    const sections = ["Orders", "Saved Cards", "Saved Adress", "Change Password", "Phone Number", "Language"]

    const dispatch = useDispatch()

    async function handlelogout() {
        dispatch({ type: "LOG_OUT" })
        try {
            await auth().signOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={{ backgroundColor: "#e67e22", flex: 1 }}>
            <View>
                <SafeAreaView style={styles.infoPart}>
                    <Icon name="home-sharp" size={50} color="black" onPress={() => navigation.navigate("MainPage")}></Icon>
                    <View style={styles.profileDesPart}>
                        <Image source={{ uri: source }} style={styles.Image}></Image>
                        <Text style={styles.name}>Name Surname</Text>
                        <Text style={[styles.name, { fontWeight: "600", marginTop: 1, fontSize: RFPercentage(2) }]}>Email</Text>
                    </View>
                    <Icon name="log-out" size={50} color="black" onPress={handlelogout}></Icon>
                </SafeAreaView>
            </View>
            <SafeAreaView style={{flex:1, backgroundColor:"#fdf2e9"}}>
                <FlatList
                    data={sections}
                    renderItem={({ item }) => <ProfileSectionsPart item={item} />}
                    keyExtractor={(item, index) => index.toString()} // Burada indeksi kullanabilirsiniz
                />
            </SafeAreaView>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    infoPart: {
        flexDirection: "row",
        justifyContent: "space-between",
        minHeight: Dimensions.get("screen").height / 3,
        margin: RFPercentage(2),
       
    },
    profileDesPart: {
        marginTop: RFPercentage(8)
    },
    name: {
        marginTop: 10,
        color: "black",
        fontSize: RFPercentage(2.5),
        fontWeight: "900",
        alignSelf: "center"
    },
    Image: {
        alignSelf: "center",
        width: RFPercentage(15),
        height: RFPercentage(15),
        borderRadius: RFPercentage(15) / 2
    }
})