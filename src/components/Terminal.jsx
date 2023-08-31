import {React, useState, useEffect, useRef} from "react"
// import Resume from './Resume'
import resume from '../data/resume'
// import Resumeitem from './Resumeitem'

function Resumeitem(props) {
    return (
        <div className="resumeItem">
            <h6>{props.title}</h6>
            <h6>{props.company}</h6>
            <p>{props.role}</p>
            <p>
                {props.stack.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </p>
            <a href={props.link} target="_blank" rel="noferrer"/>
        </div>
    )
}

const Terminal = () => {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const inputRef = useRef()
    const terminal = document.getElementById("terminal")

    // not in use right now
    const Resume = () => {
        resume.map((job, index) => (
            <Resumeitem 
                key={index}
                title={job.title}
                company={job.company}
                role={job.role}
                stack={job.stack}
                link={job.link}
            />
        ))
    }

    const HandleKeyDown = (e) => {
        try {       
            if (e.key === "Enter" && terminal) {
                console.log(terminal)
                let newOutput = ""
                newOutput = output + "vistor@mmartello.com:~$ " + input + "\n"
                switch (input) {
                    case "help":
                        newOutput += "Here are a list of commands: \n"+"- help\n"+"- resume\n"+"- social\n"+"- contact\n"
                        break
                    case "resume":
                        newOutput += resume.map(job => (
                            job.title + "\n" + 
                            job.company + "\n" +
                            job.role +"\n" +
                            job.stack + "\n" +
                            job.link +"\n\n"
                        ))
                        break
                    case "social":
                        newOutput += "Click here to view my linkedin\n"
                        newOutput += "https://www.linkedin.com/in/mmartello624/"
                        break
                    case "contact":
                        newOutput += "My email:\n"+"martellom24@gmail.com"
                        break
                    case "clear":
                        newOutput += terminal.remove()
                        break
                    default:
                        newOutput += "Unknown command.\nFor a list of commands, use 'help'.\n"
                        break
                }
                setOutput(newOutput)
                setInput("")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const HandleOnChange = (e) => {
        setInput(e.target.value)
    }
    
    useEffect(()=>{
        inputRef.current.focus()
    },[])

    return (
        <div className="text-orange-300">
            <div id="terminal" className="whitespace-break-spaces text-green-300">{output}</div>
            <span id="liner" className="text-green-300"></span>
            <input 
                ref={inputRef}
                type="text"
                id="command"
                className="bg-transparent focus:outline-none focus:border-none active:border-none text-green-300"
                value={input.toLowerCase()}
                onChange={HandleOnChange}
                onKeyDown={HandleKeyDown}
            />
        </div>
    )
}

export default Terminal