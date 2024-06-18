import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

const myimage={
  borderRadius:"30px",

}
export default function Post({_id,title,summary,cover,content,createdAt,author}) {

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/'+cover} alt="" style={myimage}/>
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
        <h2 className=" bg-violet-400 inline px-1.5 py-1 text-white rounded-md hover:text-black">{title}</h2>
        </Link>
        <p className="info">
          <a className="author text-red-700"> Created By {author.username}</a>     
          <time> On {formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}