import {AuthCredentials, LoginPayload} from "./auth.types";
import {atomWithStorage, createJSONStorage} from "jotai/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = createJSONStorage(() => AsyncStorage)
export const authStorage = atomWithStorage('auth', null, storage);

export const useAuth = () => {
    const login = async (payload: LoginPayload) => {

    }
}