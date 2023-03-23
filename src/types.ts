export type CardMaker = {
    templatesCollection: TemplatesCollection,
    canvas: Canvas,
    historyCommand: HistoryCommand
}


export type TemplatesCollection = {
    templatesList: []
}

export type Templates = {
    
}

export type HistoryCommand = {
    undo: [],
    redo: []
}

export type Canvas = {
    size: Size
    backgroundColor: string, 
    // filter: TypeFilter, //"#FFFF",
    listObject: Array<Item> 
}

export type Item = TypeTextBox | TypeImage | TypeArtObject


export enum TypeFilter {
    nothing,
    black = "black",
    white = "white",
    green = "green",
    red = "red",
    blue = "blue"
}

export type Size = {
    width: number,
    height: number
}

export type Position = {
    x: number,
    y: number
}

export type CommonAttribute = {
    id: number,
    size: Size,
    selection: boolean,
    location: Position,
}

export type TypeTextBox = CommonAttribute & {
    type: "TypeTextBox",
    content: string,
    fontSize: number,
    color: string, //"#0000"
}

export type TypeImage = CommonAttribute & {
    type: "TypeImage",
    src: string, //"img/img.png"
}

export type TypeArtObject = CommonAttribute & {
    type: "TypeArtObject",
    color: string,
    shape: Triangle | Rectangle | Ellipse //"Ellipse"
}

export type Triangle = {
    typeContent: "Triangle"
}

export type Rectangle = {
    typeContent: "Rectangle"
}

export type Ellipse = {
    typeContent: "Ellipse"
}
