import { services } from "../../public/data/data";

export let initialObjectServices = {
  services: services,
};

export function reducerServices(state, action) {
  if (action.type === "ADD TO ARRAY") {
    let newArr = [...state.services]
    newArr.push(action.payload)
    
    return { ...state, services: newArr };
  } else if (action.type === "DELETE FROM ARRAY") {
    const updatedServices = state.services.filter(
      (item) => item.id !== action.payload
    );
    return { ...state, services: updatedServices };
  } else if (action.type === "EDIT SERVICE") {
    let newArr = [...state.services];
    let elementIndex = newArr.findIndex((item) => item.id === action.data.id);

    newArr[elementIndex].serviceName = action.data.formData.serviceName;
    newArr[elementIndex].serviceDescription =
      action.data.formData.serviceDescription;
    return { ...state, services: newArr };
  }

  return state;
}
