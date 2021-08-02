<template src="./getAll.html">
   <router-view/> 
</template>

<script>
import axios from "axios";
export default {
  name: "getAll",
  data() {
    return {
      msg: "Welcome to Your Vue.js App API practice Project",
      userEmail: [],
      userName:[],
      userContact:[],
      email1:"",
      user:[],
      fullname: "",
      email2: "",
      contact: "",
      single:false,
      multiple:false,
      contact1:""
    };
  },
  methods: {
    async listUsers() {
        this.userName.splice(0, this.userName.length);
        this.userEmail.splice(0, this.userEmail.length);
        this.userContact.splice(0, this.userContact.length);
      let result = await axios.get(
        "http://localhost:3000/posts",
        {},
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      );
      if(result.data){
      for (let user of result.data) {
            this.userName.push(user.fullname);
            this.userEmail.push(user.email);
            this.userContact.push(user.contact);
            this.user.push(user.fullname,user.email,user.contact);

        }
        this.single=false;
        this.multiple=true;
      }
        // this.user.push(this.userName,this.userEmail,this.userContact);
        // console.log(this.user);
    },
    async getUser() {
          if(this.email1){
      let result = await axios.get(
        "http://localhost:3000/posts/"+this.email1,
        {
            // userId: this.email1
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      );
        console.log(result.data);
        // this.userObj(result.data.fullname,result.data.email,result.data.contact,result.data.password);
        if(result){
        this.fullname=result.data.fullname;
        this.email2=result.data.email;
        this.contact=result.data.contact;
        this.single=true;
        this.multiple=false;
        }
        else{
            alert("No user profile exists with this email id");
        }
        }
      else{
          alert("Email is required");
      }
    },
     async deleteUser() {
          if(this.email1){
      let result = await axios.delete("http://localhost:3000/posts/"+this.email1,
        {
            // userId: this.email1
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      );
        // this.userObj(result.data.fullname,result.data.email,result.data.contact,result.data.password);
        if(result){
            alert("User Profile Removed Successfully!")
        }
        else{
            alert("No user profile exists with this email id");
        }
        }
      else{
          alert("Email is required");
      }
     },
     async updateUser() {
          if(this.email1 && this.contact1){
      let result = await axios.post("http://localhost:3000/updateByPost/"+this.email1,
        {
            email:this.email1,
            contact: this.contact1
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      );
      console.log(result);
        if(result){
            alert("User Profile Updated Successfully!")
        }
        else{
            alert("No user profile exists with this email id");
        }
        }
      else{
          alert("Email is required");
      }
     }
  }
};
</script>

<style  src="./getAll.css">

</style>