import * as THREE from 'three';
console.log(THREE);
//Renderer
let renderer = new THREE.WebGLRenderer(
    {
        canvas: document.querySelector(".ctx"),
        antialias:true
    }
);
renderer.setClearColor(0x00AE00FF);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth/2, window.innerHeight/2);

//CAMERA
let camera = new THREE.PerspectiveCamera
(35, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.set(40,5,10);

// Scene
let scene = new THREE.Scene();

//Lights
let light = new THREE.AmbientLight(0x00B1FFE6, 0.3);
scene.add(light);

//point light => shading the front face
let light1 = new THREE.PointLight(0x00B1FFE6, 0.3);
scene.add(light1);

// Object
let geometry = new THREE.BoxGeometry(20,20,20,20,20,20);
let material = new THREE.MeshLambertMaterial(
    {
        color: 0x00003F26
    }
);
let mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0,0,-200);
scene.add(mesh);
// Text Geometry
const loader = new THREE.FontLoader();

loader.load( './helvetiker_bold.typeface.json', function ( font ) {

	const geometry = new THREE.TextGeometry( 'Hello three.js!', {
		font: font,
		size: 80,
		height: 5,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 10,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
	} );
} );

//render loop
requestAnimationFrame(render);
function render(){
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(render);

}
