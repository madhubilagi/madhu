import React,{Component} from 'react'

class Myform extends Component{
    state = {
        fname:'',
        lname:'',
        age:19,
        gender:'M',
        singing:false,
        painting:false,
        dancing:false,
        onSubmitted:false,
    }
   
    handleChange =(e) =>{
        if( e.target.type ==='checkbox'){
           this.setState({[e.target.name]:e.target.checked})
          
        }else{
            this.setState({[e.target.name]:e.target.value})
        }     
    }
    handleSubmit =() =>{
        this.setState({onSubmitted:true})
    }
    render(){
        return(
            <>
            
            {!this.state.onSubmitted && (<div className='my-5'>
                <h1 className='mb-4'>MyForm</h1>
           
                <lable>First Name &nbsp;</lable>
                <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange} /><br/><br/>
                <lable>Last Name &nbsp;</lable>
                <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange} /><br/><br/>
                <lable>Age &nbsp;</lable>
                <input type="number" name="age" value={this.state.age} onChange={this.handleChange} /> <br/><br/>
                <label><b>Gender&nbsp;&nbsp;</b></label> 
                <input type="radio"name="gender" value="Male" onChange={this.handleChange}/>
                <label>&nbsp; Male &nbsp;</label>
                <input type="radio"name="gender" value="Female" onChange={this.handleChange} />
                <label>&nbsp; Female &nbsp;</label><br/><br/>
                <lable><b>Hobbies</b></lable><br/><br/>
                <input type="checkbox"  name="singing" checked={this.state.singing} onChange={this.handleChange}/>&nbsp;Singing &nbsp;&nbsp; 
                <input type="checkbox"  name="painting" checked={this.state.painting} onChange={this.handleChange}/>&nbsp;Painting &nbsp;&nbsp;
                <input type="checkbox"  name="dancing" checked={this.state.dancing} onChange={this.handleChange}/>&nbsp;Dancing &nbsp;&nbsp;
                <br/>
                <button className="btn btn-primary my-4" onClick={this.handleSubmit}>Submit</button></div>
            )}
                {this.state.onSubmitted &&( <div className='my-5'>
                    <h1>My Form Submitted Details</h1>
                    <h2>My Name is :{this.state.fname} {this.state.lname} </h2>
                    <h3>My Age is :{this.state.age}</h3>
                    <h2>Gender is:{this.state.gender}</h2>
                    <h2>Hobbies are:{this.state.singing && 'Singing'} {this.state.painting && 'Painting'} {this.state.dancing && 'Dancing'}</h2>
                </div>
            )}
            </>
        )
    }
}

export default Myform;