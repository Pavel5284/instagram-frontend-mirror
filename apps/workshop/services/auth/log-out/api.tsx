import { instance } from "services/instance";

export const logOutAPI = {
    logOut() {
        return instance.post('auth/logout', {}, { withCredentials: true });
    },
};
