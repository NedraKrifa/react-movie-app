class objUser{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
}

const user1=new objUser("nedra@yahoo.fr","12345678");
const user2=new objUser("bahak@gmail.com","baha00000");
const user3=new objUser("chamsbz@gmail.com","chams1234");

export const users=[user1,user2,user3];