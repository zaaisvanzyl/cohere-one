import React, {useState} from 'react';


const Sandbox = () => {

    const [prompt, setPrompt] = useState("Write a book");
    const [isLoading, setIsLoading] = useState(false);

    return (
    <div className='p-6 px-20'>
        <form>
            <div className="flex flex-row">
                <div className='basis-3/4 text-gray-200 bg-darkdiv rounded-2xl p-3 m-3'>
                    <div>
                        <textarea
                            name="description"
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            rows={3}
                            autoComplete="on"
                            className="appearance-none rounded-md relative block
                            w-full px-3 py-2 border border-gray-300
                            placeholder-gray-500 text-gray-900
                            focus:outline-none  focus:z-10 sm:text-sm bg-gray-100"
                            placeholder='Enter text here'
                        />
                    </div>
                    <div className="pt-3 flex">
                        <div className="w-1/2">
                            <button type="submit" className="w-auto float-left py-2 px-4 mr-3 border border-transparent text-sm font-medium
                            rounded-md text-white bg-sky-500/50 hover:bg-sky-500
                            focus:outline-none focus:ring-2 focus:ring-offset-2
                            focus:ring-indigo-500">
                                Build
                            </button>
                            {isLoading && <p className='text-gray-200 py-2'>Loading...</p>}
                        </div>
                    </div>
                </div>
                <div className='basis-1/4 text-gray-200 bg-darkdiv rounded-2xl p-6 m-3'>
                    <div>
                        <p >Previous Instruction:</p>
                    </div>
                </div>
            </div>
        </form>
    </div>
  );
};

export default Sandbox;

