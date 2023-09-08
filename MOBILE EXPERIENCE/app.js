// first digital clock

function samay() {
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()

    if (hours > 12) {
        hours = hours - 12
    }
    if (hours == 0) {
        hours = 12
    }

    let TIMES = document.getElementById('time')
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (minutes == 0) {
        minutes = "00"
    }
    TIMES.innerHTML = hours + ":" + minutes
}

setInterval(samay, 1000)

// second digital clock

function samay1() {
    let TIME = new Date()
    let HOUR = TIME.getHours()
    let MINUTE = TIME.getMinutes()

    let block1 = document.getElementById('actualtime')
    let block2 = document.getElementById('actualtime-1')

    if (HOUR > 12) {
        HOUR = HOUR - 12
    }
    if (HOUR == 0) {
        HOUR = 12
    }
    if (MINUTE < 10) {
        MINUTE = "0" + MINUTE
    }
    if (MINUTE == 0) {
        MINUTE = "00"
    }
    if (HOUR == 1) {
        block1.style.color = "red"
    }
    block1.innerHTML = HOUR
    block2.innerHTML = MINUTE
}
setInterval(samay1, 1000)

// --------------DATE--------------------

let newtime = new Date()
let MONTH = newtime.getMonth()
let DAY = newtime.getDay()
let DATE = newtime.getDate()

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let DATES1 = document.getElementById('date')

DATES1.innerHTML = days[DAY] + ", " + DATE + " " + month[MONTH]



/* ============================= App-Drawer =============================== */


// function to open the appdrawer----------------->

let openappdrawer = document.querySelector('.app-drawer')
let homeapps = document.querySelector('.homescreen-apps')


function opendrawer() {
    openappdrawer.style.height = "656.5px"
    openappdrawer.style.bottom = "0px"
    homeapps.style.visibility = "hidden"
}


// function to close the appdrawer----------------->

function drawercomeback() {
    openappdrawer.style.height = "0px"
    openappdrawer.style.bottom = "0px"
    homeapps.style.visibility = ""
}



// ======================== notification panel ==========================


// ======================== notification date ==========================

let newtime1 = new Date()
let MONTH1 = newtime1.getMonth()
let DAY1 = newtime1.getDay()
let DATE1 = newtime1.getDate()

let days1 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let month1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

let DATES2 = document.getElementById('dates2')

DATES2.innerHTML = days1[DAY1] + ", " + month1[MONTH1] + " " + DATE1


//============== full notification panel date and time ================

// --------------TIME--------------------

function samay2() {
    let TIME1 = new Date()
    let HOUR1 = TIME1.getHours()
    let MINUTE1 = TIME1.getMinutes()

    let section1 = document.querySelector('.noti-hours')
    let section2 = document.querySelector('.noti-minutes')

    if (HOUR1 > 12) {
        HOUR1 = HOUR1 - 12
    }
    if (HOUR1 == 0) {
        HOUR1 = 12
    }
    if (MINUTE1 < 10) {
        MINUTE1 = "0" + MINUTE1
    }
    if (MINUTE1 == 0) {
        MINUTE1 = "00"
    }
    if (HOUR1 == 1) {
        section1.style.color = "red"
    }
    section1.innerHTML = HOUR1
    section2.innerHTML = MINUTE1
}
setInterval(samay2, 1000)

// --------------DATE--------------------

let newtime2 = new Date()
let MONTH12 = newtime2.getMonth()
let DAY12 = newtime2.getDay()
let DATE12 = newtime2.getDate()

let days12 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let month12 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let DATES22 = document.querySelector('.noti-date')

DATES22.innerHTML = days12[DAY12] + ", " + month12[MONTH12] + " " + DATE12


// =============== function to call half notification down =================


let notification_panel = document.querySelector('.notification-container')
let homescreen_1 = document.querySelector('.home-screen')

function half_notification_down() {
    notification_panel.style.height = "167px"
    homescreen_1.style.opacity = "0.5"
}

// =============== function to call full notification panel down =================


let half_noti_block = document.querySelector('.half-noti-block')
let notification_container_full = document.querySelector('.notification-container-full')

function full_notify_pane() {
    notification_panel.style.height = "389px"
    half_noti_block.style.display = "none"
    notification_container_full.style.display = "block"
}


// =============== function to return notification panel =================

function close_notification_panel() {
    notification_panel.style.height = "0px"
    half_noti_block.style.display = "block"
    notification_container_full.style.display = "none"
    homescreen_1.style.opacity = "1"
}


