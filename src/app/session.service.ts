import { Injectable } from '@angular/core';
import { Http }  from '@angular/http';
import Config from './shared/config'
import "rxjs/Rx"
@Injectable()
export class SessionService {

  constructor(private http :Http) { }
  Users = {
			login: (username: string,password : string) => {
	          return this.http.post(Config.baseUrl + "/users/login",
	          		 {
	          		  username : username,
	          		  password : password
	          		})
	                .map(response => {
	              	 return response.json();
	          }).toPromise();
	    	},
        add: (first_name: string,last_name : string,mobile : string, email: string) => {
              return this.http.post(Config.baseUrl + "/users/add",
                   {
                    first_name : first_name,
                    last_name : last_name,
                    mobile : mobile,
                    email: email
                  })
                    .map(response => {
                     return response.json();
              }).toPromise();
          },
          list: () => {
  	    		return this.http.get(Config.baseUrl + "/users/list")
  	                .map(response => {
  	              	 return response.json();
  	          }).toPromise();
  	    	},
	 }
  Posts = {
			add: (title: string,description : string,img : string) => {
	          return this.http.post(Config.baseUrl + "/posts/add",
	          		 {
	          		  title : title,
	          		  description : description,
	          		  img :img
	          		})
	                .map(response => {
	              	 return response.json();
	          }).toPromise();
	    	},
	    	list: () => {
	    		return this.http.get(Config.baseUrl + "/posts/list")
	                .map(response => {
	              	 return response.json();
	          }).toPromise();
	    	},
	    	view: (post_id : string) => {
	    		return this.http.get(Config.baseUrl + "/posts/view/" + post_id)
	                .map(response => {
	              	 return response.json();
	          }).toPromise();
	    	},
	    	edit: (post_id: string,title: string,description : string,img : string) => {
	          return this.http.post(Config.baseUrl + "/posts/edit/"+ post_id,
	          		 {
	          		  title : title,
	          		  description : description,
	          		  img :img
	          		})
	                .map(response => {
	              	 return response.json();
	          }).toPromise();
	    	},
	 }

}
