import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Setting from "./Setting";
import Logout from "./Logout";

import {
FiHome,
FiUsers,
FiBriefcase,
FiUserPlus,
FiSettings,
FiLogOut,
} from "react-icons/fi";

import { FaBuilding } from "react-icons/fa";

const Sidebar=()=>{

const [openSetting,setOpenSetting]=
useState(false);

const [openLogout,setOpenLogout]=
useState(false);


const navLinkStyle=({isActive})=>

`

flex
items-center
gap-3

px-4
py-3
mx-2

rounded-xl

transition-all
duration-300

text-gray-700
dark:text-white/90

hover:bg-blue-100
dark:hover:bg-blue-700/40

hover:text-blue-700
dark:hover:text-white

${
isActive
?
"bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
:
""
}

`;


return(

<>

<div

className="

no-scrollbar

min-h-full
w-[200px]

bg-white
dark:bg-gradient-to-br
dark:from-slate-950
dark:via-blue-950
dark:to-slate-900

border-r

border-gray-300
dark:border-white/10

transition-all
duration-500

"

>

{/* Logo */}

<div

className="

h-[90px]

flex
items-center

px-5

border-b

border-gray-300
dark:border-white/10

"

>

<img
src="/job-portal.png"
alt="logo"
className="
w-[45px]
h-[45px]
rounded-xl
object-cover
"
/>


<div className="ml-3">

<h1

className="

text-black
dark:text-white

text-lg
font-bold

"

>

Carrier Path

</h1>


<p

className="

text-gray-500
dark:text-gray-400

text-xs
mt-1

"

>

ADMIN PANEL

</p>

</div>

</div>



{/* Menu */}

<div
className="
mt-6
flex
flex-col
gap-2
"
>


<NavLink
to="/"
className={navLinkStyle}
>

<FiHome className="text-xl"/>

<span
className="
text-[15px]
font-medium
"
>
Dashboard
</span>

</NavLink>



<NavLink
to="/users"
className={navLinkStyle}
>

<FiUsers className="text-xl"/>

<span
className="
text-[15px]
font-medium
"
>

Users

</span>

</NavLink>




<NavLink
to="/jobs"
className={navLinkStyle}
>

<FiBriefcase className="text-xl"/>

<span
className="
text-[15px]
font-medium
"
>

Jobs

</span>

</NavLink>




<NavLink
to="/companies"
className={navLinkStyle}
>

<FaBuilding className="text-xl"/>

<span
className="
text-[15px]
font-medium
"
>

Companies

</span>

</NavLink>




<NavLink
to="/recruiters"
className={navLinkStyle}
>

<FiUsers className="text-xl"/>

<span
className="
text-[15px]
font-medium
"
>

Recruiters

</span>

</NavLink>




<NavLink
to="/create-recruiter"
className={navLinkStyle}
>

<FiUserPlus className="text-xl"/>

<span
className="
text-[15px]
font-medium
"
>

Create Recruiter

</span>

</NavLink>




<button

onClick={()=>
setOpenSetting(true)
}

className={
navLinkStyle({
isActive:false
})
}

>

<FiSettings
className="text-xl"
/>

<span
className="
text-[15px]
font-medium
"
>

Settings

</span>

</button>




<div

onClick={()=>
setOpenLogout(true)
}

className="

flex
items-center
gap-3

px-4
py-3
mx-2

rounded-xl

cursor-pointer

text-red-500

hover:bg-red-100
dark:hover:bg-red-500/20

transition-all
duration-300

"

>

<FiLogOut
className="text-xl"
/>

<span
className="
text-[15px]
font-medium
"
>

Logout

</span>

</div>


</div>


<Setting
openSetting={openSetting}
setOpenSetting={setOpenSetting}
/>


<Logout
openLogout={openLogout}
setOpenLogout={setOpenLogout}
/>


</div>

</>

)

}

export default Sidebar