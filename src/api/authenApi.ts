import { LoginInput, LoginOutput } from "../store/types/authentication.types";
import axiosClient from "./axiosClient";

const prefixUrl = '/authentication';

const authenApi = {
	login(input: LoginInput): Promise<LoginOutput> {
		return axiosClient.post(prefixUrl + '/login', input);
	}
}

export default authenApi;