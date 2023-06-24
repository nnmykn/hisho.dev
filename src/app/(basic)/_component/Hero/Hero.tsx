'use client'

import { animated, useSpring } from '@react-spring/three'
import { Canvas } from '@react-three/fiber'
import { usePathname } from 'next/navigation'
import { ComponentProps, useEffect, useRef } from 'react'

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
    <div className={'bg-write/10'}>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <spotLight angle={0.15} penumbra={1} position={[10, 10, 10]} />
        <scene>
          <Box />
        </scene>
      </Canvas>
    </div>
  )
}
