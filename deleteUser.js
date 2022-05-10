function showDeleteModal(id){
    document.getElementById('modal-delete-bg').style.display = 'block';
    sessionStorage.setItem('id_to_delete',id);
}

function hideDeleteModal(){
    document.getElementById('modal-delete-bg').style.display = 'none';
}