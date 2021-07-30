import {TextField,Button} from '@material-ui/core'
import React,{Component} from 'react'


class ProductCreate extends Component{

    constructor(){
        super()

        this.state={

            name:"",
            type:"",
            brand:"",
            price:"",
        
        }
    }

    updateState(){
        

        fetch("http://localhost:3000/product",{

            method:"POST",

            headers:{
                'Content-type': 'application/json'
            },


            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((a)=>{
                alert("Product Created Successfully")

            })
        })
    }

    render(){
        return(

            <div>
                <h1>Create New Product</h1>

                <TextField label="Enter Product Name" variant="outlined" color="primary" onChange={(e)=>{this.setState({name:e.target.value})}}></TextField>
                <TextField label="Type" variant="outlined" color="primary" onChange={(e)=>{this.setState({type:e.target.value})}}></TextField>
                <TextField label="Brand" variant="outlined" color="primary" onChange={(e)=>{this.setState({brand:e.target.value})}}></TextField>
                <TextField label="Price" variant="outlined" color="primary" onChange={(e)=>{this.setState({price:e.target.value})}}></TextField>
                <TextField label="Type" variant="outlined" color="primary" onChange={(e)=>{this.setState({type:e.target.value})}}></TextField>
                <Button variant="contained" color="primary" onClick={()=>{this.updateState()}}>Submit</Button> 
               
            </div>
        )
    }
    

}
export default ProductCreate;