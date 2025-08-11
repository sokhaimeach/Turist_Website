import { Injectable } from "@angular/core";
import { UserInterface } from "./interface";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    setUserAccount(user: any) {
        let AllUser = []
        let isAddUser = true
        try {
            AllUser = this.getUserAccount()
        } catch {
            AllUser = []
        }
        if(Array.isArray(AllUser)){
            for(let i = 0; i<AllUser.length; i++){
                if(AllUser[i].name == user.name && AllUser[i].password == user.password) {
                    AllUser[i] = user
                    isAddUser = false
                }
            }
            if(isAddUser)
                AllUser.push(user)
        }
        localStorage.setItem('UserAccount', JSON.stringify(AllUser));
    }

    getUserAccount() {
        let data;
        const emtydata = {profile: '',cover: '',name: '',nickname: '',password: '',school: '',status: '',workplace: '',bio: '',feedback: '',post: [] }
        if(typeof localStorage !== 'undefined'){
            data = JSON.parse(localStorage.getItem('UserAccount') || '')
        }
        if (data == ''){
            data = emtydata;
        }
        return data;
    }


    setPosts(user: any) {
        localStorage.setItem('Posts', JSON.stringify(user));
    }

    getPosts() {
        let data;
        if(typeof localStorage !== 'undefined'){

            data = JSON.parse(localStorage.getItem('Posts') || '[]')
        }
        return data;
    }
}