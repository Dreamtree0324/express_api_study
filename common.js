function loadUser(){
    return fetch("http://localhost:3030/api/users/user?user_id=1").then(function(response){
        return response.json();
    });
};

async function fetchUser(){
    let user = await loadUser();
    console.log(user.user[0].id);
}

fetchUser();