
// Add Feature
export const addFeature = (feature) => {
  return {type: 'ADD_FEATURE', payload: feature}
}

//Removes Feature
export const removeFeature = (feature) => {
  return {type: 'REMOVE_FEATURE', payload: feature}
}