// =============== function to change half notification icon color =================


let noti_buttons = document.querySelectorAll('.noti-buttons')

noti_buttons.forEach(function (obj) {
    obj.addEventListener('click', changecolor)
})

function changecolor() {
    if (this.classList.contains('color-change')) {
        this.classList.remove('color-change')
    }
    else {
        this.classList.add('color-change')
    }
}


// =============== function to change full notification icon color =================

let noti_full_buttons = document.querySelectorAll('.full-noti-icon-each')

noti_full_buttons.forEach(function (obj1) {
    obj1.addEventListener('click', changecolor1)
})

function changecolor1() {
    if (this.classList.contains('color-change')) {
        this.classList.remove('color-change')
    }
    else {
        this.classList.add('color-change')
    }
}


// =============== function to change to dark mode ===================

// let darkmode = document.getElementById('dark-mode')
// let notification_container = document.querySelector('.notification-container')
// let noti_container_full = document.querySelector('.notification-container-full')

// darkmode.onclick = function () {
//     change2dark()
// }

// function change2dark(){
//     notification_container.style.background = "#27272a"
//     noti_container_full.style.background = "#27272a"
//     homescreen_1.style.opacity = "0.18"
// }



// =============== code to control the brightness ==================

// =-=-=-=-=-=-=-=-= half notification script =-=-=-=-=-=-=-=-=-=

let slider = document.querySelector('.slider')
let home2 = document.querySelector('.screen1')
let home3 = document.querySelector('.screen')

slider.addEventListener("change", () => {
    let val = slider.value / 10
    val += 3
    home2.style.filter = `opacity(${val / 10})`
    home3.style.filter = `opacity(${val / 10})`
})


// =-=-=-=-=-=-=-=-= full notification script =-=-=-=-=-=-=-=-=-=

let slider12 = document.querySelector('.slider1')
let home22 = document.querySelector('.screen2')
let home32 = document.querySelector('.screen3')

slider12.addEventListener("change", () => {
    let val1 = slider12.value / 10
    val1 += 3
    home22.style.filter = `opacity(${val1 / 10})`
    home32.style.filter = `opacity(${val1 / 10})`
})



// =============== to change the height of photos section ==================


let imageSection = document.querySelector('.images')
let photosLogo = document.querySelector('.photos-logo')
let imageSection1 = document.querySelector('.images-1')
let collectionsLogo = document.querySelector('.collections-logo')
let contentSection = document.querySelector('.contentsInside')
let exploreLogo = document.querySelector('.explore-logo')
let imageSec = document.querySelectorAll('.commonScroll')

imageSec.forEach(function (object) {
    object.addEventListener('scroll', changeheight)
})

function changeheight() {
    photosLogo.style.padding = "10px 15px 15px"
    photosLogo.style.fontSize = "22px"
    let delayInHeight = setTimeout(heightIncrease, 500)
    collectionsLogo.style.padding = "10px 15px 15px"
    collectionsLogo.style.fontSize = "22px"
    let delayInHeight2 = setTimeout(heightIncrease2, 200)
    exploreLogo.style.padding = "10px 15px 15px"
    exploreLogo.style.fontSize = "22px"
    let delayInHeight3 = setTimeout(heightIncrease3, 200)
}

function heightIncrease() {
    imageSection.style.height = "530px"
}
function heightIncrease2() {
    imageSection1.style.height = "525px"
}
function heightIncrease3() {
    contentSection.style.height = "500px"
}

// ------------------ to reset to original position --------------------

function resetTheHeight() {
    photosLogo.style.padding = "15px 15px 130px"
    photosLogo.style.fontSize = "40px"
    imageSection.style.height = "400px"
    collectionsLogo.style.padding = "15px 15px 130px"
    collectionsLogo.style.fontSize = "40px"
    imageSection1.style.height = "400px"
    exploreLogo.style.padding = "15px 15px 130px"
    exploreLogo.style.fontSize = "40px"
    contentSection.style.height = "400px"
}


// ------------------ to shift to diffrent sections in gallery --------------------


let photosContainer = document.querySelector('.photos-container')
let collectionsContainer = document.querySelector('.collections-container')
let exploreContainer = document.querySelector('.explore-container')
let block1 = document.querySelector('.bl1')
let block2 = document.querySelector('.bl2')
let block3 = document.querySelector('.bl3')

