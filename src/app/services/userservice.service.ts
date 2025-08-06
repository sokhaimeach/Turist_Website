import { Injectable } from "@angular/core";
import { UserInterface } from "./interface";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    setUserAccount(user: any) {
        localStorage.setItem('UserAccount', JSON.stringify(user));
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