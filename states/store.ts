import { create } from 'zustand'

type States = {
    isMember: boolean,
    email: string,
    password: string,
    fullname: string,
    phone: number
}

type Actions ={
    updateIsMember:(isMember: States['isMember'])=>void
    updateEmail:(email: States['email'])=>void
    updatePassword:(password: States['password'])=>void
    updateFullname:(fullname: States['fullname'])=>void
    updatePhone:(phone: States['phone'])=>void
}


const  useStore = create<States & Actions>((set)=>({
    isMember: true,
    updateIsMember: (isMember)=> set(()=>({isMember: isMember})),

    email: '',
    updateEmail: (email)=> set(()=>({email: email})),

    password:'',
    updatePassword: (password)=> set(()=>({password: password})),

    fullname:'',
    updateFullname: (fullname)=> set(()=>({fullname: fullname})),

    phone: 0 ,
    updatePhone: (phone)=> set(()=>({phone: phone})),
}))

export default useStore