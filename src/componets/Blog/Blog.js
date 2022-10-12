import React from 'react';

const Blog = () => {
    return (
        <div className='md:mx-auto p-10 bg-zinc-500 mt-24'>
                <p className='font-bold text-2xl mb-10 text-center'> Some Questions</p>
                <div id="accordion-collapse" data-accordion="collapse">
                    <h2 id="accordion-collapse-heading-1">
                        <button type="button"
                            className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800  text-gray-900 dark:text-white"
                            data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                            aria-controls="accordion-collapse-body-1">
                            <span>What is the purpose of React Router?</span>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 ">
                            <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                        </div>
                    </div>

                    <h2 id="accordion-collapse-heading-2">
                        <button type="button"
                            className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800  text-gray-900 dark:text-white"
                            data-accordion-target="#accordion-collapse-body-2" aria-expanded="true"
                            aria-controls="accordion-collapse-body-2">
                            <span>How does Context API work?</span>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-2" aria-labelledby="accordion-collapse-heading-2">
                        <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 ">
                            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management.</p>
                        </div>
                    </div>

                    <h2 id="accordion-collapse-heading-3">
                        <button type="button"
                            className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800  text-gray-900 dark:text-white"
                            data-accordion-target="#accordion-collapse-body-3" aria-expanded="true"
                            aria-controls="accordion-collapse-body-3">
                            <span>What is useRef in React?</span>

                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" aria-labelledby="accordion-collapse-heading-3">
                        <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 ">
                            <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                        </div>
                    </div>

                </div>
            </div>
    );
};

export default Blog;