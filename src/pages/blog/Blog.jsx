import React, { useState } from 'react';
import './Blog.css';
import { motion, AnimatePresence } from 'framer-motion';

const Blog = () => {
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [displayBlogContent, setDisplayBlogContent] = useState(false);

    const handleReadMoreClick = () => {
        setDisplayBlogContent(true);
    };

    const handleLeaveCommentClick = () => {
        setShowCommentForm(!showCommentForm);
    };

    return (
        <div className="blog-container">
            <div className="blog-header">
                <motion.img
                    src="https://via.placeholder.com/1200x600"
                    alt="Blog Header"
                    className="blog-header-image"
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.h1
                    className="blog-header-title"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    भारत में सौरऊर्जा सब्सिडी ! 2024
                </motion.h1>
            </div>
            <div className="blog-post">
                <p className="blog-post-meta">
                    <motion.span
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        onClick={handleLeaveCommentClick}
                    >
                        Leave a Comment
                    </motion.span>{' '}
                    /{' '}
                    <motion.span
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Blog
                    </motion.span>{' '}
                    /{' '}
                    <motion.span
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        By neovoltev.com
                    </motion.span>
                </p>
                <AnimatePresence>
                    {displayBlogContent ? (
                        <motion.div
                            className="blog-content"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src="https://via.placeholder.com/800x500"
                                alt="Blog Content"
                                className="blog-content-image"
                            />
                            {/* Add your blog content here */}
                        </motion.div>
                    ) : (
                        <motion.button
                            className="read-more-btn"
                            onClick={handleReadMoreClick}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Read More
                        </motion.button>
                    )}
                </AnimatePresence>
                {/* <motion.button
                    className="leave-comment-btn"
                    onClick={handleLeaveCommentClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Leave a Comment
                </motion.button> */}
                <AnimatePresence>
                    {showCommentForm && (
                        <motion.div
                            className="comment-form"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3>Leave a Comment</h3>
                            <form>
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        placeholder="Message"
                                        rows="5"
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Website"
                                    />
                                </div>
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="saveInfoCheckbox"
                                    />
                                    <label className="form-check-label" htmlFor="saveInfoCheckbox">
                                        Save my name, email, and website in this browser for the next
                                        time I comment.
                                    </label>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="post-comment-btn"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Post Comment
                                </motion.button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Blog;