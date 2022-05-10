import {users} from "./users.js";

export function display_users(){
    users.forEach(e => {
    
        let status_color;
        if(e.status == "En validation") status_color = "pending";
        if(e.status == "Validé") status_color = "valid";
        if(e.status == "Rejeté") status_color = "rejected";
    
        document.getElementById('users').innerHTML += `
        <tr>
            <td>${e.id}</td>
            <td>${e.createdDate.substring(0, 10)}</td>
            <td><p class="status-bg ${status_color}">${e.status}</p></td>
            <td>${e.firstName}</td>
            <td>${e.lastName}</td>
            <td>${e.userName}</td>
            <td>${e.registrationNumber}</td>
            <td>
            <img class="clickable" src="https://test.searchcept.com/img/trash.svg" alt="" style="width: 20px;" onclick="showDeleteModal(${e.id})">
            </td>
        </tr>
        `;
    });
}