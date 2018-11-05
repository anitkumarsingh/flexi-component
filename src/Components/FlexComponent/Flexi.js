import React, { Component } from 'react';
import './Flexi.css';


class Flexi extends Component{
   constructor(props){
       super(props);
       this.state = {

       }
   }

onSubmit = (e) => {
    e.preventDefault();  // Preventing full refreshing of page when submit button click
    if (this.props.onSubmit) this.props.onSubmit(this.state); 
    // communicating with parent component, sending Data store in state to parent component
}

onChange = (e, key,type="single") => {
    console.log(`${key} changed ${e.target.value} type ${type}`);
    if (type === "single") {
        this.setState({
           [key]: e.target.value  
           // Dynamicall creating key:value property and storing into the state
        });
    }
}
   creatingFormElements = () => {
    let model = this.props.config;
    let formUI = model.items.map((m,ikey) => {
        let key = m.name;
        let type = m.type || "text"; // if type is not provided default is text
        let props = m.props || {}; // if props(required field) is mentioned then it will display or else props will be empty
        let name= m.name;
        let value = m.value;

        let target = key;  
        value = this.state[target];

        let input =  <input {...props}
                // ref={(key)=>this[m.name]=key}
                className="form-input"
                type={type}
                key={key}
                name={name}
                value={value}
                onChange={(e)=>{this.onChange(e, target)}}
            />;


        if (type === "select") {
            input = m.options.map((o,opkey) => {
                // let checked = o.value === value;
                console.log("select: ", o.value, value);
                console.log(m.name);
                 return (
                        <option {...props}
                            className="form-input"
                            key={opkey}
                            value={o.value}
                        >{o.value}</option>
                 );
            });

            console.log("Select default: ", value);
            input = <select value={value} onChange={(e)=>{this.onChange(e, m.name)}}>{input}</select>;
         }

        return (
            <div key={'g' + key} className="form-group">
                <label className="form-label"
                    key={"l" + key}
                    htmlFor={key}>
                    {m.label}
                </label>
                {input}
            </div>
        );
    });
    return formUI;
}
    render(){ 
        return(
            <div className={this.props.className}>
            
            <form className="dynamic-form" onSubmit={(e)=>{this.onSubmit(e)}}>
                <h3 className="form-title">{this.props.title}</h3>
                {this.creatingFormElements()}
                <div className="form-actions">
                    <button className="submitBtn" type="submit">Submit</button>
                </div>
                <p className="Developer">Build By Anit Kumar, &copy; 2018</p>
            </form>
        </div>
        );
    }
}
export default Flexi;