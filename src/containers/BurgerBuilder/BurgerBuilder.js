import React, { Component } from 'react'
<<<<<<< HEAD
import Auxilary from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}


class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },

    totalPrice: 4,
    purchasable: false,
    purchasing:false
  }

  purchaseHandler=()=>{
    this.setState({purchasing:true})
  }


  purchaseCancelHandler=()=>{
    this.setState({purchasing:false});
  }


  purchasedContinued=()=>{
    alert('You Continue!')
  }

  updatePurchaseState = (ingredients) => {

    const sum = Object.keys(ingredients).map((ingredientsKey) => {
      return ingredients[ingredientsKey]

    }).reduce((sum, element) => {
      return sum + element
    }, 0);

    this.setState({ purchasable: sum > 0 });

  }


  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = priceAddition + oldPrice;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients)

  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) {
      return
    }

    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients)
  }

  render() {

    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
=======
 import Auxilary from '../../hoc/Auxilary'
 import Burger from '../../components/Burger/Burger'
 import BuildControls from '../../components/Burger/BuildControls/BuildControls'

 class BurgerBuilder extends Component{
    
   state={
     ingredients:{
       salad:2,
       bacon:0,
       cheese:0,
       meat:0
     }
   }


    render(){
        return(
          <Auxilary> 
                <Burger  ingredients={this.state.ingredients}/>
                <BuildControls/>
          </Auxilary>
          
        );
>>>>>>> fe359a69c58d1fb40e0a364fb9b3e13da9e9e207
    }

    return (
      <Auxilary>
        <Burger ingredients={this.state.ingredients} />

        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
            purchasedCancelled={this.purchaseCancelHandler}
            purchasedContinued={this.purchasedContinued}
          
          />  
        </Modal>

        <BuildControls
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Auxilary>

    );
  }
}

export default BurgerBuilder;
