import React, { Component } from 'react';

import AsyncSelect from 'react-select/lib/Async';





const loadOptions = (inputValue, callback) => {
    fetch(`https://inputtools.google.com/request?text=${inputValue}&itc=mr-t-i0-und&num=13&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage`)
    //fetch(`https://api.github.com/search/users?q=${query}`)
          .then(resp => resp.json())
          .then(suggestions =>{
              var  s=[]
              try{
              var res=suggestions[1][0][1];

               s=res.map((i)=>{return {"value":i,"label":i}})
              }
              catch(e){

              }
              callback(s);

          });
};

export default class WithCallbacks extends Component<*, State> {
  state = { inputValue: '' };
  handleInputChange = (newValue: string) => {
    
    this.setState({ inputValue:newValue });
    return newValue;
  };
  render() {
    return (
      <div>
        <pre>inputValue: "{this.state.inputValue}"</pre>
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={this.handleInputChange}
        />
      </div>
  );
}
}