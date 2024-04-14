console.log("ADDING CLICK startRecDiv TO PAGE");

var startRecDiv=document.createElement("div"); 
startRecDiv.id = "START_RECORDING"
document.body.appendChild(startRecDiv); 
startRecDiv.innerText="CLICK ME!";
startRecDiv.style = "position:absolute;background:red;top:0;left:0;height:200px;width:200px;"
startRecDiv.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("CLICKING ON CLICK_ME");
    chrome.runtime.sendMessage("startCapture");
});


chrome.runtime.onMessage.addListener(request => {
    if (request == 'stream_acquired') {
        console.log("STREAM ACQUIRED!", request);
    } else if (request == 'stream_missing') {
        console.log("Stream Missing :(")
    } else {
        console.log("Some other event...", request)
    }
    return true;
})