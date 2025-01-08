import {AuthCredentials} from "../entities/auth/model/auth.types";
import {useAtomValue} from "jotai/index";
import {authStorage} from "../entities/auth/model/auth.model";
import {useEffect} from "react";
import {SplashScreen, Stack, useRouter} from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const auth: AuthCredentials | null = useAtomValue(authStorage);
    const router = useRouter();

    useEffect(() => {
        if (!auth) return;
        if (auth.token) router.replace("/private");
        if (!auth.token) router.replace("/public");
        SplashScreen.hideAsync();
    }, [auth]);

    return <>
        <Stack/>
    </>;
}