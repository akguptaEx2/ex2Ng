const port:number = 3000;
const path:string = `http://localhost:${port}`;
export const apiEndpoints = {
    apiUsersUrl: `${path}/api/users`,
    apiRolesUrl:`${path}/api/roles`
};