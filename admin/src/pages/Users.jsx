import React, { useEffect, useState } from 'react'
import Layout from '../component/Layout'
import { IoArrowBack } from "react-icons/io5"
import { TailSpin, ThreeDots } from 'react-loader-spinner'
import { FaUser } from 'react-icons/fa'
import BlockedUser from '../component/BlockedUser'
import UnBlockedUser from '../component/UnBlockedUser'
import { NavLink } from 'react-router-dom'
import withAuth from '../component/withAuth'
import { useTheme } from "../hooks/useTheme";
const Users = () => {
const { darkMode } = useTheme();
const [user,setUser]=useState([]);
const [loading,setLoading]=useState(false);

const updateBlockedUser=(id)=>{
setUser((prev)=>
prev.map((item)=>
item.id===id
? {...item,is_blocked:true}
:item
)
)
}

const updateUnBlockedUser=(id)=>{
setUser((prev)=>
prev.map((item)=>
item.id===id
? {...item,is_blocked:false}
:item
)
)
}

useEffect(()=>{

const AllUsersDashboard=async()=>{

try{

setLoading(true)

const url=import.meta.env.VITE_SERVER_URL;

const res=await fetch(
`${url}/admin/block/all_users`,
{
method:"GET",
headers:{
"Content-Type":"application/json"
},
credentials:"include"
}
)

const data=await res.json();

if(data.success){

setUser(data.data || [])

}else{

setUser([])

}

}catch(error){

console.log(error)

}
finally{

setLoading(false)

}

}

AllUsersDashboard();

},[])

const filterUser=user.filter(
(item)=>item.role!=="admin"
);

if(loading){

return(

<div className='
h-screen
w-full

bg-gray-100
dark:bg-gradient-to-br
dark:from-slate-950
dark:via-blue-950
dark:to-slate-900

flex
items-center
justify-center
transition-all
duration-500
'>

<div className='flex flex-col items-center gap-3'>

<ThreeDots
height="70"
width="70"
color={darkMode ? "#ffffff" : "#000000"}
visible={true}
/>

<div className='flex items-center gap-2'>

<p className='
text-black
dark:text-white
text-sm
md:text-lg
'>
Loading Users Page...
</p>

<TailSpin
height="20"
width="20"
color={darkMode ? "#60A5FA" : "#2563EB"}
/>

</div>

</div>

</div>

)

}

return (

<Layout>

<div className='

min-h-full
w-full

bg-gray-100
dark:bg-gradient-to-br
dark:from-slate-950
dark:via-blue-950
dark:to-slate-900

transition-all
duration-500

'>

{/* Header */}

<div className='

w-full
h-[55px]

border-b
border-gray-300
dark:border-slate-800

flex
gap-4

'>

<div className='
h-full
w-[50px]
flex
items-center
'>

<NavLink to="/">

<IoArrowBack
size={24}
className='
text-black
dark:text-white
ml-2
'
/>

</NavLink>

</div>

<div className='
h-full
flex
items-center
'>

<h1 className='

text-black
dark:text-white

font-bold
text-2xl
md:text-3xl

'>

Users Cards

</h1>

</div>

</div>

{

filterUser.length===0 ?

(

<div className='

flex
gap-2
items-center
justify-center
h-[70vh]

'>

<span className='text-black dark:text-white'>
<FaUser size={20}/>
</span>

<h1 className='

text-black
dark:text-white

text-sm
md:text-2xl
font-bold

'>

User not found

</h1>

</div>

)

:

(

<div className='

grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3

gap-6
p-5

pb-35
md:pb-10

'>

{

filterUser.map((item,index)=>(

<div

key={item.id}

className='

relative
rounded-3xl

bg-white
dark:bg-gradient-to-br
dark:from-slate-900
dark:via-slate-800
dark:to-slate-900

border
border-gray-300
dark:border-slate-700

shadow-xl

hover:scale-[1.02]
duration-300
transition-all

p-5

'

>

<div
className='

absolute
top-0
left-0

w-full
h-[3px]

bg-gradient-to-r
from-cyan-500
via-blue-500
to-purple-500

'
/>

<div className='flex items-center gap-4'>

<img
src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${index}`}
alt=""

className='

h-16
w-16

rounded-full

border-2
border-cyan-500

bg-slate-700

'
/>

<div>

<h1

className='

text-blue-700
dark:text-cyan-400

text-xl
font-bold

'

>

{item.name}

</h1>

<p className='

text-gray-600
dark:text-gray-400

text-sm

'>

{item.role}

</p>

</div>

</div>


<div className='mt-5 space-y-3'>

<div className='flex justify-between'>

<p className='
text-gray-600
dark:text-gray-400
'>
Email
</p>

<p
className='

text-black
dark:text-white

text-sm
truncate
max-w-[150px]

'
>

{item.email}

</p>

</div>


<div className='flex justify-between'>

<p className='
text-gray-600
dark:text-gray-400
'>
Status
</p>

<p

className={`

font-bold

${!item.is_blocked
?"text-green-500"
:"text-red-500"}

`}

>

{

!item.is_blocked
?"Active"
:"Blocked"

}

</p>

</div>

</div>


<div

className='

mt-5
pt-4

border-t
border-gray-300
dark:border-slate-700

flex
gap-3

'

>

<BlockedUser
id={item.id}
name={item.name}
updateBlockedUser={updateBlockedUser}
/>

<UnBlockedUser
id={item.id}
name={item.name}
updateUnBlockedUser={updateUnBlockedUser}
/>

</div>

</div>

))

}

</div>

)

}

</div>

</Layout>

)

}

export default withAuth(Users)