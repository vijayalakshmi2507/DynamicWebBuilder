import React,{Component} from 'react';
import {render}from 'react-dom';
import'./style.css';
import Hello from './Hello';
import DynamicFormGenerator from 'react-interactive-dynamic-form-generator';

export default class App extends Component{
  state={
    buttonBackgroundColor:'#0000ff',
    buttonColor:'#fff',
    formBorderColorOnFocus:'#0000ff',
    errorTextColor:'red',
    formFields:{
      name:{
        elementType:"input",
        elementConfig:{
          type:"text",
          placeholder:"Name"
        },
        value:"",
        validation:{
          required:true,
          error:""
        },
        valid:false,
        touched:false
      },
      registernumber:{
        elementType:"input",
        elementConfig:{
          type:"text",
          placeholder:"Register Number"
        },
        value:"",
        validation:{
          required:true,
          minLenght:9,
          maxLength:12,
          isNumberic:true,
          error:""
        },
        valid:false,
        touched:false,
      },
      date:{
        elementType:"date",
        elementConfig:{
          type:"date",
          placeholder:"Date"
        },
        value:"",
        validation:{
          required:true,
          error:""
        },
        valid:false,
        touched:false,
      },
      email:{
        elementType:"input",
        elementConfig:{
          type:"email",
          placeholder:"E-Mail"
        },
        value:"",
        validation:{
          required:true,
          isEmail:true,
          error:""
        },
        valid:false,
        touched:false
      },
      gender:{
        elementType:"radio",
        elementConfig: {
          placeholder:"Gender",
          options:[
            {value:"Male",displayValue:"Male"},
            {value:"Female",displayValue:"Female"}
          ]
        },
        value:"",
        validation:{
          required:true
        },
        valid:false
      },
      phonenumber:{
        elementType:"input",
        elementConfig:{
          type:"text",
          placeholder:"Phone Number"
        },
        value:"",
        validation:{
          required:true,
          minLength:10,
          maxLenght:10,
          isNumberic:true,
          error:""
        },
        valid:false,
        touched:false,
      },
      yearofpassing:{
        elementType:"select",
        elementConfig:{
          placeholder:"Year of Passing",
          options:[
            {value:"2019",displayValue:"2019"},
            {value:"2020",displayValue:"2020"},
            {value:"2021",displayValue:"2021"}
          ]
        },
        value:"",
        validation:{
          required:true
        },
        valid:false
      },
      degree:{
        elementType:"radio",
        elementConfig:{
          placeholder:"Degree",
          options: [
            {value:"B.E",displayValue:"B.E"},
            {value:"B.Tech",displayValue:"B.Tech"},
            {value:"M.E/M.Tech",displayValue:"M.E/M.Tech"}
        ]
      },
      value:"",
      validation:{
        required:true
      },
      valid:false

    },
    branch:{
      elementType:"select",
      elementConfig:{
        placeholder:"Branch",
        options:[
          {value:"IT",displayValue:"IT"},
          {value:"CSE",displayValue:"CSE"},
          {value:"ECE",displayValue:"ECE"},
          {value:"EEE",displayValue:"EEE"}
        ]
      },
      value:"",
      validation:{
        required:true
      },
      valid:false

    },

  }
};
formResult = form =>{
console.log(form);
}
render(){
  return(
    <div className="FormContainer">
      <h1 className="myStyle"><center><strong>Student Registration Form</strong></center></h1>
      <DynamicFormGenerator
       formFields={this.state.formFields}
       buttonBackgroundColor={this.state.buttonBackgroundColor}
       buttonColor={this.state.buttonColor}
       formBorderColorOnFocus={this.state.formBorderColorOnFocus}
       errorTextColor={this.state.errorTextColor}
       onFormSubmit={form=>this.formResult(form)}
       />
    </div>

  );

}
}
render(<App/>,
document.getElementById('root'));