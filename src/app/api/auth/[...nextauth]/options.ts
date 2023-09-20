import type {NextAuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options:NextAuthOptions={
    providers:[
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                username:{
                    label:'Username',
                    type:'text',
                    placeholder:'Enter your username'
            },
            password:{
                type:'password',
                placeholder:'why are u password',
                label:'Password'

            }
        },
        async authorize(credentials, req){
            const user= {id:'1',name:'Uday Bhanu',password:"killuday"}
            if(credentials?.username===user.name && credentials?.password === user.password){
                return user;
            }else{
                return null;
            }
        }
        })
           
    ],
}