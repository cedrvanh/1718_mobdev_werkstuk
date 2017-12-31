'use strict';

export class ApplicationDbContext {
  constructor () {
  }

  init (connectionStr) {
    this._connectionStr = connectionStr;
    this._dbData = {
        "users": [
          { 
            "username": "test123",
            "password": "test123"
          },
        ]
    };

    if(window.localStorage.getItem(this._connectionStr) != null) {
        this._dbData = JSON.parse(window.localStorage.getItem(this._connectionStr));
    } else {
        window.localStorage.setItem(this._connectionStr, JSON.stringify(this._dbData));
    }
  }
    getUser () {
        const data = this._dbData.users;
        if(data == null || (data != null && data.length == 0)) {
            return null;
        }
        return data;
    }
    
    addUser (username, password) {
        if(username != undefined && username != null && password != undefined && password != null) {       
            let userStorage = {
                "username": username,
                "password": password
            };
            
            this.getUser().push(userStorage);
            this.save();
            
            console.log(this.getUser());
            return userStorage;
        }
        return null;
    }

    findUserByUsername (username) {
        const data = this.getUser();
        if(data == null) {
            return -1;
        }

        let match = false, i = 0, user;
        while(!match && i < data.length) {
            user = data[i];
            if(user.username === username) {
                match = true;
            } else {
                i++;
            }
        }      
        if(match) {
            return i;
        }
        return -1;
    }
    updateStickyNote (stickyNote) {

        const index = this.findIndexStickyNoteById(stickyNote.id);
        if(index == -1) {
            return false;
        }
        stickyNote.modifiedDate = new Date().getTime();
        this._dbData.stickynotes[index] = stickyNote;
        this.save();
        return true;
    }

    save () {
        window.localStorage.setItem(this._connectionStr, JSON.stringify(this._dbData)); 
        return true; 
    }
}