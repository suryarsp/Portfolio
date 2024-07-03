import Link from 'next/link'
import React from 'react'

const BlogDetailBottomAction = () => {
  return (
    <div className="nk-blog-details-bottom-actions">
        <div className="nk-blog-details-tags nk-blog-details__post-tags">
            <h5 className="nk-blog-details-bottom-actions__title">Posted In:</h5>
            <Link href="/blog" className="nk-blog-details-tag">Business</Link>
            <Link href="/blog" className="nk-blog-details-tag">Digital</Link>
        </div>

        <div className="nk-blog-details-share">
            <h5 className="nk-blog-details-bottom-actions__title">Share:</h5>
            <div className="nk-blog-details-share-options">
                <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                <Link href="#"><i className="fa-brands fa-discord"></i></Link>
                <Link href="#"><i className="fa-brands fa-pinterest"></i></Link>
            </div>
        </div>
    </div>
  )
}

export default BlogDetailBottomAction