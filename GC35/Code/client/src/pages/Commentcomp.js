import React from 'react'

const Commentcomp = (props) => {
  return (
    <div className="max-w-sm px-3 mr-3 flex items-center bg-red-200 rounded-md space-x-3 mt-2">
      <div>
        <img
          className="w-14 h-14 rounded-lg"
          src="https://imgs.search.brave.com/82QXLwOxyZgfgm7aE7chjs5vnVyv7wDngFssRq1xAZo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMy9Cb3kt/QXZhdGFyLVBORy1Q/aWN0dXJlLnBuZw"
          alt="not found"
        ></img>
      </div>
      <div>
        <div className="text-medium font-medium text-black">
            {props.user}
            <p className=" text-slate-500">{props.msg}</p>
        </div>
      </div>
    </div>
  )
}

export default Commentcomp