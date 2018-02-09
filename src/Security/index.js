import { createContext } from "react-visible-control";
import { userHaveRole, userHavePermission } from "../RolePermission/index";

const {  context, createControl } = createContext("SecurityContext")

export const NeedRoleManager = createControl(user => userHaveRole(user, "MANAGER"));
export const NeedRoleStaff = createControl(user => userHaveRole(user, "STAFF"))
export const NeedPrevilegeRead = createControl(user => userHavePermission(user, "READ"))
export const NeedPrevilegeWrite = createControl(user => userHavePermission(user, "WRITE"))
export const SecurityContext = context;