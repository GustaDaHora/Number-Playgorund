import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';

// Declare module 'three' to resolve the TypeScript error
declare module 'three';

const Body = styled.div`
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
    margin-top: 60px;
  }

  canvas {
    position: fixed;
    top: 0;
    left: 0;
  }
`;

export function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Create the scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10
    );

    // Create the renderer and set up the canvas
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Set camera position
    camera.position.setZ(50);

    // Create ambient light
    const ambientLight = new THREE.AmbientLight(0xffffffff);
    scene.add(ambientLight);

    // Create a box mesh
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const box = new THREE.Mesh(geometry, material);
    box.scale.set(3, 3, 3);
    scene.add(box);

    // Render the scene with the camera
    function animate() {
      box.rotation.y += 0.01;
      box.rotation.x += 0.01;
      box.rotation.z += 0.01;

      renderer.render(scene, camera);

      requestAnimationFrame(animate);
    }

    animate();

    // Update renderer and camera on window resize
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    // Handle mouse movement
    let oldX = 0;
    let oldY = 0;

    function handleMouseMove(ev: MouseEvent) {
      let changeX = ev.x - oldX;
      let changeY = ev.y - oldY;

      camera.position.x += changeX / 100;
      camera.position.y -= changeY / 100;

      oldX = ev.x;
      oldY = ev.y;
    }

    window.onmousemove = handleMouseMove;

    return () => {
      window.removeEventListener('resize', handleResize);
      window.onmousemove = null;
    };
  }, []);

  return (
    <Body>
      <div id="app"></div>
      <canvas id="bg" ref={canvasRef}></canvas>
    </Body>
  );
}
