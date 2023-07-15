import "./style.scss";
import { useSpring, animated } from '@react-spring/web'
import React, { useState } from 'react'
export const Home = () => {
  const [state, toggle] = useState(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  })
  return (
    <div>
      <div className="nav_home">
        <div className="brand_intro1">
          <div>
            <h1>VIVA FLOWER - THE PLACE TO SUPPLY WAX FLOWERS</h1>
          </div>
        </div>
        <div className="brand_intro2 mt-4">
          <div style={{ fontSize: "20px" }}>
            Explore our colorful and unique floral products.
          </div>
        </div>
        <div className="nav_home-button mt-4">
          <div className="container" onClick={() => toggle(!state)}>
            <animated.div
              className="text"
              style={{
                scale: x.to({
                  range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                  output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                }),
              }}>
              <button className="contact_me">CONTACT ME</button>
            </animated.div>
          </div>

        </div>
      </div>
      <div style={{ height: "2500px" }}>hello</div>
    </div>
  )
}