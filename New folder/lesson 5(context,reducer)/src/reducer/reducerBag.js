export let initialObjectBag = {
  bag: [],
};

export function reducerBag(state, action) {
  if (action.type === "ADD TO BAG") {
    let newArr = [...state.bag];

    if (!newArr.some((item) => item.id === action.payload.id)) {
      let newObj = { ...action.payload };
      newObj.count = 1;
      console.log(newObj.price)
      newObj.totalPrice = newObj.count * newObj.price;

      console.log(newObj)
      newArr.push(newObj);
    }

    return { ...state, bag: newArr };
  }
  else if (action.type === "DELETE FROM BAG") {
    const updatedBag = state.bag.filter(
      (item) => item.id !== action.payload
    );
    return { ...state, bag: updatedBag };
  }
  else if (action.type === "INCREMENT") {
    let newArr = [...state.bag];
    let elementIndex = newArr.findIndex((item) => item.id === action.payload);

    newArr[elementIndex].count += 1;
    newArr[elementIndex].totalPrice = newArr[elementIndex].count * newArr[elementIndex].price;
    return { ...state, bag: newArr };
  }
  else if (action.type === "DECREMENT") {
    let newArr = [...state.bag];
    let elementIndex = newArr.findIndex((item) => item.id === action.payload);
    newArr[elementIndex].count -= 1;
    if (newArr[elementIndex].count < 1) {
      newArr.splice(elementIndex, 1);
    } else {
      newArr[elementIndex].totalPrice = newArr[elementIndex].count * newArr[elementIndex].price;
    }
    return { ...state, bag: newArr };
  }

  return state;
}
