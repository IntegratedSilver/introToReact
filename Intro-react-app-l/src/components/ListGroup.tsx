const ListGroup = () => {
    const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    // const message = items.length == 0 ? <p>No Items Found</p> : null;
    // items = []

    // if(items.length == 0){
    //   return
    //   <>
    //   <h1>List</h1>
    //   <p>No Items found</p>

    //   </>
    // }






  return (
    <>
        <h1>List</h1>
        {}
    <ul className="list-group">
       {items.map((item,index)=> (
       <li className="list-group-item" key={index}>
        {item}
        </li>
       ))}
       </ul>
    </>
  );
};

export default ListGroup;