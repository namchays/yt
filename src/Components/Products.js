import React, { Component } from 'react'
import ProductItems from './ProductItems';
import {connect} from 'react-redux';

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
 
    render() {
        //console.log(this.props.todos);
        
        var productss = this.props.todos;
        //console.log(this.props.Button[0])
    
        var a=this.props.Button;
        if(a===0){
            productss = this.props.todos
        }
        if(a===1){
            
            productss = productss.filter((x) => {
                return x.Price <= 5000000;
            }
            )
        }
        if(a===2){
            
            productss = productss.filter((x) => {
                return x.Price >= 5000000 && x.Price<=8000000;
            }
            )
        }
        if(a===3){
            
            productss = productss.filter((x) => {
                return x.Price >= 8000000;
            }
            )
        }
        return (
            <div>
                {
                    productss.map((value, index) => {
                        return (<ProductItems key={index} item={value} addToCart={this.props.addToCart} />)
                    })
                }
            </div>
        )
    
            
                }
}
const mapStateToProps = (state)=>{
    return {
        todos : state.task
    }

}

export default connect(mapStateToProps,null) (Products)
