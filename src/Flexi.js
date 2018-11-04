import React, { Component } from 'react';
import './Flexi.css';


class Flexi extends Component{
   constructor(props){
       super(props);
       this.state = {

       }
   }

onSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) this.props.onSubmit(this.state);
}

onChange = (e, key,type="single") => {
    console.log(`${key} changed ${e.target.value} type ${type}`);
    if (type === "single") {
        this.setState({
           [key]: e.target.value  
        });
    } else {
        // Array of values (e.g. checkbox): TODO: Optimization needed.
        let found = this.state[key] ?  
                        this.state[key].find ((d) => d === e.target.value) : false;
        
        if (found) {
            let data = this.state[key].filter((d) => {
                return d !== found;
            });
            this.setState({
                [key]: data
            });
        } else {
            this.setState({
                [key]: [e.target.value, ...this.state[key]]
            });
        }
    }
}
   renderForm = () => {
    let model = this.props.config;
    let formUI = model.items.map((m,ikey) => {
        let key = m.name;
        let type = m.type || "text";
        let props = m.props || {};
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
            input = m.options.map((o) => {
                let checked = o.value === value;
                console.log("select: ", o.value, value);
                console.log(m.name);
                 return (
                        <option {...props}
                            className="form-input"
                            key={o.key}
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
    //     const elem = this.props.config;
    //     const freshItem = this.props.config.items.map((itemssss,i)=>{
    //         return(
    //             <div key={i}>
    //                <input type={itemssss.type}/>
    //             </div>
    //         );
    //     })
    //    console.log(elem);
    
        return(
            <div className={this.props.className}>
            <form className="dynamic-form" onSubmit={(e)=>{this.onSubmit(e)}}>
                {this.renderForm()}
                <div className="form-actions">
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
        );
    }
}
export default Flexi;