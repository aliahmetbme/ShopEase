import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, StatusBar, Dimensions, FlatList } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { useDispatch } from 'react-redux'
import auth from "@react-native-firebase/auth"
import { RFPercentage } from 'react-native-responsive-fontsize'
import ProfileSectionsPart from '../Components/ProfileSectionsPart'
import LinearGradient from 'react-native-linear-gradient';

const Profile = ({ navigation }) => {
    const colorList = [
        { color: '#FF7F00', opacity: '1' },
        { color: '#FFA500', opacity: '1' },
        { color: '#FFD700', opacity: '1' },
        { color: '#ffbf8b', opacity: '1' }
    ]

    const [source] = React.useState("https://images.pexels.com/photos/5506141/pexels-photo-5506141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

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
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={colorList.map(item => item.color)}
                locations={[0.15,0.60,0.40,1]}
                angle={270}
                style={{ flex: 1 }}
            >
            <SafeAreaView style={styles.container}>
                    <Icon name="home-sharp" size={50} color="black" onPress={() => navigation.navigate("MainPage")}></Icon>
                    <View style={styles.profileDesPart}>
                        <Image source={{ uri: source }} style={styles.Image}></Image>
                        <Text style={styles.name}>Name Surname</Text>
                        <Text style={[styles.name, { fontWeight: "600", marginTop: 1, fontSize: RFPercentage(2) }]}>Email</Text>
                    </View>
                    <Icon name="log-out" size={50} color="black" onPress={handlelogout}></Icon>
                </SafeAreaView>
                <SafeAreaView style={styles.contentContainer}>
                    <FlatList
                        data={sections}
                        renderItem={({ item }) => <ProfileSectionsPart item={item} />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </SafeAreaView>
            </LinearGradient>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
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
        color: "white", // Metin rengini beyaz olarak ayarladık
        fontSize: RFPercentage(2.5),
        fontWeight: "900",
        alignSelf: "center"
    },
    Image: {
        alignSelf: "center",
        width: RFPercentage(15),
        height: RFPercentage(15),
        borderRadius: RFPercentage(15) / 2
    },
    contentContainer: {
        flex: 1,
        backgroundColor: "#fdf2e9", // İçerik arka plan rengini ayarladık
    }
})
