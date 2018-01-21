import { Injectable } from '@angular/core';
import { Http }  from '@angular/http';
import Config from './shared/config'
import "rxjs/Rx"
@Injectable()
export class SessionService {

  constructor(private http :Http) { }
  Users = {
			login: (username: string,password : string) => {
	          return this.http.post(Config.baseUrl + "/users/login/admin",
	          		 {
	          		  username : username,
	          		  password : password
	          		})
	                .map(response => {
	              	 return response.json();
	          }).toPromise();
	    	},
        add: (first_name: string,last_name : string,mobile : string, email: string, username : string , password: string, is_active:number,img : string,permission) => {
              return this.http.post(Config.baseUrl + "/users/add",
                   {
                    first_name : first_name,
                    last_name : last_name,
                    mobile : mobile,
                    email: email,
                    username: username,
                    password: password,
                    is_active: 1,
                    img : img,
                    permission : permission
                  })
                    .map(response => {
                     return response.json();
              }).toPromise();
          },

        list: (is_admin : string) => {
	    		return this.http.get(Config.baseUrl + "/users/list/" + is_admin)
	                .map(response => {
	              	 return response.json();
	          }).toPromise();
	    },
	    view: (id: string) => {
	    		return this.http.get(Config.baseUrl + "/users/view/" + id)
	                .map(response => {
	              	 return response.json();
	          }).toPromise();
	    },
	    edit: (user_id: string ,first_name: string,last_name : string,mobile : string, email: string, username : string , password: string,img : string) => {
	          return this.http.post(Config.baseUrl + "/users/edit/"+ user_id,
	          		 {
	          		  	first_name : first_name,
	                    last_name : last_name,
	                    mobile : mobile,
	                    email: email,
	                    username: username,
	                    password: password,
	                    img : img
	          		})
	                .map(response => {
	              	 return response.json();
	          }).toPromise();
	    	},
	    activate_user:(user_id: string) => {
	          return this.http.post(Config.baseUrl + "/users/activated_user/"+ user_id,
	          		 {
	          		  	user_id: user_id
	          		})
	                .map(response => {
	              	 return response.json();
	          }).toPromise();

	    }
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
	    	list: (title : string,description : string, date_filter: string) => {
	    		return this.http.post(Config.baseUrl + "/posts/list",{
	    		title : title,
	    		description : description,
	    		date_filter :date_filter
	    		})
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
	Comment = {
		list : () =>{
			return this.http.get(Config.baseUrl + "/comments/list").
				  map(response=>{
				  	return response.json();
				  }).toPromise();
		}
	}
	Email = {
		send : (title : string, email : string,message : string) => {
		console.log(title)
			return this.http.post(Config.baseUrl + '/emails/send',
					{
						title : title,
						email : email,
						message : message
					}).
				   map(response=>{
				   		return response.json();
				   }).toPromise();
		}
	}
	Feedback = {
		list : () =>{
			return this.http.post(Config.baseUrl + "/feedback/list",{}).
				  map(response=>{
				  	return response.json();
				  }).toPromise();
		},
		reply:(feedback_id: string,user_id : string,email : string,description : string) => {
                return this.http.post(Config.baseUrl + "/feedback/reply",
                     {
                     	feedback_id: feedback_id,
                        user_id: user_id,
                        email : email,
                        description : description
                    })
                      .map(response => {
                       return response.json();
                }).toPromise();

          },
           verify_user:(user_id: string) => {
	          return this.http.post(Config.baseUrl + "/feedback/verify/"+ user_id,
	          		 {
	          		  	user_id: user_id
	          		})
	                .map(response => {
	              	 return response.json();
	          }).toPromise();

	    }
	}

}