function hideout1() {
    collectionsContainer.style.display = "none"
    exploreContainer.style.display = "none"
    photosContainer.style.display = "block"
    block1.style.background = "black"
    block2.style.background = "lightgray"
    block3.style.background = " lightgray"
}

function hideout2() {
    photosContainer.style.display = "none"
    exploreContainer.style.display = "none"
    collectionsContainer.style.display = "block"
    block1.style.background = " lightgray"
    block2.style.background = "black"
    block3.style.background = "lightgray "
}

function hideout3() {
    photosContainer.style.display = "none"
    collectionsContainer.style.display = "none"
    exploreContainer.style.display = "block"
    block1.style.background = "lightgray "
    block2.style.background = "lightgray "
    block3.style.background = "black"
}


// ------------------ to show the photos block coloe in gallery on load --------------------

function colorshow() {
    block1.style.background = "black"
}

// ------------------ to open the gallery --------------------


let gallery = document.querySelector('.gallery')

function opengallery() {
    gallery.style.height = "656.5px"
    gallery.style.bottom = "0px"
    gallery.style.opacity = "1"
}

function gallerycomeback() {
    gallery.style.height = "0"
    gallery.style.bottom = "0px"
    let somedelay = setTimeout(reduceOpacity, 10)

}
function reduceOpacity() {
    gallery.style.opacity = "0"
}


// ===================== to change the height in contacts ===========================


let contactsLogo = document.querySelector('.contacts-logo')
let scrollPurpose = document.querySelector('.contactScroll')
let contactIcons = document.querySelector('.contact-icons')

function ContactsHeight() {
    contactsLogo.style.padding = "10px 15px 15px"
    contactsLogo.style.fontSize = "22px"
    contactIcons.style.padding = "0 15px 30px 0"
    scrollPurpose.style.height = "410px"
}

function resetTheHeight2() {
    contactsLogo.style.padding = " 0px 0 70px 15px"
    contactsLogo.style.fontSize = "38px"
}

// ================== to shift to different sections in dialer ===================


let dailerMains = document.getElementById('dailerblock')
let dialerContacts = document.querySelector('.dialer-contacts')
let dialerbook = document.getElementById('dialerbook')
let contactbook = document.getElementById('contactbook')


function hidecontacts() {
    dailerMains.style.display = "block"
    dialerContacts.style.display = "none"
    contactbook.style.color = "lightgrey"
    dialerbook.style.color = "black"
}

function hidecalls() {
    dailerMains.style.display = "none"
    dialerContacts.style.display = "block"
    contactbook.style.color = "black"
    dialerbook.style.color = "lightgrey"
}


// ------------------ to open the dialer app --------------------


let dialer = document.querySelector('.dialer')

function opendialer() {
    dialer.style.height = "656px"
    dialer.style.bottom = "0px"
    dialer.style.opacity = "1"
}

function dialercomeback() {
    dialer.style.height = "0"
    dialer.style.bottom = "0px"
    let somedelay1 = setTimeout(reduceOpacity1, 10)

}
function reduceOpacity1() {
    dialer.style.opacity = "0"
}



// ------------------ messaging function --------------------



let sendBtn = document.getElementById("sendMessage")
let addTxt = document.getElementById("text")
let messages = document.getElementById("dispMssg")

addTxt.onkeyup = function () {
    sendBtn.style.backgroundColor = "#0f766e"
}

messages.onclick = function () {
    sendBtn.style.backgroundColor = "rgb(166, 173, 180)"
}

sendBtn.onclick = function () {
    if (addTxt.value) {
        let newMssg = document.createElement("p")
        newMssg.classList.add("message-type")
        newMssg.innerHTML += `${addTxt.value}`
        messages.appendChild(newMssg)
        let space = document.createElement("div")
        messages.appendChild(space)
        addTxt.value = " "
    }
}


// ------------------ to open the message app --------------------


let messgInfo = document.querySelector('.messages')

function openmessage() {
    messgInfo.style.height = "656px"
    messgInfo.style.bottom = "0px"
    messgInfo.style.opacity = "1"
}

function messagecomeback() {
    messgInfo.style.height = "0"
    messgInfo.style.bottom = "0px"
    let somedelay2 = setTimeout(reduceOpacity2, 100)

}
function reduceOpacity2() {
    messgInfo.style.opacity = "0"
}



// ------------------ webcam function --------------------


