

const helpers = {
    deleteStandUp: async (e) => {
        // console.log(e.currentTarget)
        fetch(`http://localhost:3000/api/standUp/${e.currentTarget.id}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
            }
          })
    },
    findAllUserStandUps: async (userId) => {
         return fetch(`http://localhost:3000/api/standUp/${userId}`, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
            }
          })
    }
}


export default helpers;