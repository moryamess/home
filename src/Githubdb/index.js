'use strict';

import {Buffer} from 'buffer'
import moment from 'moment';
import Octokit from '@octokit/rest'

const octokit = new Octokit()
octokit.authenticate({
    type: 'basic',
    username: 'rohitbels',
    password: 'githubrohit93'
  })

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

    try{
    const result = await octokit.repos.getContent({owner:this.owner, repo:this.repo, path:this.path});
    
        return JSON.parse(this.decode(result.data.content));
    }
    catch(e){
        return {
            status:-1
        };
    }
}

githubDB.prototype.getFileDetails=async function(){

    const result = await octokit.repos.getContent({owner:this.owner, repo:this.repo, path:this.path});

            return result.data;

}

githubDB.prototype.updateFileContent=async function(rawContent,message){

        var res = await this.getFileDetails();
       
        var content=JSON.parse(this.decode(res.content));
        var currentDate=moment().format("YYYYMMDD");   
        if(content instanceof Array){
            content.push(rawContent)

        }
        else if(content instanceof Object){
            if(content[currentDate])    
            {
                content[currentDate]=rawContent;            
            }
            else
            {
                content[currentDate]=rawContent;
            }
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


githubDB.prototype.createFile=async function(content=[],message="menu"){

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