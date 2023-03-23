import * as types from "./types"

function generateId() : number {
    return Math.floor(Math.random() * 1000000)
}

//Canvas
function createNewCanvas(size: types.Size) : types.Canvas {
    return {
        size: {
            width: 800,
            height: 600,
        },
        backgroundColor: "#FFF",
        // filter: types.TypeFilter.nothing,
        listObject: []
    }
}

function changeBackgroundColorCanvas(canvas: types.Canvas, color: string) : types.Canvas {
    return {
        ...canvas,
        backgroundColor: color
    }
}

function changeSizeCanvas(canvas: types.Canvas, size: types.Size) : types.Canvas {
    return {
        ...canvas,
        size: size
    }
}

function changeFilterOnCanvas(canvas: types.Canvas, filter: types.TypeFilter) : types.Canvas {
    return {
        ...canvas,
        // filter: filter
    }
}

function addNewObjectOnCanvas(canvas: types.Canvas, newItem: types.Item) : types.Canvas {
    return {
        ...canvas,
        listObject: [...canvas.listObject, newItem]
    }
}

function deleteObjectFromCanvas(canvas: types.Canvas, id: number) : types.Canvas {
    const deleteItem = canvas.listObject.filter( (item) => item.id = id)[0]
    return {
        ...canvas,
        listObject: [...canvas.listObject.filter((item) => item != deleteItem )]
    }
}

export function isSelect(canvas: types.Canvas, id: number) : types.Canvas {
    const selectItem : types.Item | undefined = canvas.listObject.filter( (item) => item.id = id)[0]
    const canvasAfterDel = deleteObjectFromCanvas(canvas, id);
    
    const newItem: types.Item  = {
        ...selectItem,
        selection: true,
    }
    
    return {
        ...canvas,
        listObject: [...canvasAfterDel.listObject, newItem]
    }
}

export function unSelect(canvas: types.Canvas, id: number) : types.Canvas {
    const unSelectItem : types.Item | undefined = canvas.listObject.filter( (item) => item.id = id)[0]
    const canvasAfterDel = deleteObjectFromCanvas(canvas, id);
    
    const newItem: types.Item  = {
        ...unSelectItem,
        selection: false,
    }
    
    return {
        ...canvas,
        listObject: [...canvasAfterDel.listObject, newItem]
    }
}

//Text
function changeFontSizeText(canvas: types.Canvas, id: number, fontSize: number) : types.Canvas {
    const tempObj : types.Item | undefined = canvas.listObject.find( (obj) => obj.id == id)
    const canvasAfterDel = deleteObjectFromCanvas(canvas, id);
    if (!tempObj || tempObj.type != "TypeTextBox")
    {
        return canvas
    }

    const newItem: types.TypeTextBox  = {
        id: tempObj.id,
        size: tempObj.size,
        selection: tempObj.selection,
        location: tempObj.location,
        
        type: "TypeTextBox",
        content: tempObj.content,
        color: tempObj.color,
        fontSize: fontSize,
    }

    return {
        ...canvas,
        listObject: [...canvasAfterDel.listObject, newItem]
    }
}

function changeColorText(canvas: types.Canvas, id: number, color: string) : types.Canvas {
    const tempObj = canvas.listObject.find( (obj) => obj.id == id)
    const canvasAfterDel = deleteObjectFromCanvas(canvas, id);
    
    if (!tempObj || tempObj.type != "TypeTextBox")
    {
        return canvas
    }

    const newItem = {
        ...tempObj,
        color: color
    }

    return {
        ...canvas,
        listObject: [...canvasAfterDel.listObject, newItem]
    }
}

function MoveTextBox(canvas: types.Canvas, id: number, position: types.Position) : types.Canvas {
    const tempObj = canvas.listObject.find( (obj) => obj.id == id)
    const canvasAfterDel = deleteObjectFromCanvas(canvas, id);

    if (!tempObj || tempObj.type != "TypeTextBox")
    {
        return canvas
    }
    const newItem = {
        ...tempObj,
        location: position
    }

    return {
        ...canvas,
        listObject: [...canvasAfterDel.listObject, newItem]
    }
}

function changeSizeTextBox(canvas: types.Canvas, id: number, size: types.Size) : types.Canvas {
    const tempObj = canvas.listObject.find( (obj) => obj.id == id)
    const canvasAfterDel = deleteObjectFromCanvas(canvas, id);

    if (!tempObj || tempObj.type != "TypeTextBox")
    {
        return canvas
    }
    const newItem = {
        ...tempObj,
        size: size
    }

    return {
        ...canvas,
        listObject: [...canvasAfterDel.listObject, newItem]
    }
}

