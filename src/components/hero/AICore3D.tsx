import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Play, Pause, Compass, Sparkles } from 'lucide-react';

export const AICore3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const isRotatingRef = useRef(true);

  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.2;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Group for entire AI Core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Computational Core (Dark metallic Icosahedron with Crimson Core)
    const coreGeo = new THREE.IcosahedronGeometry(1.1, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x141414,
      metalness: 0.88,
      roughness: 0.25,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // 1b. Core Wireframe Cage (Muted Gold)
    const wireGeo = new THREE.IcosahedronGeometry(1.12, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xC5A059,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // 1c. Internal Pulsing Crimson Core
    const innerGeo = new THREE.SphereGeometry(0.55, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x991B1B,
      transparent: true,
      opacity: 0.85,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // 2. Layered Geometric Orbital Rings
    // Ring 1 (Equatorial / Gold Accent)
    const ring1Geo = new THREE.TorusGeometry(1.85, 0.022, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xC5A059,
      metalness: 0.9,
      roughness: 0.3,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreGroup.add(ring1);

    // Ring 2 (Polar / Dark Gunmetal with Crimson Highlights)
    const ring2Geo = new THREE.TorusGeometry(2.15, 0.018, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x222222,
      metalness: 0.95,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    coreGroup.add(ring2);

    // Ring 3 (Outer Slanted Gyro Ring)
    const ring3Geo = new THREE.TorusGeometry(2.45, 0.015, 16, 120);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0x8a703d,
      metalness: 0.8,
      roughness: 0.4,
      transparent: true,
      opacity: 0.6,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = Math.PI / 2.2;
    ring3.rotation.z = Math.PI / 5;
    coreGroup.add(ring3);

    // 3. Interconnected Data Nodes on Outer Shell
    const nodeCount = 18;
    const nodeGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const nodeGoldMat = new THREE.MeshBasicMaterial({ color: 0xC5A059 });
    const nodeCrimsonMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });

    const nodesGroup = new THREE.Group();
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 1.95;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      const isCrimson = i % 4 === 0;
      const nodeMesh = new THREE.Mesh(nodeGeo, isCrimson ? nodeCrimsonMat : nodeGoldMat);
      nodeMesh.position.set(x, y, z);
      nodesGroup.add(nodeMesh);
    }
    coreGroup.add(nodesGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Crimson internal glow light
    const crimsonLight = new THREE.PointLight(0xef4444, 3.5, 8);
    crimsonLight.position.set(0, 0, 0);
    scene.add(crimsonLight);

    // Metallic brushed gold directional rim light
    const goldDirLight = new THREE.DirectionalLight(0xE5C158, 2.5);
    goldDirLight.position.set(4, 5, 4);
    scene.add(goldDirLight);

    // Cool rim light from rear
    const rimLight = new THREE.DirectionalLight(0x444455, 1.5);
    rimLight.position.set(-4, -3, -3);
    scene.add(rimLight);

    // Interactive Parallax Mouse Movement
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 1.5;
      mouseY = y * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll effect
    let scrollYOffset = 0;
    const handleScroll = () => {
      scrollYOffset = window.scrollY * 0.0008;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth damped lerp for mouse parallax
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      if (isRotatingRef.current) {
        coreGroup.rotation.y += 0.005;
        coreGroup.rotation.x = targetY + scrollYOffset + Math.sin(elapsedTime * 0.5) * 0.08;
        coreGroup.rotation.z = targetX + Math.cos(elapsedTime * 0.4) * 0.05;

        // Counter-rotations for layered gyros
        ring1.rotation.z += 0.008;
        ring2.rotation.z -= 0.006;
        ring3.rotation.y += 0.004;

        // Pulse inner crimson light
        const pulse = Math.sin(elapsedTime * 2.5) * 0.3 + 0.9;
        crimsonLight.intensity = 2.8 * pulse;
        innerMesh.scale.set(pulse * 0.95, pulse * 0.95, pulse * 0.95);
      } else {
        coreGroup.rotation.x += (targetY - coreGroup.rotation.x) * 0.05;
        coreGroup.rotation.y += (targetX - coreGroup.rotation.y) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Clean up geometries and materials
      [coreGeo, wireGeo, innerGeo, ring1Geo, ring2Geo, ring3Geo, nodeGeo].forEach((g) => g.dispose());
      [coreMat, wireMat, innerMat, ring1Mat, ring2Mat, ring3Mat, nodeGoldMat, nodeCrimsonMat].forEach((m) => m.dispose());
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] flex items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Canvas Container */}
      <div 
        ref={containerRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
        title="Interactive 3D AI Core - Move cursor to tilt"
      />

      {/* Atmospheric Background glow behind the core */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-56 h-56 rounded-full bg-crimson-900/10 blur-3xl opacity-60"></div>
        <div className="w-72 h-72 rounded-full bg-[#C5A059]/5 blur-3xl opacity-40"></div>
      </div>

      {/* Technical Metadata HUD overlay */}
      <div className="absolute top-2 left-2 z-20 pointer-events-none">
        <div className="flex items-center gap-2 px-2 py-1 bg-[#0a0a0a]/80 border border-white/10 backdrop-blur-xs font-mono text-[9px] text-[#C5A059] tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
          <span>SYS.CORE // 3D NEURAL MESH</span>
        </div>
      </div>

      <div className="absolute bottom-2 right-2 z-20 flex items-center gap-2">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className="px-2.5 py-1 bg-[#0a0a0a]/90 hover:bg-[#141414] border border-white/10 hover:border-[#C5A059]/40 text-white/70 hover:text-white transition-all text-[9px] font-mono flex items-center gap-1.5 backdrop-blur-xs cursor-pointer"
          title={isRotating ? 'Pause rotation' : 'Resume rotation'}
        >
          {isRotating ? <Pause className="w-2.5 h-2.5 text-[#C5A059]" /> : <Play className="w-2.5 h-2.5 text-emerald-400" />}
          <span>{isRotating ? 'PAUSE ROTATION' : 'RESUME'}</span>
        </button>
      </div>

      {/* Crosshair corner markers */}
      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#C5A059]/30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#C5A059]/30 pointer-events-none"></div>
    </div>
  );
};
