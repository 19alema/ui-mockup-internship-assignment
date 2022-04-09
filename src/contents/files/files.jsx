import React, {useEffect, useState} from 'react'
import "./file.css"
import SubLink from "../../components/subLinks/subling";
import {
    CgNotes
} from 'react-icons/cg'
import {
    MdOutlineNoteAdd, MdOutlineDownloadForOffline
} from "react-icons/md"
import {
    BsTrash
} from 'react-icons/bs'


function Files({ grid }) {
    // STATE TO HOLD FILES AFTER SUCCESS REQUEST
    const [file, setFile] = useState([]);
    const FILE_API = `https://619f39821ac52a0017ba467e.mockapi.io/Files`;

    useEffect(() => {
        fetch(FILE_API).then(res => res.json())
        
        // Incase the api has not been fetched, error will be logged in the console
        .catch(err => {
            console.log(err.message)
        })
            // Just logged out the result of the api but not visible on the page
        .then(file => console.log(file[1]))
    }, [FILE_API])
  
    return (
        <div className="App_files">
            <div className="App_file-header">
                <h3>Files/Documents</h3>
                <SubLink
                    style={{ color: "blue" }}
                    text="Add Files"
                    icon={<MdOutlineNoteAdd />}
                />
            </div>
            <div className="App_files-content">

                {/* The api had no clear information that can be implemented on the App */}

                {
             file.map(file => {
                    return (
                        <div className="single_file">
                            <SubLink
                                text={file.name}
                                icon={<BsTrash />}
                                subicon={<MdOutlineDownloadForOffline />}
                            />
                        </div>
                    )   
                    })
                }
                {/* I have hand coded the files */}

                <div className="single_file">
                      {   /* This component has the file name and details */ }
                    <SubLink
                        text="Check Up Result.pdf"
                        icon={<CgNotes />}
                    />
                      {    /* This component has the action icons */ }
                    <SubLink
                        icon={<MdOutlineDownloadForOffline />}
                        subicon={<BsTrash />}
                    />
                </div>
                
                <div className="single_file">
                    { /* This component has the file name and details */ }
                    <SubLink
                        text="RDT Result.pdf"
                        icon = { <CgNotes />}
                    />

                    {/* This component is for the trash and download icons */}
                    <SubLink
                        icon={ <MdOutlineDownloadForOffline />}
                        subicon = {<BsTrash />}
                    />
               </div>
                <div className="single_file">
                    { /* This component has the file name and details */ }
                    <SubLink
                        text="Prescribtion Result.pdf"
                        icon = {<CgNotes /> }
                    />
                 {  /* This component is for the trash and download icons */ }
                    <SubLink
                        icon={ <MdOutlineDownloadForOffline />}
                        subicon = {  <BsTrash/>}
                    />
               </div>
            </div>
        </div>
    )
}
export default Files