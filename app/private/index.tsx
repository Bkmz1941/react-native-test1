import {Pressable, StyleSheet, Text, View} from "react-native";
import {useRootNavigationState} from "expo-router";
import {AuthCredentials} from "../../entities/auth/model/auth.types";
import {useAtomValue} from "jotai/index";
import {authStorage} from "../../entities/auth/model/auth.model";
import {useAtom} from "jotai";

export default function Index() {
    const [auth, setAuth] = useAtom(authStorage);

    const logout = async () => {
        await setAuth({token: null});
    }

    return (
        <View style={styles.container}>
            <Text>Private</Text>
            <Pressable onPress={logout}>
                <Text>Выход</Text>
            </Pressable>
        </View>
    )
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