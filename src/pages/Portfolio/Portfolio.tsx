import { Flipped } from "react-flip-toolkit"

import { PortfolioComponent } from "./Portfolio.types"

import "./Portfolio.scss"

const Portfolio: PortfolioComponent = () => {
  return (
    <Flipped flipId='main-content'>
      <div className='portfolio'>
        <Flipped flipId={"TEST_BOX"}>
          <div className='TEST_BOX'>Portfolio</div>
        </Flipped>
        <Flipped flipId={"TEST_BOX TEST_BOX--blue"}>
          <div className='TEST_BOX TEST_BOX--blue'>Portfolio</div>
        </Flipped>
        <Flipped flipId={"TEST_BOX TEST_BOX--green"}>
          <div className='TEST_BOX TEST_BOX--green'>Portfolio</div>
        </Flipped>
        <Flipped flipId={"TEST_BOX TEST_BOX--yellow"}>
          <div className='TEST_BOX TEST_BOX--yellow'>Portfolio</div>
        </Flipped>
      </div>
    </Flipped>
  )
}

export const TEST_BOX = () => {
  return (
    <Flipped flipId='main-content'>
      <div className='portfolio'>
        <Flipped flipId={"TEST_BOX TEST_BOX--blue"}>
          <div className='TEST_BOX TEST_BOX--blue'>Portfolio</div>
        </Flipped>
        <Flipped flipId={"TEST_BOX"}>
          <div className='TEST_BOX'>Portfolio</div>
        </Flipped>
        <Flipped flipId={"TEST_BOX TEST_BOX--yellow"}>
          <div className='TEST_BOX TEST_BOX--yellow'>Portfolio</div>
        </Flipped>
        <Flipped flipId={"TEST_BOX TEST_BOX--green"}>
          <div className='TEST_BOX TEST_BOX--green'>Portfolio</div>
        </Flipped>
      </div>
    </Flipped>
  )
}
export const TEST_BOX2 = () => {
  return (
    <Flipped flipId='main-content'>
      <div className='portfolio'>
        <Flipped flipId={"TEST_BOX TEST_BOX--blue"}>
          <div className='TEST_BOX TEST_BOX--blue'>Portfolio</div>
        </Flipped>
        <Flipped flipId={"TEST_BOX TEST_BOX--yellow"}>
          <div className='TEST_BOX TEST_BOX--yellow'>Portfolio</div>
        </Flipped>
        <Flipped flipId={"TEST_BOX TEST_BOX--green"}>
          <div className='TEST_BOX TEST_BOX--green'>Portfolio</div>
        </Flipped>
      </div>
    </Flipped>
  )
}

export default Portfolio
