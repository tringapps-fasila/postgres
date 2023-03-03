import { QueryResult } from "pg";
import conn from "../config/dbconfig";

export default class userService{
    public static create(data:any,callBack:Function):any{
        console.log("hh");
        conn.query("insert into student(name)values($1)",
                [
                    data.name
                ],
                (err:Error,result:QueryResult<any>)=> {
                     if(err)
                    {
                        console.log(data);

                       return callBack(err);
                    }
                    return callBack(null,result);
                });    }
        public static getUsers(callBack:Function){
            conn.query(`select * from student`,
                    [],
                    (err:Error,result:QueryResult<any>)=>{
                        if(err){
                            return callBack(err);
                        }
                        return callBack(null,result);
                    });
        }
        public static updateUsers(data:any,callBack:Function){
            conn.query(`update student set name=$1 where id=$2`,
                [data.name,
                    data.id
                ],
                (err:Error,result:QueryResult<any>)=>{
                    if(err){
                        return callBack(err);
                    }
                    return callBack(null,result);
                });
        }
    }

 