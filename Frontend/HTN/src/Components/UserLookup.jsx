import React, {useState} from "react";
import InputBar from "./InputBar";

function UserLookup(){
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = ()=>{

    }
    const onClearSearch = ()=>{
        setSearchQuery("");
    }
    return(
        <div className="lookUpContainer">
        <h2 className="lookUpTitle">Users</h2>
        <InputBar 
        value = {searchQuery} 
        onChange={({target})=>{
            setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}/>
    </div>
    )
}

export default UserLookup