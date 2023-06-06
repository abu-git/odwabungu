import React from 'react'

function Interview() {
  return (
    <div className='bg-sky-50 px-10 py-9'>
        <div name="interview"></div>
        <h4 className='text-xl font-bold text-center py-4'>Keith Ngesi Interview</h4>

        <div className='mt-7 max-w-xl mx-auto'>
            <iframe className="w-full aspect-video rounded-md" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkeithngesiradio%2Fvideos%2F342190614184305%2F&show_text=false&width=560&t=0" width="560" height="314" style={{ border:'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
        </div>
    </div>
  )
}

export default Interview