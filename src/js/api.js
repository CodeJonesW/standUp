

const helpers = {
    deleteStandUp: (e) => {
        console.log(e.target)
        fetch(`http://localhost:3000/api/standUp/${e.target.id}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
            }
          })
    }
}


export default helpers;