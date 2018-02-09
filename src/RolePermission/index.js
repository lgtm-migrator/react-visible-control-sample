export const MOCK_USER = {
  name: "Theo Sun",
  age: 46,
  role: ["STAFF"],
  privilege: ["READ"]
}


/**
 * userHaveRole
 * 
 * @param {any} user 
 * @param {string} role
 * 
 * @returns {boolean} 
 */
export const userHaveRole = (user, role) => {
  return user && user.role && user.role.indexOf(role) >= 0
}

/**
 * 
 * @param {any} user 
 * @param {string} privilege
 * 
 * @returns {boolean} 
 */
export const userHavePermission = (user, privilege) => {
  return user && user.privilege && user.privilege.indexOf(privilege) >= 0
}