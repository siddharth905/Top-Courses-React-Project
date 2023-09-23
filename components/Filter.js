import react from 'react';
function Filter(props){
    const filterData=props.filterData;
    const arr= filterData.map((data) => 
    <button>{data.title}</button>
    );
    return(
        <div>
             <h1>Inside Filter</h1>
            <div>{arr}</div>
            
        </div>
    );
}
export default Filter;