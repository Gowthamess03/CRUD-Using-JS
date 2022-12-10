var selectedRow=null;

    function onFormSubmit(){
    if(vali()){
    var formData=readFormData();
    if(selectedRow==null)
    insertNewRecord(formData);
    else
    updateRecord(formData);
    resetForm();
    }
}

    function readFormData()
    {
        var formData={};
        formData["name"]=document.getElementById("name").value;
        formData["age"]=document.getElementById("age").value;
        formData["phno"]=document.getElementById("phno").value;
        return formData;
    }

    function insertNewRecord(data){
        var table=document.getElementById("List").getElementsByTagName('tbody')[0];
        var newRow=table.insertRow(table.length);
        cell1=newRow.insertCell(0);
        cell1.innerHTML=data.name;
        cell2=newRow.insertCell(1);
        cell2.innerHTML=data.age;
        cell3=newRow.insertCell(2);
        cell3.innerHTML=data.phno;
        cell4=newRow.insertCell(3);
        cell4.innerHTML=`<button onClick="onEdit(this)">Update</button>
                        <button onClick="onDelete(this)">Delete</button>`;
                        
    }
    function resetForm() {
            document.getElementById("name").value="";
            document.getElementById("age").value="";
            document.getElementById("phno").value="";
            selectedRow=null;
        }
    function onEdit(td) {
   
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value=selectedRow.cells[0].innerHTML;
    document.getElementById("age").value=selectedRow.cells[1].innerHTML;
    document.getElementById("phno").value=selectedRow.cells[2].innerHTML;
    
}
    function updateRecord(formData) {
        
        selectedRow.cells[0].innerHTML= formData.name;
        selectedRow.cells[1].innerHTML= formData.age;
        selectedRow.cells[2].innerHTML= formData.phno;
        
    }

    function onDelete(td) {
        if(confirm('Sure You Want To Delete?')) {
        row=td.parentElement.parentElement;
        document.getElementById("List").deleteRow(row.rowIndex);
        resetForm();
        }
    }

    function vali()
    {
        if(document.getElementById("name").value==" "||document.getElementById("name").value.length<=2)
        {
            alert("Give Proper Name")
            return false;
        }
        else if(document.getElementById("age").value>=100||document.getElementById("age").value<=0)
        {
            alert("Invalid Age")
            return false;
        }
        else if(document.getElementById("phno").value.length!=10)
        {
            alert("Provide Valid Phone Number")
            return false;
        }
        return true;
    }