import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
`;

export function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let box: THREE.Mesh;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      camera.position.setZ(50);

      const ambl = new THREE.AmbientLight(0x97ed8a);
      scene.add(ambl);

      box = new THREE.Mesh(
        new THREE.BoxGeometry(4, 4, 4),
        new THREE.MeshBasicMaterial({ color: 0x97ed8a })
      );

      box.scale.set(3, 3, 3);
      scene.add(box);

      animate();
    };

    const animate = () => {
      requestAnimationFrame(animate);

      box.rotation.y += 0.01;
      box.rotation.x += 0.01;
      box.rotation.z += 0.01;

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (ev: MouseEvent) => {
      let changeX = ev.x - oldX;
      let changeY = ev.y - oldY;
      camera.position.x += changeX / 90;
      camera.position.y -= changeY / 90;

      oldX = ev.x;
      oldY = ev.y;
    };

    let oldX = 0;
    let oldY = 0;

    init();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <Canvas ref={canvasRef} id="bg" />;
}

export default Home;
