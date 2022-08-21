window.addEventListener('load', function () {

    const form = document.getElementById("formulario");
    const titleName  = document.querySelector(".error-name")
    const email = document.querySelector('#email');
    const name = document.querySelector("#nombre");
    const titleMail = document.querySelector(".error-email")
    const dropArea = document.querySelector(".dragArea");
    const dragText = dropArea.querySelector("h4");
    const button = dropArea.querySelector("button");
    const input = dropArea.querySelector("#input-file");
    let files;

console.log("toy aca")
    name.addEventListener("keyup", (e)=>{ 
     
        name.addEventListener("keyup", function(e) { 
            if(name.value.length > 1) { 

              name.style.border = "1px solid red"
              titleName.innerHTML = "El nombre debe contener más caracteres"

            }
            if(name.value.length > 5) {

                name.style.border = "1px solid green"
                titleName.innerHTML = " "
            }

            })

    })








    email.addEventListener("keyup", (e)=>{ 
     
        email.addEventListener("keyup", function(e) { 
            if(email.value.length > 1) { 

              email.style.border = "1px solid red"
              titleMail.innerHTML = "El email debe contener más caracteres"
            }
            if(email.value.length > 5) {

                email.style.border = "1px solid green"
                titleMail.innerHTML = " "
            }
            

            })

    })



    button.addEventListener("click", (e) => {
         e.preventDefault();
        input.click();
        
    });

    input.addEventListener("change", (e) => {
    

        dropArea.classList.add("active");
        showFiles(files);
        dropArea.classList.remove("active")
    });


    dropArea.addEventListener("dragover", (e) => {

        e.preventDefault();
        dropArea.classList.add("active");
        dragText.textContent = "suelta para cargar los archivos"

    });

    dropArea.addEventListener("dragleave", (e) => {
        e.preventDefault();
        dropArea.classList.remove("active")
        dragText.textContent = "arrastre y suelta imagenes o haz click "
    })

    dropArea.addEventListener("drop", (e) => {
        e.preventDefault();
        files = e.dataTransfer.files;
        showFiles(files);
        dropArea.classList.remove("active")
        dragText.textContent = "arrastre y suelta imagenes o haz click"

    })

    function showFiles(files) {
        if (files.length == undefined) {
            processFile(files)
        } else {
            for (let file of files) {
                processFile(file)
            }
        }
    }

    function processFile(file) {

        const docType = file.type;
        const validExtensions = ["image/jpeg", "image/jpg", "image/png"];

        if (validExtensions.includes(docType)) {

            const fileReader = new FileReader();
            const id = `file-${Math.random().toString(32).substring(7)}`

            fileReader.addEventListener("load", (e) => {

                const fileUrl = fileReader.result;
                const image =
                    `    <div id="${id}" class="file-container">
       
             <img src="${fileUrl}" alt="${file.name}" height="50px">
             <div class="status"> 
              <span> ${file.name}</span>
              </div>
       
       </div>`
                const html = document.querySelector("#preview").innerHTML
                document.querySelector("#preview").innerHTML = image + html

            });

            fileReader.readAsDataURL(file);
            uploadFile(file, id);


        } else { alert("no estás ingresando una imagen válida") }

    }
  

    
   /*async function uploadFile (file, id) {
        
        const formData = new FormData()
          formData.append("file", file); 


          try {
            const response = await fetch("http://localhost:3000/upload", {method: "POST",
                                                                            body: formData,});

        const responseText = await response.text();
        console.log(responseText)

         document.querySelector(`#${id} .status-text`).innerHTML = `<span class="succes"> Gracias por enviarnos tu arte</span>`
          } catch (error) {  document.querySelector(`#${id} .status-text`).innerHTML = `<span class="failure">:( mala suerte</span>`

          }
       }

*/




    })

