import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <>
            <section className="flex items-center h-full p-16">
                <Helmet>
                    <title>Error Occured!!!</title>
                </Helmet>
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-lg text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">
                            Sorry, we couldn't find this page.
                        </p>
                        <p className="mt-4 mb-8 text-gray-600">{error.data}</p>
                        <Link
                            rel="noopener noreferrer"
                            to="/"
                            className="px-8 py-3 font-semibold rounded-md bg-neutral text-gray-50"
                        >
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorPage;
