import {axiosForAuth} from './axiosForAuth';
export  class PasswordReset extends  axiosForAuth {

   public static async sendPasswordResetLink(user: string) {

        const res = await this.axios.post(`/reset-password-send`, { email: user});
        // tslint:disable-next-line:no-console
        console.log(res.data);
        return res;
    }

    public static async matchToken(email: string, token: string) {

        const res = await this.axios.post(`/match-reset-token`, {email, token});
        // tslint:disable-next-line:no-console
        console.log(res);
        return res;
    }

    public static async generatePassword(obj: any) {

        const res = await this.axios.post(`/generate-password`, obj);
        // tslint:disable-next-line:no-console
        console.log(res);
        return res;
    }
}
