export function setCurrentUser (user) {
//this object is an action
  return {
    //what the action is representing/setting
    type:"SET_CURRENT_USER",
    value:user
  }
}
export function setSearchText (text) {
  return {
    type:"SET_SEARCH_TEXT",
    value: text
  }
}
