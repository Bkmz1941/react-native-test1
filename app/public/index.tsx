import {Pressable, StyleSheet, Text, View} from "react-native";
import {useAtom} from "jotai";
import {authStorage} from "../../entities/auth/model/auth.model";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
    const [auth, setAuth] = useAtom(authStorage)
    const authMethod = async () => {
        await setAuth({ token: '12347' });
    }

    return (
        <View style={styles.container}>
            <Text>Public</Text>
            <Pressable onPress={authMethod}>
                <Text>Авторизоваться 2</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
        // backgroundColor: "#38434D"
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D",
    },
});