// const webcamelement = document.getElementById('webcam')
// const canvaselement = document.getElementById('canvas')
// const webcam = new Webcam(webcamelement, "user", canvaselement)
// webcam.start()

// function takecapture(){
//     let picture = webcam.snap()
//     document.querySelector('.imgcapture').href = picture
// }


// ------------------ to open the chrome app --------------------


let chromeApp = document.querySelector('.Chrome')

function openchrome() {
    chromeApp.style.height = "656.5px"
    chromeApp.style.bottom = "0px"
    chromeApp.style.opacity = "1"
}

function chromecomeback() {
    chromeApp.style.height = "0"
    chromeApp.style.bottom = "0px"
    let somedelay3 = setTimeout(reduceOpacity3, 100)

}
function reduceOpacity3() {
    chromeApp.style.opacity = "0"
}


// ------------------ to open the netflix app --------------------


let netflix1 = document.querySelector('.netflix')

function opennetflix() {
    netflix1.style.height = "656.5px"
    netflix1.style.bottom = "0px"
    netflix1.style.opacity = "1"
}

function netflixcomeback() {
    netflix1.style.height = "0"
    netflix1.style.bottom = "0px"
    let somedelay4 = setTimeout(reduceOpacity4, 100)

}
function reduceOpacity4() {
    netflix1.style.opacity = "0"
}


// ------------------ to open the question paper app --------------------


let question = document.querySelector('.questionpapers1')

function openquestion() {
    question.style.height = "656.5px"
    question.style.bottom = "0px"
    question.style.opacity = "1"
}

function questioncomeback() {
    question.style.height = "0"
    question.style.bottom = "0px"
    let somedelay5 = setTimeout(reduceOpacity5, 100)

}
function reduceOpacity5() {
    question.style.opacity = "0"
}


// ------------------ to open the netflix app --------------------


let spotify1 = document.querySelector('.spotify1')

function openspotify1() {
    spotify1.style.height = "656.5px"
    spotify1.style.bottom = "0px"
    spotify1.style.opacity = "1"
}

function spotifycomeback() {
    spotify1.style.height = "0"
    spotify1.style.bottom = "0px"
    let somedelay5 = setTimeout(reduceOpacity5, 100)

}
function reduceOpacity5() {
    spotify1.style.opacity = "0"
}



// ------------------ to open the settings app --------------------


let settings1 = document.querySelector('.settingsApp')

function opensettings1() {
    settings1.style.height = "656.5px"
    settings1.style.bottom = "0px"
    settings1.style.opacity = "1"
}

function settingscomeback() {
    settings1.style.height = "0"
    settings1.style.bottom = "0px"
    let somedelay6 = setTimeout(reduceOpacity6, 100)

}
function reduceOpacity6() {
    settings1.style.opacity = "0"
}


//------------------------ to show alert in settings ----------------------------


let cannotdo = document.querySelectorAll('.SettAlert')

cannotdo.forEach(SettingsAlert)

function SettingsAlert(e) {
    e.addEventListener("click", AlertNotify)
}

function AlertNotify() {
    alert("This page displays just Settings UI you cannot access the options")
}



//----------------------------- calculator functions --------------------------------


let NumAndSigns = document.querySelectorAll(".CalCuBtnInpt")
let CalciDisplay = document.querySelector(".CalcuDispScreen")
let CalciOutput = document.querySelector(".CalciBtnOpt")
let CalciAllClear = document.querySelector(".CalciAllClear")
let CalculatorHeading = document.querySelector(".CalculatorHeading")
let CalciPercent = document.querySelector(".CalciPercent")
let CalciBackspace = document.querySelector(".CalciBackspace")

NumAndSigns.forEach(TakeInputs)

function TakeInputs(e) {
    e.addEventListener("click", CalciDispValue)
}

function CalciDispValue() {
    CalculatorHeading.style.opacity = "0"
    CalciDisplay.value += this.innerHTML
}

CalciOutput.onclick = ShowCalciOutput

function ShowCalciOutput() {
    if (CalciDisplay.value == 0) {
        CalciDisplay.value = "null"
    }

    let CalciOptValue = eval(CalciDisplay.value)
    CalciDisplay.value = CalciOptValue
}

CalciAllClear.onclick = ClearEveryThing

function ClearEveryThing() {
    CalciDisplay.value = " "
    CalculatorHeading.style.opacity = "1"
}


CalciPercent.onclick = EquatePercentval

