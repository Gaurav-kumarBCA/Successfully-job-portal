import React, { useState, useEffect } from "react";
import { FiSearch, FiBell, FiMenu } from "react-icons/fi";
import { FaUser, FaBuilding } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { io } from "socket.io-client";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {

const navigate=useNavigate();

const [open,setOpen]=useState(false);

const {user}=useAuth();

const [show,setShow]=useState(false);

const [search,setSearch]=useState("");

const [result,setResult]=useState({
users:[],
jobs:[],
companies:[],
recruiters:[]
});

const [notificationCount,setNotificationCount]=
useState(
Number(
localStorage.getItem(
"notificationCount"
)
)||0
);


// ================= SEARCH =================

const handleNavigate=(type,id)=>{

if(type==="user"){
navigate(`/users`)
}

if(type==="job"){
navigate(`/jobs`)
}

if(type==="company"){
navigate(`/companies`)
}

if(type==="recruiter"){
navigate(`/recruiters`)
}

setShow(false);
setSearch("");

}


useEffect(()=>{

const getSearch=async()=>{

if(search.trim()===""){

setShow(false);

setResult({
users:[],
jobs:[],
companies:[],
recruiters:[]
});

return;

}

try{

const url=
import.meta.env.VITE_SERVER_URL;

const res=await fetch(
`${url}/admin/search/search/admin?search=${search}`,
{
method:"GET",
credentials:"include",
headers:{
"Content-Type":"application/json"
}
}
);

const data=
await res.json();

if(data.success){

setResult(data.data);

setShow(true);

}

}catch(error){

console.log(error);

}

};

const timer=
setTimeout(()=>{

getSearch()

},500);

return ()=>clearTimeout(timer);

},[search]);


// SOCKET

useEffect(()=>{

const socket=
io("https://successfully-job-portal-backend.onrender.com");

socket.on(
"newRecruiterApply",
(data)=>{

const oldNotifications=

JSON.parse(
localStorage.getItem(
"notifications"
)
)||[];

const updatedNotifications=[

{
...data,
id:Date.now()
},

...oldNotifications

];

localStorage.setItem(
"notifications",
JSON.stringify(
updatedNotifications
)
);

localStorage.setItem(
"notificationCount",
updatedNotifications.length
);

setNotificationCount(
updatedNotifications.length
);

window.dispatchEvent(
new Event("storage")
);

toast(

<div className="flex gap-3 items-start">

<div
className="
w-10
h-10
rounded-full
bg-blue-600
flex
items-center
justify-center
text-white
"
>

🔔

</div>

<div>

<h2 className="font-bold">

New Recruiter

</h2>

<p>

<b>{data.name}</b> from
<b>{data.company}</b> applied

</p>

</div>

</div>

)

}
)

return ()=>{

socket.disconnect()

}

},[])


useEffect(()=>{

const sync=()=>{

setNotificationCount(

Number(
localStorage.getItem(
"notificationCount"
)
)||0

)

}

window.addEventListener(
"storage",
sync
)

return ()=>{

window.removeEventListener(
"storage",
sync
)

}

},[])



return (

<>

<div

className="

w-full
h-[60px]
md:h-[80px]

bg-white
dark:bg-gradient-to-br
dark:from-slate-950
dark:via-blue-950
dark:to-slate-900

border-b
border-gray-300
dark:border-slate-800

flex
items-center
justify-between

px-3
md:px-6

transition-all
duration-500

"

>

{/* menu */}

<div
onClick={()=>
setOpen(true)
}
className="md:hidden"
>

<FiMenu
className="
text-black
dark:text-white
text-xl
"
/>

</div>


{/* SEARCH */}

<div className="relative w-[50%] md:w-[350px]">

<div

className="

flex
items-center

w-full
h-[42px]

bg-gray-200
dark:bg-white/10

rounded-xl

px-3

border
border-transparent

focus-within:border-blue-500
focus-within:shadow-lg
focus-within:shadow-blue-500/20

transition-all
duration-300

"

>

<FiSearch

className="
text-black
dark:text-white
text-lg
"

/>

<input

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

placeholder="Search anything..."

className="

w-full
ml-2

bg-transparent
outline-none

text-black
dark:text-white

placeholder:text-gray-500
dark:placeholder:text-gray-300

"

/>

</div>


{/* PREMIUM RESULT */}

{

show && (

<div

className="

absolute
top-14
left-0

w-full
md:w-[500px]

bg-white/95
dark:bg-slate-900/95

backdrop-blur-xl

border
border-gray-200
dark:border-slate-700

rounded-2xl

shadow-2xl

max-h-[400px]
overflow-y-auto

z-50

p-3

"

>

{/* USERS */}

{
result.users?.map((item)=>(

<div
key={item.id}

onClick={()=>
handleNavigate(
"user",
item.id
)
}

className="

flex
items-center
gap-3

p-3

rounded-xl

cursor-pointer

hover:bg-gray-100
dark:hover:bg-slate-800

transition-all

"

>

<div
className="
w-10
h-10
rounded-full
bg-blue-500
text-white
flex
items-center
justify-center
"
>

<FaUser/>

</div>

<div>

<p className="font-semibold text-black dark:text-white">

{item.name}

</p>

<p className="text-xs text-gray-500">

{item.email}

</p>

</div>

</div>

))
}



{/* JOBS */}

{
result.jobs?.map((item)=>(

<div
key={item.id}

onClick={()=>
handleNavigate(
"job",
item.id
)
}

className="

flex
items-center
gap-3

p-3

rounded-xl

cursor-pointer

hover:bg-gray-100
dark:hover:bg-slate-800

transition-all

"

>

<div
className="
w-10
h-10
rounded-full
bg-green-500
text-white
flex
items-center
justify-center
"
>

<MdWork/>

</div>

<div>

<p className="font-semibold text-black dark:text-white">

{item.job_name}

</p>

<p className="text-xs text-gray-500">

{item.company?.company_name}

</p>

</div>

</div>

))
}



{/* COMPANIES */}

{
result.companies?.map((item)=>(

<div
key={item.id}

onClick={()=>
handleNavigate(
"company",
item.id
)
}

className="

flex
items-center
gap-3

p-3

rounded-xl

cursor-pointer

hover:bg-gray-100
dark:hover:bg-slate-800

transition-all

"

>

<div
className="
w-10
h-10
rounded-full
bg-purple-500
text-white
flex
items-center
justify-center
"
>

<FaBuilding/>

</div>

<div>

<p className="font-semibold text-black dark:text-white">

{item.company_name}

</p>

<p className="text-xs text-gray-500">

{item.location}

</p>

</div>

</div>

))
}

{
result.users.length===0 &&
result.jobs.length===0 &&
result.companies.length===0 &&
result.recruiters.length===0 && (

<h1 className="text-center text-gray-400 p-5">

No Result Found

</h1>

)
}

</div>

)

}

</div>



{/* RIGHT */}

<div
className="
flex
items-center
gap-4
"
>

<NavLink to="/notification">

<button

className="

relative

w-[42px]
h-[42px]

rounded-full

bg-gray-200
dark:bg-white/10

flex
items-center
justify-center

"

>

<FiBell
className="
text-black
dark:text-white
"
/>

{
notificationCount>0 && (

<span

className="

absolute
-top-1
-right-1

w-5
h-5

rounded-full

bg-red-500

flex
items-center
justify-center

text-xs
text-white

"

>

{notificationCount}

</span>

)
}

</button>

</NavLink>

<div
className="
flex
items-center
gap-3
"
>

<div

className="

w-10
h-10

rounded-full

bg-blue-600

flex
items-center
justify-center

text-white
font-bold
text-lg

"

>

{user?.name
?.charAt(0)
.toUpperCase()
||"A"}

</div>

<div
className="
hidden
sm:flex
flex-col
"
>

<p
className="
text-black
dark:text-white
text-sm
font-semibold
"
>

{user?.name||"Admin"}

</p>

<span
className="
text-gray-500
text-xs
"
>

Administrator

</span>

</div>

</div>

</div>

<MobileSidebar
open={open}
setOpen={setOpen}
/>

</div>

</>

)

};

export default Navbar;