'use strict';
import { Utils } from './utils';

export class Post {
  constructor (title, synopsis, body, createdDate = new Date().getTime()) {
    this.title = title;
    this.synopsis = synopsis;
    this.body = body;
    this.createdDate = createdDate;
  }
}

export class Person {
  constructor (firstName, surName, dayOfBirth = null) {
    this.firstName = firstName;
    this.surName = surName;
    this.dayOfBirth = dayOfBirth;
  }

  toString () {
    return `My name is ${this.firstName} ${this.surName}`;
  }
}

export class Student extends Person {
  constructor (studentNr, emailSchool, firstName, surName, dayOfBirth = null) {
    super(firstName, surName, dayOfBirth);

    this.studentNr = studentNr;
    this.emailSchool = emailSchool;
  }

  toString () {
    const pStr = super.toString();
    return `${pStr}. I'm a student with number ${this.studentNr} and email ${this.emailSchool}!`;
  }
}

export class LoadData {
  constructor() {
  }

  init () {
    var detailsId = Utils.getParameterByName("id");
    var url = window.location.href;
    
    this.loadMenu();

    if (url.indexOf("index") > -1){
      this.loadSpotlight();
      this.loadPosts();
    }

    if (url.indexOf("news.html") > -1) {
      this.loadPosts();
    }

    if (url.indexOf("projects") > -1) {
      this.loadProjects();
    }

    if (url.indexOf("news-details.html?id=" + detailsId) > -1) {
      this.loadPostsDetails();
      console.log("page id", detailsId);
    }

    if (url.indexOf("project-details.html?id=" + detailsId) > -1) {
      this.loadProjectsDetails();
      console.log("page id", detailsId);
    }
  }

  loadMenu () {
    var template = document.getElementById("desktop-navigation").innerHTML;
    var template2 = document.getElementById("mobile-navigation").innerHTML;
    var html = document.querySelector(".desktop-navigation");
    var html2 = document.querySelector(".mobile-menu");
    var compiledDesktopMenu = Handlebars.compile(template);
    var compiledMobilepMenu = Handlebars.compile(template2);
    
    Utils.getJSONByPromise("assets/json/navigation.json").then(
      function(data) {
          var result = compiledDesktopMenu(data);
          var result2 = compiledMobilepMenu(data);
          html.innerHTML += result;
          html2.innerHTML += result2;
      },
      function(status) {
          console.log(status);
      }
    );
  }

  loadSpotlight () {
    var template = document.getElementById("spotlight").innerHTML;
    var html = document.querySelector(".wrapper__spotlight");
    var compiledSpotlight = Handlebars.compile(template);

    Utils.getJSONByPromise("assets/json/projects.json").then(
      function(data) {
          var result = compiledSpotlight(data);
          html.innerHTML += result;
      },
      function(status) {
          console.log(status);
      }
    );
  }

  loadProjects () {
    var template = document.getElementById('projects').innerHTML;
    var html = document.querySelector(".wrapper__projects");
    var compiledProjects = Handlebars.compile(template);
    
    Utils.getJSONByPromise("assets/json/projects.json").then(
      function(data) {
          var result = compiledProjects(data);
          html.innerHTML += result;

          const likeIcon = html.querySelector('#likeIcon');
          let liked = false;

          console.log(likeIcon);
          console.log(liked);
      },
      function(status) {
          console.log(status);
      }
    );
  }

  loadProjectsDetails () {
    var template = document.getElementById("project__details").innerHTML;
    var html = document.querySelector(".project__details-container");
    var compiledSpotlight = Handlebars.compile(template);
    var detailsId = Utils.getParameterByName("id");

    Utils.getJSONByPromise("assets/json/projects.json").then(
      function(data) {
          var postItems = data;
          var result = compiledSpotlight(data.projects[detailsId]);
          html.innerHTML += result;
          console.log(data);
      },
      function(status) {
          console.log(status);
      }
    );
  }

  loadPosts () {
    var template = document.getElementById("latest-news").innerHTML;
    var html = document.querySelector(".wrapper_of__wrapper");
    var compiledSpotlight = Handlebars.compile(template);
    
    Utils.getJSONByPromise("assets/json/posts.json").then(
      function(data) {
          var result = compiledSpotlight(data);
          html.innerHTML += result;
      },
      function(status) {
          console.log(status);
      }
    );
  }

  loadPostsDetails () {
    var template = document.getElementById("news-detail").innerHTML;
    var html = document.querySelector(".news__detail");
    var compiledSpotlight = Handlebars.compile(template);
    var detailsId = Utils.getParameterByName("id");

    Utils.getJSONByPromise("assets/json/posts.json").then(
      function(data) {
          var postItems = data;
          var result = compiledSpotlight(data.posts[detailsId]);
          html.innerHTML += result;
          console.log(data.posts);
          console.log(data.posts[1]);
          console.log(result);
      },
      function(status) {
          console.log(status);
      }
    );
  }
}