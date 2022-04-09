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


function Files({grid}) {
    const [file, setFile] = useState([]);
    const FILE_API = `https://619f39821ac52a0017ba467e.mockapi.io/Files`;

    useEffect(() => {
        fetch(FILE_API).then(res => res.json())
        .then(file => console.log(file[1]))
    }, [])
  
    return (
        <div className="App_files">
            <div className="App_file-header">
                <h3>Files/Documents</h3>
                <SubLink style={{color: "blue"}} text="Add Files" icon={<MdOutlineNoteAdd />} />
            </div>

            <div className="App_files-content">
                {
             file.map(file => {
                    return (
                        <div className="single_file">
                            <SubLink text={file.name} icon={<BsTrash />} subicon={<MdOutlineDownloadForOffline />}/>
                        </div>
                    )   
                    })
                }

                <div className="single_file">
                    <SubLink text="Check Up Result.pdf" icon={<CgNotes />} />
                    <SubLink icon={<MdOutlineDownloadForOffline />} subicon={<BsTrash />} />
               </div>
                <div className="single_file">
                    <SubLink text = "RDT Result.pdf"
                    icon = {
                        <CgNotes / >
                    }
                    />
                    <SubLink icon={
                        < MdOutlineDownloadForOffline />
                    }
                    subicon = {
                        <BsTrash />
                    }
                    />
               </div>
                <div className="single_file">
                    
                    <SubLink text = "Prescribtion Result.pdf"
                    icon = {
                        <CgNotes />
                    }
                    /> <SubLink icon = {
                        <MdOutlineDownloadForOffline />
                    }
                    subicon = {
                        <BsTrash/>
                    }
                    />
               </div>
            </div>
        </div>
    )
}
export default Files