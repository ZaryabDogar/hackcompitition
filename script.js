let url="https://kontests.net/api/v1/all"
let response=fetch(url)
response.then(data=>data.json()).then((data)=>{
    console.log(data)
    ihtml=""
    for (const key in data) {
            const element = data[key];
            ihtml+=`
            

            <div class="card "  style="width: 17rem;margin:25px 20px;display: flex;justify-content: center;align-items: center;">
                <img src="/img/${key}.jpg" class="card-img-top" alt="..." style=" size:border:box;width:100%; overflow:hidden; ">
                <div class="card-body">
                    <h3 class="card-title">${data[key].name} </h3>
                    <p class="">start Date: ${new Date (data[key].start_time).toDateString()}</p>
                    <p class="">start Time: ${new Date (data[key].start_time).toLocaleTimeString()}</p>
                    <p class="">End Date: ${new Date (data[key].end_time).toDateString()}</p>
                    <p class="">End Time: ${new Date (data[key].end_time).toLocaleTimeString()}</p>
                    <p class="" style="color:rgba(236, 10, 10);">Starts In 24 hours: ${data[key].in_24_hours}</p>
                    <p class="">Platform is <span style="font-weight:bold;color:yellow;">${data[key].site}</span> and status is <span style="font-weight:bold; color:blue;">${data[key].status} </p>
                    
                    <a href="${data[key].url}" class="btn btn-primary" target="_blank">Visit Here</a>
                </div>
            </div>
        `
        
    
        cardcontainer.innerHTML=ihtml
        }
    })
    
