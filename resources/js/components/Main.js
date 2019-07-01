import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Main extends Component {
    constructor() {   
        super();
        //Initialize the state in the constructor
        this.state = {
            products: [],
        }
      }
      
      componentDidMount() {
    /* fetch API in action */
    fetch('api/products')
        .then(response => {
            return response.json();
        })
        .then(products => {
            //Fetched product is stored in the state
            this.setState({ products });
        });
  }
  
  renderProducts() {
    return this.state.products.map(product => {
        return (
            /* When using list you need to specify a key
             * attribute that is unique for each list item
            */
            <li key={product.id} >
                { product.title } 
            </li>      
        );
    })
  }
  render() {
   /* Some css code has been removed for brevity */
    return (
        <div>
<h3>All Products</h3>
              <ul>
                { this.renderProducts() }
              </ul> 
            </div> 
       
    );
  }
};

export default Main;
    
if (document.getElementById('root')) {
    ReactDom.render(<Main />, document.getElementById('root'));
}