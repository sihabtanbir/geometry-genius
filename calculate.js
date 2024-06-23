
// triangle area 

function calculateTriangle(){
    const trinangleBaseText = document.getElementById('triangleBase').value ;
    const trinangleBase = parseFloat(trinangleBaseText)
    
    const trinangleHeightText = document.getElementById('triangleHeight').value ;
    const trinangleHeight = parseFloat(trinangleHeightText);
    const triangle = 0.5* trinangleBase * trinangleHeight;

    alert(triangle)
}

// rectangle area 

function rectangleCalculate(){
    const rectangleWidthText = document.getElementById('rectangleWidth').value ;
    const rectangleWidth = parseFloat(rectangleWidthText)
    
    const rectangleLengthText = document.getElementById('rectangleLength').value ;
    const rectangleLength = parseFloat(rectangleLengthText);
    const rectangle =  rectangleWidth * rectangleLength;

    alert(rectangle)
}

function getInput(inputFildId){
    const inputFild = document.getElementById(inputFildId).value;
    const inputValue = parseFloat(inputFild);
    return inputValue;
}

function parallelogramCalculate(){
    const base = getInput('parallelogramBase');
    
    const height = getInput('parallelogramHeight');
    const result = base * height;
    alert(result);
}