const originalConsoleLogXyZ = console.log
const originalConsoleInfoXyZ = console.info
const originalConsoleWarnXyZ = console.warn
const originalConsoleErrorXyZ = console.error

let logsCaptured = []
console.log = function(logsOfConsole){
    logsCaptured.push({type : "log", info : logsOfConsole})
    originalConsoleLogXyZ(logsOfConsole)
}
console.warn = function(logsOfConsole){
    logsCaptured.push({type : "warn", info : "! " + logsOfConsole})
    originalConsoleWarnXyZ(logsOfConsole)
}
console.error = function(logsOfConsole){
    logsCaptured.push({type : "error", info : "× " + logsOfConsole})
    originalConsoleErrorXyZ(logsOfConsole)
}
console.info = function(logsOfConsole){
    logsCaptured.push({type : "info", info : logsOfConsole})
    originalConsoleInfoXyZ(logsOfConsole)
}
window.addEventListener("error", (e) => {
    logsCaptured.push({type : "error", info : `× ${e.message} <a href="./">${e.filename ? new URL(e.filename).pathname : e.filename}:${e.lineno}:${e.colno}</a>`})
})

document.querySelector("head").innerHTML = document.querySelector("head").innerHTML + `
<style>
    .consoleLOggerXYZBtn{
        z-index: 9999999999 !important;
        position: fixed !important;
        right: 10px !important;
        bottom: 10px !important;
        background-color: transparent !important;
    }
    .consoleLOggerXYZBtn img{
        height: 45px !important;
        width: 45px !important;
    }
</style>

`
document.querySelector("body").innerHTML = document.querySelector("body").innerHTML + `

<div class="consoleLOggerXYZBtn">
    <img src="https://winaero.com/blog/wp-content/uploads/2019/06/WIndows-Terminal-icon.png" alt="">
</div>
`


function consoleLOggerXYZBtnListener() {
    document.querySelector(".consoleLOggerXYZBtn img").addEventListener("click", () => {
        


        if (document.getElementsByClassName("consoleLOggerXYZ").length > 0) {
            
            while (document.getElementsByClassName("consoleLOggerXYZ").length > 0){
                document.getElementsByClassName("consoleLOggerXYZ")[0].parentNode.removeChild(document.getElementsByClassName("consoleLOggerXYZ")[0])
            }
        } else {
            document.querySelector("head").innerHTML = document.querySelector("head").innerHTML +`
                <style class="consoleLOggerXYZ">
                    *{
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box !important;
                        text-align: left !important;
                        font-family: 'Courier New', Courier, monospace !important;
                    }
                    .consoleLOggerXYZLogs{
                        background-color: rgb(33, 33, 33) !important;
                        position: fixed !important;
                        height: 100vh !important;
                        z-index: 999999999 !important;
                        color: white !important;
                        width: 100vw !important;
                        font-family: 'Courier New', Courier, monospace !important;
                        padding: 15px;
                        font-size: 15px;
                        top: 0px !important;
                        right:0px !important;
                        left:0px !important;
                        bottom:0px !important;
                        display : flex !important;
                        flex-direction : column !important;
                        gap: 7px !important;
                        overflow: scroll !important;
                    }
                    .consoleLOggerXYZLogs p{
                        font-size: small !important;
                        padding-left: 10px !important;
                    }
                    .consoleLOggerXYZLogs .consoleLOggerXYZLogslog{
                        padding-left: 28px !important;
                    }
                    .consoleLOggerXYZLogs .consoleLOggerXYZLogsinfo{
                        padding-left: 28px !important;
                    }
                    .consoleLOggerXYZLogswarn{
                        background-color:rgba(237, 213, 126, 0.28) !important;
                    }
                    .consoleLOggerXYZLogserror{
                        background-color:rgba(237, 126, 126, 0.28) !important;
                    }
                    div{
                        background-color: transparent !important;
                        color: white !important;
                        font-size: medium !important;
                    }
                    p{
                        background-color: transparent !important;
                        color: white !important;
                    }
                    a{
                        color: rgb(1, 156, 208) !important;
                    }
                </style>
            `
            document.querySelector("body").innerHTML = document.querySelector("body").innerHTML + `
                <div class="consoleLOggerXYZ consoleLOggerXYZLogs">
                    <div>
                        <h2>Console Display</h2>
                        <br>
                        <h3>By : pixco/pixco12/pixcordel</h3>
                        <br>
                        <p>Only logs, info, warnings and errors are captured here. To refresh the stuff captured open and close the console display.</p>
                        <br>
                        <h4>Logs Captured :</h4>
                    </div>
                </div>
            `
            for (let i = 0; i < logsCaptured.length; i++){
                document.querySelector(".consoleLOggerXYZLogs").innerHTML = document.querySelector(".consoleLOggerXYZLogs").innerHTML + `<p class="consoleLOggerXYZLogs${logsCaptured[i].type}">${logsCaptured[i].info}</p>`
            }


            consoleLOggerXYZBtnListener()
        }
    })
}

consoleLOggerXYZBtnListener()
