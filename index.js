"use strict";

class LoadResource {
    constructor(fileUrl) {
        this.fileUrl = fileUrl;
    }
    responseData() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", this.fileUrl, false);
        xhr.send();
        if (xhr.status !== 200) {
            console.error(`error: ${xhr.status}; request status: ${xhr.statusText}`);
        } else {
            return JSON.parse(xhr.response);
        }
    }
}

const fileUrl = "https://raw.githubusercontent.com/mdn/learning-area/master/javascript/oojs/json/superheroes.json";
const xhr = new LoadResource(fileUrl);
const data = xhr.responseData();
console.log(data);

const root = document.getElementById('root');

const squadName  = document.createElement("h1");
squadName.innerHTML = data.squadName;
root.append(squadName);

const homeTown  = document.createElement("div");
homeTown.innerHTML = data.homeTown;
root.append(homeTown);

const formed  = document.createElement("div");
formed.innerHTML = data.formed;
root.append(formed);

const secretBase  = document.createElement("i");
secretBase.innerHTML = data.secretBase;
root.append(secretBase);