


function loadCetagories() {

    try {
        fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
            .then((res) => res.json())
            .then((data) => displayCetagories(data.categories))
    }
    catch {
        alert('Display Cetagory not found')
    }
}
loadCetagories()

function displayCetagories(data) {

    const parent = document.getElementById('button-container')

    data.forEach(element => {

        const div = document.createElement('div')
        div.innerHTML = `
        
            <button onclick=cetagoryWiseVedios('${element.category_id}') class="btn  hover:bg-[#FF1F3D] hover:text-white  btn-sm">${element.category}</button>
        
        `
        parent.appendChild(div)
    });
}


function loadVidos() {
    try {
        fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
            .then((res) => res.json())
            .then((data) => LoadVedios(data.videos))
    }
    catch {
        alert('load vedio not found')
    }
}

loadVidos()

// vedio details function


function vedioDetalis(id) {

    try {
        fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${id}`)
            .then((res) => res.json())
            .then((data) => {
    
                const parent = document.getElementById('modal-vedio-card')
                parent.innerHTML = `
            <div class="card bg-base-100 ">
                <figure>
                    <img
                    src="${data.video.thumbnail}"
                    alt="Shoes" />
                </figure>
                <div class="my-1 space-y-1">
                    <h2 class="card-title">${data.video.title}</h2>
                    <div class="flex justify-between">
                        <h3> 
                        <span>
                        
                        <div class="avatar mr-4">
                            <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                <img src="${data.video.authors[0].profile_picture}" />
                            </div>  
                        </div> 
                        </span> ${data.video.authors[0].profile_name}  views:${data.video.others.views}
                        
                    
                        
                        </h3>
                    
                
                    </div>
                    <p class="text-gray-500">Description: ${data.video.description}</p>
                
                </div>
                </div>
            
            
            
            `
            })
    }
    catch {
        alert("vedio details fecthing error")
    }

}

const LoadVedios = (data) => {


    if (data.length === 0) {

        document.getElementById("notfound").classList.remove('hidden')
        document.getElementById("notfound").classList.add('block')
        return;
    }
    document.getElementById("notfound").classList.remove('block')
    document.getElementById("notfound").classList.add('hidden')



    const parent = document.getElementById('card-container')
    data.forEach(element => {
        const vari = element.authors[0].verified;
        try {
            vari === true && vari !== "" ? '<i class="fa-solid fa-square-check fa-xl" style="color: #74C0FC;"></i>' : "";

        }
        catch {
            console.log("varified line error")
        }
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card bg-base-100 w-full">
                        <figure class="relative">
                            <img class="rounded-md  h-48 w-full"
                                src="${element.thumbnail}"
                                alt="Shoes" />
                                <i onclick="details_modal.showModal(),vedioDetalis('${element.video_id}')" class="fa-solid absolute cursor-pointer fa-play fa-xl" style="color: #ffffff;"></i>
                                <p class="absolute text-white bottom-0 right-2">3 hours ago</p>
                        </figure>
                        <div class="card-body ">
                            <div class="flex -ml-3.5 -mt-1  gap-3">
                                <div class="avatar">
                                    <div class="w-15 rounded-full">
                                        <img src="${element.authors[0].profile_picture}" />
                                    </div>
                                </div>
                                <div>
                            
                                    <h1>${element.title}</h1>
                                    <h3 class="text-[#17171770]">${element.authors[0].profile_name} <span> ${vari === true && vari !== "" ? '<i class="fa-solid fa-square-check fa-xl" style="color: #74C0FC;"></i>' : ""} </span></h3>
                                    <p class="text-[#17171770]">${element.others.views} views   </p>
                                
                                </div>
                            </div>
                            
    
                        </div>
                    </div>
        
        
        `
        parent.appendChild(div)
    })
}






const cetagoryWiseVedios = (id) => {
    try {
        fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
            .then((res) => res.json())
            .then((data) => {
                document.getElementById('card-container').innerHTML = ""
                LoadVedios(data.category)
            })
    }
    catch {
        alert('Cetagories wise vedio not found')
    }
}

document.getElementById('search-input').addEventListener('keyup', (event) => {

    console.log(event.target.value)

    try {
        fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${event.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                document.getElementById('card-container').innerHTML = "",
                    LoadVedios(data.videos)
            }

            )
    }
    catch {
        alert("Input field don't take vedios ")
    }

})