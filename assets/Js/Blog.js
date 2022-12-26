let myProject = []

function getData(event){
    event.preventDefault()

    let projectName = document.getElementById("input-blog-title").value
    let startDate = document.getElementById("input-blog-startDate").value
    let endDate = document.getElementById("input-blog-endDate").value
    let desc = document.getElementById("input-blog-desc").value
    let image = document.getElementById("input-blog-image").files
    let nodeJsImg = (document.getElementById("input-Node").checked == true)? './assets/icon/nodejs.png' : ""
    let reactJsImg = (document.getElementById("input-React").checked == true)? './assets/icon/reactjs.png' : ""
    let nextJsImg = (document.getElementById("input-Next").checked == true)? './assets/icon/nextjs.png' : ""
    let typeScriptImg = (document.getElementById("input-type").checked == true)? './assets/icon/typescript.png' : ""
    

    image = URL.createObjectURL(image[0])

    let addProject = {
        projectName : projectName,
        startDate: startDate,
        endDate: endDate,
        desc: desc,
        nodeJsImg: nodeJsImg,
        reactJsImg: reactJsImg,
        nextJsImg: nextJsImg,
        typeScriptImg: typeScriptImg,
        image: image
    }

    myProject.push(addProject)

    console.table(myProject)
    showProject()
}

function showProject(){
    document.getElementById('project').innerHTML = ""
    for (let i = 0; i < myProject.length; i++){
        document.getElementById('project').innerHTML += `
        <div class="project_item">
        <div class="project_img">
            <img src="${myProject[i].image}" alt="Avatar profil" id="image"/> 
        </div>
        <div class="project_content">
            <p class="title">
                <a href="blog-detail.html" target="_blank">${myProject[i].projectName}</a>
            </p>
            <p class="duration">Durasi: ${getDuration(myProject[i].startDate, myProject[i].endDate)}</p>
            <p class="desc">${myProject[i].desc}</p>
        <div class="technology">
            <img src="${myProject[i].nodeJsImg}" alt="">
            <img src="${myProject[i].reactJsImg}" alt="">
            <img src="${myProject[i].nextJsImg}" alt="">
            <img src="${myProject[i].typeScriptImg} alt="">
            </div>
            <div class="btn-group">
                <button class="btn-edit">edit</button>
                <button class="btn-delete">delete</button>
            </div>
        </div>                  
    </div>
    `
    }
}

function getDuration(start, end) {
    let Start = new Date(start)
    let End = new Date(end)

    let distance = End - Start

    let yearDistance = Math.floor(distance / (12 * 30 * 24 * 60 * 60 * 1000))
    if (yearDistance != 0) {
        return yearDistance + ' tahun'
    }else {
        let monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * 1000))
        if (monthDistance != 0) {
            return monthDistance + ' bulan'
        } else {
            let weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * 1000))
            if (weekDistance != 0) {
                return weekDistance + ' minggu'
            } else {
                let daysDistance = Math.floor(distance / (24 * 60 * 60 * 1000))
                if (daysDistance != 0) {
                    return daysDistance + ' hari'
                } else {
                    let hoursDistance = Math.floor(distance / (60 * 60 * 1000))
                    if (hoursDistance != 0) {
                        return hoursDistance + ' jam'
                    } else {
                        let minuteDistance = Math.floor(distance / (60 * 1000))
                        if (minuteDistance != 0) {
                            return minuteDistance + ' menit'
                        } else {
                            let secondDistance = Math.floor(distance / 1000)
                            if (secondDistance != 0)
                                return secondDistance + ' detik'
                        }
                    }
                }
            }
        }
    }
}