function EquatePercentval() {
    let PercentAnswer = CalciDisplay.value / 100
    CalciDisplay.value = PercentAnswer

    if (CalciDisplay.value == 0) {
        CalciDisplay.value = " "
    }
}

CalciBackspace.onclick = backspacework

function backspacework() {
    let Calcidel = CalciDisplay.value
    let CalcidelOupt = Calcidel.slice(0, Calcidel.length - 1)
    CalciDisplay.value = CalcidelOupt
}



// ------------------ to open the Calculator app --------------------


let Calculator1 = document.querySelector('.CalculatorOneplus')

function openCalculator1() {
    Calculator1.style.height = "656.5px"
    Calculator1.style.bottom = "0px"
    Calculator1.style.opacity = "1"
}

function Calculatorcomeback() {
    Calculator1.style.height = "0"
    Calculator1.style.bottom = "0px"
    let somedelay7 = setTimeout(reduceOpacity7, 100)

}
function reduceOpacity7() {
    Calculator1.style.opacity = "0"
}



// ------------------ to switch to different sections in file manager --------------------


let FileCategoryOption = document.querySelector(".FileCategoryOption")
let FileStorageOption = document.querySelector(".FileStorageOption")
let FileFileDashOption = document.querySelector(".FileFileDashOption")
let FO11 = document.querySelector(".FO1")
let FO22 = document.querySelector(".FO2")
let FO33 = document.querySelector(".FO3")

window.onload = ShowCatBlue
FO22.onclick = ShowStorageMenu
FO33.onclick = ShowFileDashMenu
FO11.onclick = ShowCategoryMenu

function ShowCatBlue() {
    FO11.src = "oneplus images/catgry blue.jpg"
}

function ShowStorageMenu() {
    FileCategoryOption.style.display = "none"
    FileFileDashOption.style.display = "none"
    FileStorageOption.style.display = "block"
    FileInternalStorage.style.display = "none"
    FO22.src = "oneplus images/strage blue.jpg"
    FO11.src = "oneplus images/catgry grey.jpg"
    FO33.src = "oneplus images/fdash grey.jpg"
}

function ShowFileDashMenu() {
    FileCategoryOption.style.display = "none"
    FileFileDashOption.style.display = "block"
    FileStorageOption.style.display = "none"
    FileInternalStorage.style.display = "none"
    FO33.src = "oneplus images/fdash blue.jpg"
    FO22.src = "oneplus images/strage grey.jpg"
    FO11.src = "oneplus images/catgry grey.jpg"
}

function ShowCategoryMenu() {
    FileCategoryOption.style.display = "block"
    FileFileDashOption.style.display = "none"
    FileStorageOption.style.display = "none"
    FileInternalStorage.style.display = "none"
    FO11.src = "oneplus images/catgry blue.jpg"
    FO33.src = "oneplus images/fdash grey.jpg"
    FO22.src = "oneplus images/strage grey.jpg"
}




// ========================== to go back to internal storage menu =============================

let UpperBarWords = document.querySelector(".UpperBarWords")
let FileInternalStorage = document.querySelector(".FileInternalStorage")
let optionsWise = document.querySelector(".optionsWise")

UpperBarWords.onclick = GoToPreviousPanel

function GoToPreviousPanel() {
    FileInternalStorage.style.display = "none"
    FileStorageOption.style.display = "block"
}

function GoToInternalOptions() {
    FileCategoryOption.style.display = "none"
    FileFileDashOption.style.display = "none"
    FileStorageOption.style.display = "none"
    FileInternalStorage.style.display = "block"
}

// =========================== FileManager PopUp ==================================

let FileDashSend = document.querySelector(".FileDashSend")
let FileDashRemove = document.querySelector(".FileDashRemove")
let PopUpWhite = document.querySelector(".PopUpWhite")
let FileDashPopup = document.querySelector(".FileDashPopup")
let PopUpCancelBtn = document.querySelector(".PopUpCancelBtn")
let FileBoxes = document.querySelectorAll(".FileBoxes")

FileDashSend.onclick = FileShowPopup
FileDashRemove.onclick = FileShowPopup
FileBoxes.forEach(FileShowPopup12)

function FileShowPopup() {
    FileDashPopup.classList.add("FileDashPopup11")
    PopUpWhite.style.display = "block"
}

PopUpCancelBtn.onclick = FileCancelPopup

