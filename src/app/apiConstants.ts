export class ApiConstants {
    static auth = {
        login: "user/login",
        addUser: "user/addUser",
        getUserList: "user",
        getUserById: (id:any) => `user/userById/${id}`,
        getUserDetails: 'user/getUserDetails',
        checkMail: "user/checkMail",
        getUserByMail: "user/getUserByMail",
        verifyOTP: "user/verifyOTP"
    }
}