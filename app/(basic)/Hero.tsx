'use client'

import { Canvas } from '@react-three/fiber'
import { animated, useSpring } from '@react-spring/three'
import { ComponentProps, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const Box = () => {
  const pathname = usePathname()
  const ref = useRef(0)

  useEffect(() => {
    ref.current += Math.PI * 2
  }, [pathname])

  const { rotation } = useSpring<ComponentProps<'mesh'>>({
    rotation: [0, ref.current, 0],
  })

  return (
    <animated.mesh rotation={rotation}>
      <boxGeometry args={[2, 2, 2]} />
      <meshNormalMaterial />
    </animated.mesh>
  )
}

export const Hero = () => {
  return (
    <div className={'bg-write bg-opacity-10'}>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <scene>
          <Box />
        </scene>
      </Canvas>
    </div>
  )
}
