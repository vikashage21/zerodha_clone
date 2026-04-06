import React from 'react'

const Left = ({
  imageUrl,
  heading,
  para,
  demoLink,
  learnLink,
}) => {
  return (
    <div className='container  p-5'>
      <div className='row p-5'>
        <div className="col-6">
          <img src={imageUrl} className='mr-5' alt="" />

        </div>
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
              <a  className='text-decoration-none mx-2' href={demoLink} >Try demo → </a>
              <a className='text-decoration-none' href={learnLink} >learn more →</a>

            </div>
            <div className='row mt-5'>
              <div className='col-3'>
                <img src="media/image/googlePlayBadge.svg" alt="" />
              </div>
              <div className='col'>
                <img src="media\image\appstoreBadge.svg" alt="" />
              </div>

            </div>
          </p>

        </div>
      </div>

    </div>
  )
}

export default Left
