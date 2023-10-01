import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, StatusBar, Dimensions, FlatList, Alert } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { useDispatch } from 'react-redux'
import auth from "@react-native-firebase/auth"
import { RFPercentage } from 'react-native-responsive-fontsize'
import ProfileSectionsPart from '../Components/ProfileSectionsPart'
import ProfileSection from '../ProjileSection.json'
//import LinearGradient from 'react-native-linear-gradient';

const Profile = ({ navigation }) => {
    // const colorList = [
    //     { color: '#FF7F00', opacity: '1' },
    //     { color: '#FFA500', opacity: '1' },
    //     { color: '#FFD700', opacity: '1' },
    //     { color: '#FFEDCC', opacity: '1' }
    // ]

    const name = auth().currentUser.displayName
    const email = auth().currentUser.email

    const x = {
        a: () => { console.log("sdkjfklsdjfs") }
    }

    // auth().currentUser.updateProfile({ displayName: "ALİ AHMET" })
    // auth().currentUser.updateProfile({ photoURL: "https://fotolifeakademi.com/uploads/2020/04/dusuk-isikta-fotograf-cekme-724x394.webp" })
    const [source] = React.useState(auth().currentUser.photoURL || "https://images.pexels.com/photos/5506141/pexels-photo-5506141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

     function changePassword () {
        try {
            auth().sendPasswordResetEmail(email)
            Alert.alert("Uyarı", "Lütfen Mailinizi Kontrol Ediniz")
        } catch (error){
            console.log(error)
        }
    }

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
        <View style={{ flex: 1, backgroundColor: "#FF7F00" }}>
            {/* <LinearGradient
                colors={colorList.map(item => item.color)}
                locations={[0.1,0.40,0.30,1]}
                angle={270} 
                style={{ flex: 1 }}
            > */}
            <SafeAreaView style={styles.contentContainer}>
                <FlatList
                    ListHeaderComponent=
                    {
                        <SafeAreaView style={styles.container}>
                            <Icon name="home-sharp" size={40} color="black" onPress={() => navigation.navigate("MainPage")}></Icon>
                            <View style={styles.profileDesPart}>
                                <Image source={{ uri: source }} style={styles.Image}></Image>
                                <Text style={styles.name}>{name}</Text>
                                <Text style={[styles.name, { fontWeight: "600", marginTop: 1, fontSize: RFPercentage(2) }]}>{email}</Text>
                            </View>
                            <Icon name="log-out" size={40} color="black" onPress={handlelogout}></Icon>
                        </SafeAreaView>
                    }
                    showsVerticalScrollIndicator={false}
                    data={ProfileSection}
                    renderItem={({ item }) => <ProfileSectionsPart onPress={item.onPress === "updatePassword" ? changePassword : null} item={item.section} icon={item.icon} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </SafeAreaView>
            {/* </LinearGradient> */}
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
        borderRadius: 20,

    },
    profileDesPart: {
        marginTop: RFPercentage(8),
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
        // İçerik arka plan rengini ayarladık

    }
})
