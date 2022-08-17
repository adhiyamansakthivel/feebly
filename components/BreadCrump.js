import React from "react";
const BreadCrump = (props) => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-6 lg:py-8">
            <div className="container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
                <div>
                    <p className="flex items-center text-indigo-700 text-xs">
                        {props.children}
                    </p>
                </div>

            </div>
        </div>
    );
};
export default BreadCrump;
