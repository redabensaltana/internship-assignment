import {users} from "./users.js";
import {display_users} from "./getAll.js";

display_users();

//?__________________display add user modal______________________
document.getElementById('display-modal-btn').addEventListener('click',() => {
    document.getElementById('modal-bg').style.display = 'block';
})

//?__________________hide add user modal______________________
document.getElementById('hide-modal-btn').addEventListener('click',() => {
    document.getElementById('modal-bg').style.display = 'none';
})


//?__________________add new user______________________
document.getElementById('submit-new-user').addEventListener('click',() => {

    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let status = document.getElementById('status').value
    let username = document.getElementById('username').value
    let creationdate = document.getElementById('creationdate').value
    let matricule = document.getElementById('matricule').value
    let id = Date.now();

    document.getElementById('users').innerHTML = "";

    users.push({
        id: id,
        createdDate: creationdate,
        status: status,
        firstName: fname,
        lastName: lname,
        userName: username,
        registrationNumber: matricule,
    })

    document.getElementById('modal-bg').style.display = 'none';
    
    display_users();

})  

//?__________________delete a user______________________
document.getElementById('yes').addEventListener('click',() => {
    document.getElementById('users').innerHTML = "";
    let id = sessionStorage.getItem('id_to_delete');

    users.forEach((e,index)=>{
        if(e.id == id){
            users.splice(index, 1);
        }
    })    
    
    display_users();
    document.getElementById('modal-delete-bg').style.display = 'none';
})