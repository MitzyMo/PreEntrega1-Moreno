//Take the input parameters = vec2 and vec3 / Output parameter = vec4
/*
function vertexShader(vertPosition, verColor){
	return{
		fragColor: vertColor,
		gl_Position: [vertPosition.x, vertPosition.y 0.0,1.0]
	}
}
*/
//Set the graphics pipeline program in GLSL (GL Shader Language).(This should be a file, but we are creating an array to use as each line of a file.)
//Attripute are input parameters.
//varying are output parameters.
// main is the actual vertexShader that performs all the operations.
let vertexShaderText = [
  "precision mediump float;",
  "",
  "attribute vec2 vertPosition;",
  "attribute vec3 vertColor;",
  "varying vec3 fragColor;",
  "",
  "void main()",
  "{",
  "  fragColor = vertColor;",
  "  gl_Position = vec4(vertPosition, 0.0, 1.0);",
  "}",
].join("\n");

//Set the graphics pipeline program in GLSL (GL Shader Language).(This should be a file, but we are creating an array to use as each line of a file.)
//varying are INPUT parameters.
//the only output will always be the gl_FragColor
// main is the actual vertexShader that performs all the operations.
let fragmentShaderText = [
  "precision mediump float;",
  "",
  "varying vec3 fragColor;",
  "void main()",
  "{",
  "  gl_FragColor = vec4(fragColor, 1.0);",
  "}",
].join("\n");

let initialize = function () {
  console.log("This is working");

  let canvas = document.getElementById("draw-surface");
  let gl = canvas.getContext("webgl");

  if (!gl) {
    console.log("WebGL not supported, falling back on experimental-webgl");
    gl = canvas.getContext("experimental-webgl");
  }

  if (!gl) {
    alert("Your browser does not support WebGL");
  }
  /*     //Adjusting canvas size to match the screen and also telling WebGL were to render
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0,0,window.innerWidth,window.innerHeight); */

  //Set a color to reset the color of the canvas
  gl.clearColor(0.0, 0.0, 0.0, 0.5);
  //What does gl needs to clear
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  /* 
	Note for me.
	Graphic applications have multiple buffers they render to, here I will need, the 
	color buffer and the depth buffer. 
	Color Buffer: Stores what color should all pixels be.
	Depth Buffer: How deep into the screen that pixel is. (Used when involving Z Ordering/ layers).
	*/

  // Create shaders for gl to use
  let vertexShader = gl.createShader(gl.VERTEX_SHADER);
  let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

  //Prepare for compilation (for, actual shader)
  gl.shaderSource(vertexShader, vertexShaderText);
  gl.shaderSource(fragmentShader, fragmentShaderText);

  //Compile the Shader files above
  gl.compileShader(vertexShader);
  //Check for compilation errors, meaning if i did not write the file properly, then it will send and error.
  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.error(
      "ERROR en compilación de vertex shader!",
      gl.getShaderInfoLog(vertexShader)
    );
    return;
  }
  gl.compileShader(fragmentShader);
  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.error(
      "ERROR en compilación de fragment shader!",
      gl.getShaderInfoLog(fragmentShader)
    );
    return;
  }

  //Creating a Program or a main container that contains the other individual components.
  let program = gl.createProgram();
  //attach each component. (where, which)
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  // link the components inside the program.
  gl.linkProgram(program);
  //Also review if there are any link errors inside the program for all the components.
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("ERROR en linking program!", gl.getProgramInfoLog(program));
    return;
  }
  //validate the program, it is used in development stages to prove the main container is working properli
  gl.validateProgram(program);
  if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
    console.error("ERROR validating program!", gl.getProgramInfoLog(program));
    return;
  }
  //
  // Create buffer // Set a list with the información that the graphics card va a usar.
  // Son los ejes en X y Y of each triangle point. and
  let triangleVertices = [
    // X, Y,       R, G, B
    0.0, 0.5, 1.0, 1.0, 0.0, -0.5, -0.5, 0.7, 0.0, 1.0, 0.5, -0.5, 0.1, 1.0,
    0.6,
  ];
  //attach the data into the vertex shader.
  let triangleObjectVertexBuffer = gl.createBuffer();
  // the variables we are passing to the active buffer
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleObjectVertexBuffer);
  // Specify the data, luego modiicada con el user input of the sliders. /transform from 64 to 32 as needed by GL.
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(triangleVertices),
    gl.STATIC_DRAW
  );
  // Setting the position, of the "file".
  let positionAttribLocation = gl.getAttribLocation(program, "vertPosition");
  let colorAttribLocation = gl.getAttribLocation(program, "vertColor");

  //layout fo the position it needs 5 values.
  gl.vertexAttribPointer(
    positionAttribLocation, // Attribute location
    2, // Number of elements per attribute
    gl.FLOAT, // Type of elements
    gl.FALSE,
    5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex //Constatn already created
    0 // Offset from the beginning of a single vertex to this attribute
  );
  //Enables the previous attribute for use.
  gl.vertexAttribPointer(
    colorAttribLocation, // Attribute location
    3, // Number of elements per attribute
    gl.FLOAT, // Type of elements
    gl.FALSE,
    5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
    2 * Float32Array.BYTES_PER_ELEMENT // Offset from the beginning of a single vertex to this attribute
  );

  gl.enableVertexAttribArray(positionAttribLocation);
  gl.enableVertexAttribArray(colorAttribLocation);

  //
  // Draw the Triangle into the screen.
  //
  gl.useProgram(program);
  //Which buffer, how many vertices to skip, how many vertices to draw
  gl.drawArrays(gl.TRIANGLES, 0, 3);

  //Grabing the data from the slider in HTML.
  let sliders = document.querySelectorAll('input[type="range"]');
  sliders.forEach(function (slider) {
    slider.addEventListener("input", function () {
      updateTriangleVertices();
      draw();
    });
  });

  //Function that will save the slider input, and send it to the vertex of webGL

  function updateTriangleVertices() {
    let slider1xValue = parseFloat(document.getElementById("slider1x").value);
    let slider1yValue = parseFloat(document.getElementById("slider1y").value);
    let slider2xValue = parseFloat(document.getElementById("slider2x").value);
    let slider2yValue = parseFloat(document.getElementById("slider2y").value);
    let slider3xValue = parseFloat(document.getElementById("slider3x").value);
    let slider3yValue = parseFloat(document.getElementById("slider3y").value);

    // Update triangle Object vertices based on slider values
    triangleVertices = [
      slider1xValue,
      slider1yValue,
      1.0,
      1.0,
      0.0,
      slider2xValue,
      slider2yValue,
      0.7,
      0.0,
      1.0,
      slider3xValue,
      slider3yValue,
      0.1,
      1.0,
      0.6,
    ];

    // Update buffer data
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(triangleVertices),
      gl.STATIC_DRAW
    );
  }

  function draw() {
    // ... (your existing draw code)
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
};