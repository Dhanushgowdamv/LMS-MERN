import { Outlet } from "react-router-dom"

function StudentViewCommonlayout(){
    return (
        <div>
            common form
            <Outlet/>
        </div>
    )
}

 export default StudentViewCommonlayout