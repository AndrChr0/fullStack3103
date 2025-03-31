import '../App.css'

function ListItem({titleText="default text", completed=false}){

    return(
        <div className='list-item'>

            <h2
            style={completed ? {color: 'green'} : {color: 'red'}}
            >{titleText}</h2>

        
        </div>
    )

}


export default ListItem