
// triangle area 

function calculateTriangle(){
    const trinangleBaseText = document.getElementById('triangleBase').value ;
    const trinangleBase = parseFloat(trinangleBaseText)
    
    const trinangleHeightText = document.getElementById('triangleHeight').value ;
    const trinangleHeight = parseFloat(trinangleBaseText);
    const triangle = 0.5* trinangleBase * trinangleHeight;

    alert(triangle)
}