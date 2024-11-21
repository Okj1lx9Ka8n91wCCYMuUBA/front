import {UserRegisterDTO} from "../types";
import axios from "axios";

export class AuthService {
    static users = async (): Promise<UserRegisterDTO[]> => {
        try {
            const response = await axios.get<{data: UserRegisterDTO[]}>('/api/users')
            return response.data.data
        } catch (error: unknown) {
            console.log(error)
            throw Error("Unknown error")
        }
    }
}