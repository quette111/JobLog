/*//gaining access to query string from form input
const params = new URLSearchParams(window.location.search) 

function sendData(){
//defining array of object, setting 
    const info = [
        {
            "Name": `${params.get("name")}`,
            "Job": `${params.get("job")}`,
            "Company": `${params.get("company")}`
        }
    ];

    document.getElementById('outputCard').innerHTML += info.map((item) =>    
  
    `
        <div id="innerOutput">
            <h2 id="nameOutput">${item.Name}</h2>
            <h2 id="jobOutput">${item.Job}</h2>
            <h2 id="companyOutput">${item.Company}</h2>
            <img id="companyImage">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
        </div>`).join("");

        document.getElementById('name').value = ''
        document.getElementById('jobTitle').value = ''
        document.getElementById('company').value = ''
    
}
document.querySelector("form").addEventListener("submit", 

sendData())




//gaining access to query string from form input
//const params = new URLSearchParams(window.location.search) 

function sendData(){
    //defining array of object, setting 
        const info = [
            {
                "Name": `${document.getElementById('name').value}`,
                "Job": `${document.getElementById('jobTitle').value}`,
                "Company": `${document.getElementById('company').value}`
            }
        ];
    
        document.getElementById('outputCard').innerHTML += info.map((item) =>    
      
        `
            <div id="innerOutput">
                <h2 id="nameOutput">${item.Name}</h2>
                <h2 id="jobOutput">${item.Job}</h2>
                <h2 id="companyOutput">${item.Company}</h2>
                <img id="companyImage">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </div>`).join("");
    
            document.getElementById('name').value = ''
            document.getElementById('jobTitle').value = ''
            document.getElementById('company').value = ''
        
    }
    document.querySelector("form").addEventListener("submit", 
    sendData())
    








    document.querySelector(".submit").addEventListener(
        "click",
        () => {
          console.log("made it thru first");
          setTimeout(() => {
            console.log("made it thru 2");
      
            const deleteButton = document.querySelectorAll(".delete")[0];
            const deleteButtonArray = Array.isArray(deleteButton) ? deleteButton : [deleteButton];
              
            deleteButtonArray.forEach(function(i) {
              console.log("made it thru 3");
              console.log(deleteButtonArray);
         
      console.log(deleteButtonArray[0])
      console.log(deleteButtonArray)
              
              i.addEventListener("click", e => {
                console.log("made it thru 4");
                e.currentTarget.parentNode.parentNode.parentNode.remove();
              });
            }, 500);
          });
        },
        true
      );











      //////??
      document.addEventListener("click", ()=> {

        if(!sendData()){
            return;
        }
            const deleteButton = document.querySelectorAll(".delete")[0];
              console.log(deleteButton)
            deleteButton.forEach(i => {
              console.log("made it thru 3");
        
        console.log(deleteButtonArray)
              
              i.addEventListener("click", e => {
                console.log("made it thru 4");
                e.currentTarget.parentNode.parentNode.parentNode.parentNode.remove();
              })
          })
        */

          document.addEventListener('click', () => {
            console.log('minimize click')
            const minimize = document.getElementById('exit');
            minimize.forEach(i => {
              i.addEventListener("click", e => {
                e.stopPropagation()
                document.body.style.cssText = 'background-color: rgba(0, 0, 0, 0);';
          
                e.currentTarget.parentNode.style.cssText = 'scale: 1;opacity: 1;z-index:0'
              })
            })
          })
          