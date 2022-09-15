import React from 'react'

export const Authlogin = ({email,password}) => {
    if(email ==="ayoub@gmail.com" && password==="123456789"){
        localStorage.setItem(
            "admin",JSON.stringify({
                user:"admin",token:"123"
            })
        ); return true;
    }else{
        return false;
    }
}
export const logout = () => {
    if (localStorage.getItem("admin")) {
      localStorage.removeItem("admin");
      return true;
    } else {
      return false;
    }
  };
  