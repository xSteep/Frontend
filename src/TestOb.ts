import * as types from "./types"

const text1: types.TypeTextBox = {
    id: 1,
    size: { width: 100, height: 50 },
    selection: false,
    location: {x: 200, y: 200},

    type: "TypeTextBox",
    content: "Text",
    fontSize: 14,
    color: "green"
}

const text2: types.TypeTextBox = {
    id: 2,
    size: { width: 300, height: 150 },
    selection: false,
    location: {x: 400, y: 400},

    type: "TypeTextBox",
    content: " Text x2",
    fontSize: 20,
    color: "#61dafb"
}

const artObj1: types.TypeArtObject = {
    id: 3,
    size: { width: 300, height: 150 },
    selection: false,
    location: { x: 450, y: 400 },

    type: "TypeArtObject",
    color: "black",
    shape: { typeContent: "Rectangle" }  //"Ellipse"
}

const artObj2: types.TypeArtObject = {
    id: 4,
    size: { width: 300, height: 150 },
    selection: false,
    location: { x: 100, y: 100 },

    type: "TypeArtObject",
    color: "red",
    shape: { typeContent: "Ellipse" }  //"Ellipse"
}

const artObj3: types.TypeArtObject = {
    id: 5,
    size: { width: 150, height: 150 },
    selection: false,
    location: { x: 200, y: 100 },

    type: "TypeArtObject",
    color: "yellow",
    shape: { typeContent: "Triangle" }  //"Ellipse"
}

const image1: types.TypeImage = {
    id: 6,
    size: { width: 40, height: 40},
    selection: false,
    location: { x: 200, y: 10 },

    type: "TypeImage",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADySURBVDhPY/z//z8DuYAJSmMD377//fMHn9HYbZ4+58n2XW8/ff4DZCvIcaQmSFtbCkCkkAEWzQnpVx88+gHlwEBEiHhGsgyUAwPozq5puoupEwhWrHl5/eZXKAcG0DUfO/EBysIAU2Y+hrJgAEXzuQuf/+EOIEwXoWgGBi+UhQ38/YtuMIpmfV1eKAsbEBZihbJgAEUzLw+zvCwHlIMB/LxFoSwYQA+whiolFhZGKAcJaKpzhweJQzkwgK5ZUYFzSq+6tBQ7lA8GTnaC0ydoQDlIAGfavnHr6+MnP9nZGLU0eUSE0X0LATTLGAQBBZoZGACLD0ytCWmsTwAAAABJRU5ErkJggg=="
}

const canvas1: types.Canvas = {
    size: { width: 800, height: 600},
    backgroundColor: "#FFF", //f5ffdc 
    // filter: "#FFF", //"#FFFF",
    listObject: [text1, text2, artObj1, artObj2, artObj3, image1]
}

export default canvas1