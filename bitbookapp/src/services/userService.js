import { url } from "../shared/const"
class UserService {

    getProfileData() {

        return fetch(url + '/', {
            headers: {



                "Key": "bitbookdev",
                "SessionId": "2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE"



            }
        })
            .then(function (response) {
                return response.json();
            })

    }


}




export default new UserService();


