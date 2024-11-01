 export const signUpFormControls =[ {
    name:'userName',
    label:'user name',
    placeholder:'enter the user name',
    type:'text',
    componentType:'input'
},
//email
{
    name:'userEmail',
    label:'user email',
    placeholder:'enter the user email',
    type:'email',
    componentType:'input'
},
//password
{
    name:'password',
    label:'password',
    placeholder:'enter the password',
    type:'password',
    componentType:'input'
},
]
export const signInFormControls =[ 
//email
{
    name:'userEmail',
    label:'user email',
    placeholder:'enter the user email',
    type:'email',
    componentType:'input'
},
//password
{
    name:'password',
    label:'password',
    placeholder:'enter the password',
    type:'password',
    componentType:'input'
},
]

export const initialSigInFormData ={
    userEmail:"",
    password:""
}

export const initialSigupFormData ={
    userName:"",
    userEmail:"",
    password:""
}