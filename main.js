var scene, camera, renderer;
var geometry, material, mesh;

init();
animate();

function init() {

    // create scene

    scene = new THREE.Scene();

    // set camera

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;

    // create triangle

    geometry = new THREE.Geometry();
    geometry.vertices[0] = new THREE.Vector3(200, 0, 0);
    geometry.vertices[1] = new THREE.Vector3(0, 200, 0);
    geometry.vertices[2] = new THREE.Vector3(0, 0, 200);
    geometry.faces[0] = new THREE.Face3(0, 1, 2);

    material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

    mesh = new THREE.Mesh(geometry, material);

    // add triangle to scene

    scene.add(mesh);

    // rendering

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function animate() {

    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render(scene, camera);
}