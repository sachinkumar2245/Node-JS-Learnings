import { UserEvents } from "./userEvent.js";

const userEvent = new UserEvents();

userEvent.createPost('This is my first post');

userEvent.addListener('postCreated',(content) =>{
    console.log("Saving post to database");
})

function saveToDatabase(){
    console.log('Saving post to database');

}

userEvent.addListener('postCreated', (content) =>{
    console.log("Sending Notifications");
})

function sendNOtifications(){
    console.log('Sending Notifications');
}

userEvent.addListener('postCreated', (content) =>{
    console.log("Updating timeline");
})
function updateTimeLine(){
    console.log('Updating timeline');
}

userEvent.addListener('postCreated', saveToDatabase)
userEvent.addListener('postCreated', sendNOtifications)
userEvent.addListener('postCreated', updateTimeLine)