function FileCancelPopup() {
    FileDashPopup.classList.remove("FileDashPopup11")
    PopUpWhite.style.display = "none"
}

function FileShowPopup12(e) {
    e.addEventListener("click", FileShowPopup13)
}

function FileShowPopup13() {
    FileDashPopup.classList.add("FileDashPopup11")
    PopUpWhite.style.display = "block"
}



// ------------------ to open the filemanager app --------------------NotesPlusSign


let FileManagerApp = document.querySelector('.FileManagerApp')

function openFileManager1() {
    FileManagerApp.style.height = "656px"
    FileManagerApp.style.bottom = "0px"
    FileManagerApp.style.opacity = "1"
}

function FileManagercomeback() {
    FileManagerApp.style.height = "0"
    FileManagerApp.style.bottom = "0px"
    let somedelay8 = setTimeout(reduceOpacity8, 100)

}
function reduceOpacity8() {
    FileManagerApp.style.opacity = "0"
}



// ------------------ function to open notes edit window --------------------  

let NotesPlusSign = document.querySelector(".NotesPlusSign")
let NotesEditWindow = document.querySelector(".NotesEditWindow")

NotesPlusSign.onclick = OpenEditWindow

function OpenEditWindow() {
    NotesEditWindow.classList.add("NotesEditWindow11")
}


// ------------------ to save the Notes --------------------  

let NotesEditTitleIpt = document.querySelector(".NotesEditTitleIpt")
let NotesEditDespIpt = document.querySelector(".NotesEditDespIpt")
let Notesbtnsave = document.querySelector(".Notesbtnsave")
let Notesbtnscancel = document.querySelector(".Notesbtnscancel")
let NotesSaved = document.querySelector(".NotesSaved")
let LocalGetItem = JSON.parse(localStorage.getItem("notes"))
let NotesAll = document.querySelector(".NotesAll")

// if(LocalGetItem){
//     LocalGetItem.forEach((ee)=>{
//         SaveTheNote(ee)
//     })
// }

Notesbtnsave.addEventListener("click", (e)=>{
    e.preventDefault()
    SaveTheNote()
})
Notesbtnscancel.onclick = CancelTheNote

function SaveTheNote(obj) {

    let titleVal = NotesEditTitleIpt.value
    let despVal = NotesEditDespIpt.value 

    if(obj){
        titleVal = obj.title
        despVal = obj.desp
    }

    let NewNote = document.createElement("div")
    NewNote.classList.add("NotesAll")

    if (NotesEditTitleIpt.value || NotesEditDespIpt.value) {
        NewNote.innerHTML = `   <div class="NotesTitle">${titleVal}</div>
                                <div class="NotesDesp">${despVal}</div>
                                <div class="NotesDelBtn">Delete</div> 
                            `
        NotesSaved.appendChild(NewNote)
        NotesEditWindow.classList.remove("NotesEditWindow11")
        NotesEditTitleIpt.value = ""
        NotesEditDespIpt.value = ""
        UpdateLocalStorage()
    }

    // to delete 
    let NoteDelBtn = NewNote.querySelector(".NotesDelBtn")
    NoteDelBtn.addEventListener("click", () => {
        NewNote.remove()
    })

}

function CancelTheNote() {
    NotesEditWindow.classList.remove("NotesEditWindow11")
    NotesEditTitleIpt.value = ""
    NotesEditDespIpt.value = ""
}   

function UpdateLocalStorage(){
    let AllTheNotes = document.querySelectorAll(".NotesAll")
    let ArrayObj = []
    AllTheNotes.forEach((obj)=>{
        ArrayObj.push({
            title: obj.querySelector(".NotesTitle").innerText,
            desp: obj.querySelector(".NotesDesp").innerText
        })
    })
    localStorage.setItem("notes", JSON.stringify(ArrayObj))
}

NotesAll.querySelector(".NotesDelBtn").onclick = ()=>{
    NotesAll.style.display = "none"
}

// ------------------ to open the notes app --------------------NotesPlusSign


let NotesApp = document.querySelector('.NotesApp')

function openNotesApp() {
    NotesApp.style.height = "656px"
    NotesApp.style.bottom = "0px"
    NotesApp.style.opacity = "1"
}

function NotesAppcomeback() {
    NotesApp.style.height = "0"
    NotesApp.style.bottom = "0px"
    let somedelay9 = setTimeout(reduceOpacity9, 100)

}
function reduceOpacity9() {
    NotesApp.style.opacity = "0"
}

