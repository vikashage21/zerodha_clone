import React from 'react'

const RightSection = ({
  imageUrl,
  heading,
  para,
  demoLink,
  learnLink,
}) => {
  return (
    <div className='container '>
      <div className='row p-5'>

        <div className="col-6">

          <h1 className='fs-3 mb-3 text-muted'>
            {
              heading
            }
          </h1>
          <p className='text-muted' style={{
            lineHeight: "30px"
          }}>
            {
              para
            }
            <div >
              <a className='text-decoration-none mx-2' href={demoLink} >Try demo → </a>
              <a className='text-decoration-none' href={learnLink} >learn more →</a>

            </div>
            
          </p>

        </div>
        <div className="col-6 ">
          <img src={imageUrl} className='mb-5' alt="" />

        </div>
      </div>


    </div>
  )
}

export default RightSection
