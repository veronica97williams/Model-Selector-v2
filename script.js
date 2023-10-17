// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('model-container').appendChild(renderer.domElement);

// Load your 3D model using Three.js
const loader = new THREE.GLTFLoader();
let model;

loader.load('Hershey Models/Hershey.Astronaut.glb', (gltf) => {
    model = gltf.scene;
    model.scale.set(1, 1, 1); // Adjust scale if needed
    scene.add(model);
});

// Initialize button elements
const showButton = document.getElementById('show-model');
const hideButton = document.getElementById('hide-model');

// Set initial visibility
let isModelVisible = false;

// Function to toggle model visibility
function toggleModelVisibility() {
    if (isModelVisible) {
        model.visible = false;
        isModelVisible = false;
    } else {
        model.visible = true;
        isModelVisible = true;
    }
}

// Event listeners for buttons
showButton.addEventListener('click', toggleModelVisibility);
hideButton.addEventListener('click', toggleModelVisibility);

// Animation/rendering loop (optional)
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
