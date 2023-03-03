import express from "express";

import userService from "./user.service";

export default class userController{
   public static  createUser(req:express.Request,res:express.Response){
      const body:any=req.body;
      return userService.create(body,(err:any,result:any)=>{
        console.log(body);
        if(err){
                      console.log(err);
                      return res.status(500).json({
                          sucess:0,
                          message:"database connection error"
                      });
                  }
                  return res.status(200).json({
                      sucess:1,
                      message:result
                  });
      })
      
   }
   public static getUser(req:express.Request,res:express.Response){
         return userService.getUsers((err:any,result:any)=>{
            console.log(req.params)
          if(err){
              console.log(err);
              return res.status(500).json({
                  sucess:0,
                  message:"database connection error"
              });
          }
          return res.status(200).json({
              sucess:1,
              message:result,
              
          })
        });
}
public static updateUser(req:express.Request,res:express.Response){
    const body=req.body;
      return userService.updateUsers(body,(err:Error,result:any)=>{
        if(err){
            console.log(err);
            return res.status(500).json({
                sucess:0,
                message:"database connection error"
            });
        }
        return res.status(200).json({
            sucess:1,
            message:result,
            ans:body
        })
      });
}
}

 