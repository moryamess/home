'use strict';

import {Buffer} from 'buffer'
import moment from 'moment';
import octokit from '@octokit/rest'
debugger
var authenticate=octokit.authenticate;
var g=authenticate({
    type: 'token',
    token: 'b76e2330a9469e9e21a425e83f77940c8caf2a04'
  });

function githubDB(repo,path){
    this.owner='rohitbels';
    this.repo=repo;
    this.path=path;
}

githubDB.prototype.decode=function(file) {
    return new Buffer(file, 'base64').toString('utf8');
};

githubDB.prototype.encode= function (file) {
    return new Buffer(JSON.stringify(file)).toString('base64');
};

githubDB.prototype.getFileData=async function(){
    console.log(this)
    const result = await octokit.repos.getContent({owner:this.owner, repo:this.repo, path:this.path});
    try{
        return JSON.parse(this.decode(result.data.content));
    }
    catch(e){
        return {};
    }
}

githubDB.prototype.getFileDetails=async function(){
    console.log(this.owner,this.path)
    const result = await octokit.repos.getContent({owner:this.owner, repo:this.repo, path:this.path});

            return result.data;

}

githubDB.prototype.updateFileContent=async function(rawContent,message){

        var res = await this.getFileDetails();
       
        var content=JSON.parse(this.decode(res.content));
        var currentDate=moment().format("YYYYMMDD");   
        if(content instanceof Array){
            if(content[currentDate])    
            {
                content[currentDate]=rawContent;            
            }
            else
            {
                content[currentDate]=Object.assign({},rawContent,content.currentDate)
            }
        }
        else if(content instanceof Object){
            content=Object.assign({},rawContent,content)
        }


        var sha=res.sha;
        content=this.encode(content);
        const result =await octokit.repos.updateFile({owner:this.owner, 
        repo:this.repo, path:this.path,  message, 
        content, sha});
        try{

                return result;
        }
        catch(e){
                return {};
        }
}


githubDB.prototype.createFile=async function(content,message){

    var final={}
    var currentDate=moment().format("YYYYMMDD");
    final[currentDate]=content;
    content =this.encode(final) 
    const result = await octokit.repos.createFile({owner:this.owner, repo:this.repo, path:this.path,
         message, content 
      });
      return result;
  }


export default githubDB;