function changeContentTextBox(canvas: types.Canvas, id : number, content: string) : types.Canvas {
    const tempObj = canvas.listObject.find( (obj) => obj.id == id)
    const canvasAfterDel = deleteObjectFromCanvas(canvas, id);
    
    if (!tempObj || tempObj.type != "TypeTextBox")
    {
        return canvas
    }
    const newItem = {
        ...tempObj,
        content: content
    }

    return {
        ...canvas,
        listObject: [...canvasAfterDel.listObject, newItem]
    }
}

type ChangeObjectCoord = {
    id: number,
    location: types.Position
}

//ArtObject
export function MoveArtObject(canvas: types.Canvas, props: ChangeObjectCoord) : types.Canvas {
    
    const tempObj = canvas.listObject.find( (obj) => obj.id == props.id)

    if (!tempObj) {
        return canvas;
    }

    const newObj = tempObj;
    newObj.location = props.location;

    const newCanvas = deleteObjectFromCanvas(canvas, tempObj.id);

    //console.log('ok', newObj.сoord);
    return {
        ...newCanvas,
        listObject: [...newCanvas.listObject, newObj]
    }
}

export function addSquareOnCanvas(canvas: types.Canvas) : types.Canvas {
    const newId = generateId();

    const newArtObject: types.TypeArtObject = {
        id: newId,
        size: { 
            width: 100,
            height: 100
        },
        selection: false,
        location: {
            x: 100,
            y: 100
        },
        type: "TypeArtObject",
        color: "000",
        shape: {
            typeContent: "Rectangle"
        }
    }
    const tempCanvas: types.Canvas = addNewObjectOnCanvas(canvas, newArtObject);
    
    return tempCanvas
}

export function addTriangleOnCanvas(canvas: types.Canvas) : types.Canvas {
    const newId = generateId();

    const newArtObject: types.TypeArtObject = {
        id: newId,
        size: { 
            width: 100,
            height: 100
        },
        selection: false,
        location: {
            x: 200,
            y: 200
        },
        type: "TypeArtObject",
        color: "000",
        shape: {
            typeContent: "Triangle"
        }
    }
    const tempCanvas: types.Canvas = addNewObjectOnCanvas(canvas, newArtObject);
    
    return tempCanvas
}

export function addEllipseOnCanvas(canvas: types.Canvas) : types.Canvas {
    const newId = generateId();

    const newArtObject: types.TypeArtObject = {
        id: newId,
        size: { 
            width: 100,
            height: 100
        },
        selection: false,
        location: {
            x: 300,
            y: 300
        },
        type: "TypeArtObject",
        color: "000",
        shape: {
            typeContent: "Ellipse"
        }
    }
    const tempCanvas: types.Canvas = addNewObjectOnCanvas(canvas, newArtObject);
    
    return tempCanvas
}

function changeSizeArtObject(canvas: types.Canvas, id: number, size: types.Size) : types.Canvas {
    const tempObj = canvas.listObject.find( (obj) => obj.id == id)
    const canvasAfterDel = deleteObjectFromCanvas(canvas, id);
    
    if (!tempObj || tempObj.type != "TypeArtObject")
    {
        return canvas
    }
    const newItem = {
        ...tempObj,
        size: size
    }

    return {
        ...canvas,
        listObject: [...canvasAfterDel.listObject, newItem]
    }
}

function changeColorArtObject(canvas: types.Canvas, id: number, color: string) : types.Canvas {
    const tempObj = canvas.listObject.find( (obj) => obj.id == id)
    const canvasAfterDel = deleteObjectFromCanvas(canvas, id);
    
    if (!tempObj || tempObj.type != "TypeArtObject")
    {
        return canvas
    }
    const newItem = {
        ...tempObj,
        color: color
    }

    return {
        ...canvas,
        listObject: [...canvasAfterDel.listObject, newItem]
    }
}

//Image
function MoveImage(canvas: types.Canvas, id: number, position: types.Position) : types.Canvas {
    const tempObj = canvas.listObject.find( (obj) => obj.id == id)
    const canvasAfterDel = deleteObjectFromCanvas(canvas, id);
    
    if (!tempObj || tempObj.type != "TypeArtObject")
    {
        return canvas
    }
    const newItem = {
        ...tempObj,
        location: position
    }

    return {
        ...canvas,
        listObject: [...canvasAfterDel.listObject, newItem]
    }
}

function changeSizeImage(canvas: types.Canvas, id: number, size: types.Size) : types.Canvas {
    const tempObj = canvas.listObject.find( (obj) => obj.id == id)
    const canvasAfterDel = deleteObjectFromCanvas(canvas, id);
    
    if (!tempObj || tempObj.type != "TypeImage")
    {
        return canvas
    }
    const newItem = {
        ...tempObj,
        size: size
    }

    return {
        ...canvas,
        listObject: [...canvasAfterDel.listObject, newItem]
    }
}