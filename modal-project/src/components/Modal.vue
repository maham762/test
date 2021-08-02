<template src="./Modal.html">
   <router-view/> 
</template>

<script>
import axios from 'axios'
export default {
  name: 'Modal',
  props: {
    msg: String
  },
  data()
  {
    return {
      input: { 
        form:true,
        email:'',
        password:''
      },
      signup:{
        form2:true,
        fullname:'',
        email1:'',
        contact:'',
        password1:'',
        confirmPassword:''
      }
    }
  },
  methods:
  {
    Openform(){
      document.getElementById("login").style.color = "#e03249";
      document.getElementById("login").style.fontWeight= "bold";
      document.getElementById("signup").style.fontWeight= "normal";
      document.getElementById("signup").style.color = "grey";
      document.getElementById("hr1").style.color = "#e03249";
      document.getElementById("hr2").style.color = "grey";
      document.getElementById("form2").style.display = "none";
      document.getElementById("form1").style.display = "block";
    },
    Openform2(){
      document.getElementById("signup").style.color = "#e03249";
      document.getElementById("login").style.fontWeight= "normal";
      document.getElementById("signup").style.fontWeight= "bold";
      document.getElementById("login").style.color = "grey";
      document.getElementById("hr2").style.color = "#e03249";
      document.getElementById("hr1").style.color = "grey";
      document.getElementById("form1").style.display = "none";
      document.getElementById("form2").style.display = "block";
    },
    async loginUser(){
      let result = await axios.post("http://localhost:3000/authentication",{
      email: this.input.email,
      password:this.input.password 
      },{ headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }});
      console.log(result);
      if(result.data === "Email does not exist!")
      {
        document.getElementById("dis15").style.display = "block";
      }
      else if(result.data === "Password incorrect")
      {
        document.getElementById("dis16").style.display = "block";
      }
      else if(result.data === "Authentication Successful")
      {
        alert("Authentication Successfull");
        console.log(this.$router);
        this.$router.push('getAll');
 
      }
    },
    checkForm(){
      this.input.form=true;
      document.getElementById("dis1").style.display = "none";
      document.getElementById("dis2").style.display = "none";
       document.getElementById("dis13").style.display = "none";
      document.getElementById("dis15").style.display = "none";
      document.getElementById("dis16").style.display = "none";
      // this.input.email = document.getElementById("email").value;
      // this.input.password = document.getElementById("password").value;
      if (!this.input.email) {
        document.getElementById("dis1").style.display = "block";
        this.form=false;
      }
      else{
        var syntax1=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!this.input.email.match(syntax1))
        {
          document.getElementById("dis13").style.display = "block";
          this.input.form=false;
        }
      }
      if (!this.input.password) {
        document.getElementById("dis2").style.display = "block";
        this.input.form=false;
      }
      if(this.input.form)
      {
        alert("Sent Request for Log In");
        this.loginUser();
      }
    },
    async addUser(){
      let result = await axios.post("http://localhost:3000/posts",{
      email: this.signup.email1,
      contact:this.signup.contact,
      fullname:this.signup.fullname,
      password:this.signup.password1 
      },{ headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }});
      console.log(result);
      if(result.data === "Email Account Already exists")
      {
        document.getElementById("dis14").style.display = "block";
      }
      else if(result.data === "Account Created Successfully")
      {
        alert("Account created Successfully");
        this.$router.push('getAll');
      }
    },
    checkForm2(){
      this.signup.form2=true;
      document.getElementById("dis3").style.display = "none";
      document.getElementById("dis4").style.display = "none";
      document.getElementById("dis5").style.display = "none";
      document.getElementById("dis6").style.display = "none";
      document.getElementById("dis7").style.display = "none";
      document.getElementById("dis8").style.display = "none";
      document.getElementById("dis9").style.display = "none";
      document.getElementById("dis10").style.display = "none";
      document.getElementById("dis11").style.display = "none";
      document.getElementById("dis12").style.display = "none";
      // this.fullname=document.getElementById("fullname").value;
      if (!this.signup.fullname) {
        document.getElementById("dis3").style.display = "block";
        this.signup.form2=false;
      }
      // this.email1 = document.getElementById("email1").value;
      if (!this.signup.email1) {
        document.getElementById("dis4").style.display = "block";
        this.signup.form2=false;
      }
      else{
        var syntax=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!this.signup.email1.match(syntax))
        {
          document.getElementById("dis12").style.display = "block";
          this.signup.form2=false;
        }
      }
      // this.contact= document.getElementById("contactno").value;
      if (!this.signup.contact) {
        document.getElementById("dis5").style.display = "block";
        this.signup.form2=false;
      }
      else{
        var numbers = /^[0-9]+$/;
        if (!this.signup.contact.match(numbers)) {
          document.getElementById("dis6").style.display = "block";
          this.signup.form2=false;
        }
        else{
          if (this.signup.contact.length<11) {
          document.getElementById("dis7").style.display = "block";
          this.signup.form2=false;
        }
        }
      }
      // this.password1 = document.getElementById("password1").value;
      if (!this.signup.password1) {
        document.getElementById("dis8").style.display = "block";
        this.signup.form2=false;
      }
      else{
        if (this.signup.password1.length<8) {
          document.getElementById("dis9").style.display = "block";
          this.signup.form2=false;
        }
      }
      // this.confirmPassword = document.getElementById("password2").value;
      if (!this.signup.confirmPassword) {
        document.getElementById("dis10").style.display = "block";
        this.signup.form2=false;
      }
      else{
        if (this.signup.confirmPassword!== this.signup.password1) {
          document.getElementById("dis11").style.display = "block";
          this.signup.form2=false;
        }
      }
      if(this.signup.form2)
      {
        alert("Request sent to API for Registration");
        this.addUser();
        
      }
    }
  },
  mounted(){
           console.log("ROUTER CHECK",this.$router);
  }
}
</script>

<style src="./Modal.css">

</style>
