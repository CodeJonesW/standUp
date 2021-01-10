

const helpers = {
    deleteStandUp: async (e) => {
        // console.log(e.currentTarget)
        return fetch(`http://localhost:3000/api/standUp/${e.currentTarget.id}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem("token")
            }
          })
    },
    findAllUserStandUps: async (userId) => {
         return fetch(`http://localhost:3000/api/standUp/${userId}`, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem("token")
            }
          })
    },
}


export default helpers;