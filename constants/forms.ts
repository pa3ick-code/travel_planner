
export const formSignUp = [
    {
        id: "1",
        name: "email",
        label: "Email",
        error: ({ email }: any) => email,
        errMessage: ({ email }: any) => email?.message
    },
    {
        id: "2",
        name: "firstName",
        label: "First Name",
        error: ( { firstName }: any) =>firstName,
        errMessage: ( { firstName }: any) =>firstName?.message
    },
    {
        id: "3",
        name: "lastName",
        label: "Last Name",
        error: ({ lastName }: any) => lastName,
        errMessage: ({ lastName }: any) => lastName?.message
    },
    {
        id: "4",
        name: "password",
        label: "Password",
        error: ({ password }: any) => password,
        errMessage: ({ password }: any) => password?.message
    },
    {
        id: "5",
        name: "confirmPassword",
        label: "Confirm Password",
        error: ({ confirmPassword }: any) => confirmPassword,
        errMessage: ({ confirmPassword }: any) => confirmPassword?.message
    },

]

export const formSignIn = [
    {
        id: "1",
        name: "email",
        label: "Email",
        error: ({ email }: any) => email,
        errMessage: ({ email }: any) => email?.message
    },
    {
    id: "2",
    name: "password",
    label: "Password",
    error: ({ password }: any) => password,
    errMessage: ({ password }: any) => password?.message
},
]