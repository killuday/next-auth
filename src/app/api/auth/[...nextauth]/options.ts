import type {NextAuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options:NextAuthOptions={
    providers:[
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                email:{
                    label:'Email',
                    type:'email',
                    placeholder:'Enter your email'
            },
            password:{
                type:'password',
                placeholder:'why are u password',
                label:'Password'

            }
        },
         authorize(credentials, req){
            const {email,password}=credentials as {
                email:string,
                password:string,
            };
            if(email !== 'udaybhanu@hey.com' || password!=='killuday'){
                throw new Error('Invalid credentials');
            }
                return {id:'1234',name:'uday',email:'udaybhanu@hey.com'};
            
        }
        })
           
    ],
    pages:{
        signIn:'/login',
        error:'/error'
     }

}