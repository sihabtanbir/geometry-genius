var outputResult = document.getElementById('outputResult');
// triangle area 

function calculateTriangle(){
    const trinangleBaseText = document.getElementById('triangleBase').value ;
    const trinangleBase = parseFloat(trinangleBaseText)
    
    const trinangleHeightText = document.getElementById('triangleHeight').value ;
    const trinangleHeight = parseFloat(trinangleHeightText);
    const result = 0.5* trinangleBase * trinangleHeight;

    outputResult.innerText = "Triangle is "+ result ;
}

// rectangle area 

function rectangleCalculate(){
    const rectangleWidthText = document.getElementById('rectangleWidth').value ;
    const rectangleWidth = parseFloat(rectangleWidthText)
    
    const rectangleLengthText = document.getElementById('rectangleLength').value ;
    const rectangleLength = parseFloat(rectangleLengthText);
    const result =  rectangleWidth * rectangleLength;

    outputResult.innerText = "Rectangle is "+ result ;
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
    outputResult.innerText = "Parallelogram is "+ result ;
}

    function pentagonCalculate(){
        const perimeter = getInput('pentaPerimeter');
        
        const apothem = getInput('pentaApothem');
        const result =  0.5* perimeter * apothem ;
        outputResult.innerText = "Pentagon is "+ result ;
}

function rhombusCalculate(){
    const base = getInput('rhombusBase');
    
    const height = getInput('rhombusHeight');
    const result =0.5*  base * height;
    outputResult.innerText = "Rhombus is "+ result ;
    
}