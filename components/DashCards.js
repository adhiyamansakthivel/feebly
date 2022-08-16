import React from 'react';

export default function DashCards(props) {
  return (
    <div className="container mx-auto flex flex-wrap px-6 pt-10">
             
    {/* Remove class [ h-64 ] when adding a card block */}
    {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}

           
 
    <section className="w-full md:w-2/3 flex flex-col items-center px-3">

        {/* blog start */}
            {props.children}
        {/* end blog */}
        

    </section>

    <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
        <div className="col-start-1 col-span-3 py-4 px-4 w-full flex justify-between bg-violet-700 gap-3.5" >
            <p className="text-sm text-white font-semibold tracking-wide">Recent</p>
        </div>

       
        <div className="pt-10">
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-md hover:rounded-2xl">
                <img src="https://tailus.io/sources/blocks/twocards/preview/images/man.jpg" alt="art cover" loading="lazy" width="1000" height="667" className="h-34 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                <div className="sm:w-7/12 pl-0 p-5">
                    <div className="space-y-2">
                        <div className="space-y-4">
                            <h4 className="text-md font-semibold text-cyan-900">Provident de illo eveniet commodi fuga fugiat laboriosam expedita.</h4>
                        </div>
                        <a href="www.tailus.io" className="block w-max text-cyan-600">Read more</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="pt-10">
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-md hover:rounded-2xl">
                <img src="https://tailus.io/sources/blocks/twocards/preview/images/man.jpg" alt="art cover" loading="lazy" width="1000" height="667" className="h-34 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                <div className="sm:w-7/12 pl-0 p-5">
                    <div className="space-y-2">
                        <div className="space-y-4">
                            <h4 className="text-md font-semibold text-cyan-900">Provident de illo eveniet commodi fuga fugiat laboriosam expedita.</h4>
                        </div>
                        <a href="www.tailus.io" className="block w-max text-cyan-600">Read more</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="pt-10">
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-md hover:rounded-2xl">
                <img src="https://tailus.io/sources/blocks/twocards/preview/images/man.jpg" alt="art cover" loading="lazy" width="1000" height="667" className="h-34 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                <div className="sm:w-7/12 pl-0 p-5">
                    <div className="space-y-2">
                        <div className="space-y-4">
                            <h4 className="text-md font-semibold text-cyan-900">Provident de illo eveniet commodi fuga fugiat laboriosam expedita.</h4>
                        </div>
                        <a href="www.tailus.io" className="block w-max text-cyan-600">Read more</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="pt-10">
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-md hover:rounded-2xl">
                <img src="https://tailus.io/sources/blocks/twocards/preview/images/man.jpg" alt="art cover" loading="lazy" width="1000" height="667" className="h-34 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                <div className="sm:w-7/12 pl-0 p-5">
                    <div className="space-y-2">
                        <div className="space-y-4">
                            <h4 className="text-md font-semibold text-cyan-900">Provident de illo eveniet commodi fuga fugiat laboriosam expedita.</h4>
                        </div>
                        <a href="www.tailus.io" className="block w-max text-cyan-600">Read more</a>
                    </div>
                </div>
            </div>
        </div>
        
       

       

    </aside>


</div>
  )
}
