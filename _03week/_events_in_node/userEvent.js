import EventEmitter from 'events';

class UserEvents extends EventEmitter{
    //event

    createPost(content){
        console.log('Post is created');
        this.emit('postCreated');
    }
}

export {UserEvents};