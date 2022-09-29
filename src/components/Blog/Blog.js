import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blogs'>
            <h1>Articles</h1>
            <div className="blog-container">
                <div className="blog">
                    <h2>How Does ReactWork ?</h2>
                    <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.</p>
                </div>
                <div className="blog">
                    <h2>What are the differences between state and props ?</h2>
                    <p>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.</p>
                </div>
                <div className="blog">
                    <h2>What are the uses of "useEffect" ?</h2>
                    <p>The useEffect Hook allows you to perform side effects in your components.Along with fetching data some examples of side effects are:  directly updating the DOM, and timers. useEffect accepts two arguments.One is a callback function and another is the dependency.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;