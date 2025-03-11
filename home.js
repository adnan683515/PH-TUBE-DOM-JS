


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
        
            <button class="btn  hover:bg-[#FF1F3D] hover:text-white  btn-sm">${element.category}</button>
        
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

const LoadVedios = (data) => {

    const parent = document.getElementById('card-container')
    data.forEach(element => {
        console.log(element.authors[0].profile_picture)
        console.log(element)
        const div = document.createElement('div')

        div.innerHTML = `

        <div class="card bg-base-100 w-full">
                        <figure>
                            <img class="rounded-md  h-48 w-full"
                                src="${element.thumbnail}"
                                alt="Shoes" />
                        </figure>
                        <div class="card-body ">
                            <div class="flex -ml-3.5  gap-3">
                                <div class="avatar">
                                    <div class="w-15 rounded-full">
                                        <img src="${element.authors[0].profile_picture}" />
                                    </div>
                                </div>
                                <div>
                            
                                    <h1>${element.title}</h1>
                                    <h3 class="text-[#17171770]">${element.authors[0].profile_name} <span>correct sing</span></h3>
                                    <p class="text-[#17171770]">${element.others.views} views</p>
                                </div>
                            </div>
    
                        </div>
                    </div>
        
        
        `
        parent.appendChild(div)
    })
}