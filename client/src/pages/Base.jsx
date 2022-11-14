import React, {useState} from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';


const Sandbox = () => {

    const [input, setInput] = useState("import React from 'react'\n\nconst Home = () => {\n\n  return (\n    <div>\n        <p>Home</p>\n    </div>\n  )\n}\n\nexport default Home\n");
    const [instruction, setInstruction] = useState("Add a button under the text 'Home' that says 'Click Me'");
    const [isLoading, setIsLoading] = useState(false);
    const [language, setLanguage] = useState('js');
    const [previousInstruction, setPreviousInstruction] = useState('');
    const [explainCodeResult, setExplainCodeResult] = useState('');

    async function submitSandbox(e) {
        e.preventDefault()
        setIsLoading(true)
        const response = await fetch ('https://swe-jarvis-one-a.herokuapp.com/api/sandbox', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify({ input: input, instruction: instruction })
        });
        const result = await response.json();
        setInput(result)
        setPreviousInstruction(instruction)
        setInstruction('')
        setIsLoading(false)
    }

    async function submitExplainCode(e) {
        e.preventDefault()
        setIsLoading(true)
        const response = await fetch ('https://swe-jarvis-one-a.herokuapp.com/api/explaincode', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: input })
        });
        const explainCodeData = await response.json();
        setExplainCodeResult(explainCodeData)
        setIsLoading(false)
    }
  
    return (
    <div className='p-6 px-20'>
        <form onSubmit={submitSandbox}>
            <div className='flex flex-row'>
                <div className="basis-3/4 text-gray-200 bg-darkdiv rounded-2xl p-3 m-3">
                    <div className="bg-gray-100 appearance-none rounded-md relative block
                        w-full border border-gray-300
                        placeholder-gray-500 text-gray-900
                        focus:outline-none  focus:z-10 sm:text-sm">
                        <CodeEditor
                            value={input}
                            language={language}
                            placeholder="Please enter a function"
                            onChange={(e) => setInput(e.target.value)}
                            padding={15}
                            style={{
                                fontFamily:
                                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                                fontSize: 14,
                            }}
                        />
                    </div>
                    <div className="pt-3 flex">
                        <div className="w-1/2">
                            <button onClick={submitExplainCode} className="w-auto float-left py-2 px-4 mr-3 border border-transparent text-sm font-medium
                            rounded-md text-white bg-sky-500/50 hover:bg-sky-500
                            focus:outline-none focus:ring-2 focus:ring-offset-2
                            focus:ring-indigo-500">
                                Explain code
                            </button>
                        </div>
                    </div>
                    {/* <div className="pt-3 flex">
                        <div className="w-1/2">
                            <button type="submit" className="w-auto float-left py-2 px-4 mr-3 border border-transparent text-sm font-medium
                            rounded-md text-white bg-sky-500/50 hover:bg-sky-500
                            focus:outline-none focus:ring-2 focus:ring-offset-2
                            focus:ring-indigo-500">
                                Copy
                            </button>
                            <button onClick={() => setInput("")} className="w-auto float-left py-2 px-4 border border-transparent text-sm font-medium
                            rounded-md text-white bg-gray-500 hover:bg-sky-500
                            focus:outline-none focus:ring-2 focus:ring-offset-2
                            focus:ring-indigo-500">
                                Clear
                            </button>
                        </div>
                    </div> */}
                </div>
                <div className="basis-1/4 text-gray-200 bg-darkdiv rounded-2xl p-6 m-3">
                    <div>
                        <div className='y-3'>
                            <p className="py-3 text-md">Select Language</p>
                            <select
                                onChange={(e) => setLanguage(e.target.value)}
                                id="api"
                                name="api"
                                className="w-full py-3 mt-1 text-black rounded-md border border-gray-300 bg-gray-200 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                <option value={"js"}>JavaScript</option>
                                <option value={"python"}>Python</option>
                                <option value={"java"}>Java</option>
                                <option value={"C++"}>C++</option>
                                <option value={"rust"}>Rust</option>
                                <option value={"go"}>Go</option>
                            </select>
                        </div>
                        <div className='pt-3'>
                        <p className="py-1 text-md">Code explanation:</p>
                        {explainCodeResult && <p className='text-gray-200 py-2'>{explainCodeResult}</p>}
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="flex flex-row">
                <div className='basis-3/4 text-gray-200 bg-darkdiv rounded-2xl p-3 m-3'>
                    <div>
                        <textarea
                            name="description"
                            type="text"
                            value={instruction}
                            onChange={(e) => setInstruction(e.target.value)}
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
                        {previousInstruction && <p>{previousInstruction}</p>}
                    </div>
                    
                </div>
            </div>
        </form>
    </div>
  );
};

export default Sandbox;

