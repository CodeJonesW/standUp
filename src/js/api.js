

const helpers = {
    deleteStandUp: async (e) => {
        // console.log(e.currentTarget)
        return fetch(`https://fast-reaches-85589.herokuapp.com/api/standUp/${e.currentTarget.id}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem("token")
            }
          })
    },
    findAllUserStandUps: async (userId) => {
         return fetch(`https://fast-reaches-85589.herokuapp.com/api/standUp/${userId}`, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem("token")
            }
          })
    },
    refreshUserToken: async (token) => {
        return fetch(`https://fast-reaches-85589.herokuapp.com/api/user/refresh`, {
           method: "GET",
           headers: {
             'Content-Type': 'application/json',
             'Authorization': token
           }
         })
   },
   updateStandUpById: async (standUpId) => {
    return fetch(`https://fast-reaches-85589.herokuapp.com/api/standUp/${standUpId}`, {
       method: "POST",
       headers: {
         'Content-Type': 'application/json',
         'Authorization': localStorage.getItem("token")
       },
     })
},
}


export default helpers;