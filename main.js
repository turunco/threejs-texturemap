var scene, camera, renderer;
var geometry, material, mesh;

var video;

initCamera();
init();
animate();

function init() {

    // create scene

    scene = new THREE.Scene();

    // set camera

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;

    // create triangle

    geometry = new THREE.PlaneGeometry(400, 400);

    // set the texture from video

    var texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;

    material = new THREE.MeshBasicMaterial({ map: texture });
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

    mesh.rotation.z -= 0.01;

    renderer.render(scene, camera);
}

function initCamera() {
    // create video element

    video = document.createElement("video");
    video.setAttribute('width', '640');
    video.setAttribute('height', '480');
    video.autoplay = true;

    // setup camera

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
            video: true
        }).then(function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }).catch(e => {
            console.error(e);
            return;
        });
    }
}