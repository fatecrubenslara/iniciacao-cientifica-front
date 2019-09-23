
class clsUser {
    constructor(){
        this.login = ""
        this.token = ""
        this.api = "https://iniciacaoback.herokuapp.com"
    }

    set login(value) {
        this.login = value
    }

    get login(){
        return this.login
    }

    async register(obj){
        let response = await fetch(`${this.api}/`, {
                                method: 'POST',
                                body: JSON.stringify(obj)
                            })
        
        response = await response.json()
        return response
    }


}